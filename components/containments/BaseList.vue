<script setup>
import { useItemsProps } from '~/composables/props/useItemsProps.js';
import BaseIconResolver from '~/components/containments/BaseIconResolver.vue';
import TextOverline from '~/components/typography/TextOverline.vue';
import SkeletonLoader from '~/components/feedback/SkeletonLoader.vue';
import BaseButton from '~/components/containments/BaseButton.vue';
import BaseTooltip from '~/components/feedback/BaseTooltip.vue';
import { useLoadingProps } from '~/composables/props/useLoadingProps.js';
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';

const $emit = defineEmits(['click:item']);

defineProps({
  ...useItemsProps(),
  ...useLoadingProps(),
  tooltip: Boolean,
  collapsed: Boolean,
  linkProps: { type: Object, default: () => ({ class: '' }) },
});

const onItemClick = (item) => {
  $emit('click:item', item);
};
</script>

<template>
  <nav data-component="base-list">
    <ul class="flex flex-col gap-1">
      <li v-for="(item, index) in items" :key="index">
        <slot name="item" v-bind="{ item, index }">
          <template v-if="item?.[itemType] === 'subheader'">
            <slot name="subheader" v-bind="{ item, index }">
              <TextOverline
                class="font-bold flex gap-3.5 my-3 text-neutral-500 dark:text-neutral-600"
              >
                <BaseIconResolver
                  v-if="item?.[itemIcon]"
                  :icon="item?.[itemIcon]"
                  class="w-[14px] h-[14px] ml-1"
                />
                <span>{{ item?.[itemTitle] ?? item }}</span>
              </TextOverline>
            </slot>
          </template>
          <template v-if="item?.[itemType] === 'divider'">
            <slot name="divider" v-bind="{ item, index }">
              <hr class="block w-full my-1 mb-3" />
            </slot>
          </template>
          <template v-else>
            <slot name="link" v-bind="{ item, index }">
              <SkeletonLoader :active="loading">
                <BaseTooltip
                  :disabled="!tooltip"
                  class="top-0 rounded-lg ml-1 py-2"
                  placement="right"
                >
                  <template v-slot:activator>
                    <BaseButton
                      :active="item?.active"
                      :class="
                        useMergeClasses(
                          [
                            'w-full',
                            'text-sm font-normal',
                            'rounded-none',
                            collapsed ? 'px-2' : 'px-3',
                            'flex justify-start shrink-0 gap-4',
                            'focus:outline-none focus:ring-0',
                            '[&.active]:bg-primary [&.active]:text-primary-foreground',
                            'hover:[&.active]:bg-astronaut-blue-950',
                          ],
                          linkProps?.class
                        )
                      "
                      :data-active="item?.active ? 'true' : 'false'"
                      :to="item?.to"
                      exact
                      size="sm"
                      v-bind="linkProps"
                      variant="ghost"
                      @click="onItemClick(item)"
                    >
                      <template v-slot:prepend>
                        <BaseIconResolver
                          v-if="item?.[itemIcon]"
                          :icon="item?.[itemIcon]"
                          class="w-4 shrink-0"
                        />
                      </template>
                      <span v-if="!collapsed">{{ item?.[itemTitle] ?? item }}</span>
                    </BaseButton>
                  </template>
                  <span>{{ item?.[itemTitle] ?? item }}</span>
                </BaseTooltip>
              </SkeletonLoader>
            </slot>
          </template>
        </slot>
      </li>
    </ul>
  </nav>
</template>
