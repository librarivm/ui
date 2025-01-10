<script setup>
import { useItemsProps, useItemsPropsSelection } from '~/composables/props/useItemsProps.js';
import BaseIconResolver from '~/components/containments/BaseIconResolver.vue';
import TextOverline from '~/components/typography/TextOverline.vue';
import { useNameProp } from '~/composables/props/useNameProp.js';

const $emit = defineEmits(['click:item']);

const $props = defineProps({
  ...useNameProp(),
  ...useItemsProps(),
});

const data = computed(() => $props.items);
const { items, select, selected } = useItemsPropsSelection(data, {
  name: $props.name,
  firstItemSelected: $props.firstItemSelected,
  isMultiSelect: $props.multiple,
});

const onSelect = (item) => {
  select(item);
  $emit('click:item', item);
};
</script>

<template>
  <ul class="flex flex-col gap-1" data-component="list-items">
    <li
      v-for="(item, i) in items"
      :key="i"
      :class="[item.selected && 'bg-primary text-primary-foreground hover:bg-primary']"
      class="hover:bg-neutral-100 px-3 py-1 cursor-pointer rounded-md"
      @click="onSelect(item)"
    >
      <template v-if="item?.[itemType] === 'subheader'">
        <TextOverline class="font-bold flex gap-3.5 my-3 text-neutral-500 dark:text-neutral-600">
          <BaseIconResolver
            v-if="item?.[itemIcon]"
            :icon="item?.[itemIcon]"
            class="w-[14px] h-[14px] ml-1"
          />
          <span>{{ item?.[itemTitle] }}</span>
        </TextOverline>
      </template>
      <template v-if="item?.[itemType] === 'divider'">
        <hr class="block w-full my-1 mb-3" />
      </template>
      <template v-else>
        <slot name="item" v-bind="{ item, index: i, selected, items }">
          <div class="flex gap-3 items-center align-middle">
            <slot name="item.prepend">
              <BaseIconResolver
                v-if="item?.[itemIcon]"
                :icon="item?.[itemIcon]"
                class="w-[14px] h-[14px] ml-1"
              />
            </slot>
            <slot name="item.title">
              <span>{{ item?.[itemTitle] ?? item?._value ?? item }}</span>
            </slot>
          </div>
        </slot>
      </template>
    </li>
  </ul>
</template>
