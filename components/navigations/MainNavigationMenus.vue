<script setup>
import BaseButton from '~/components/containments/BaseButton.vue';
import BaseIconResolver from '~/components/containments/BaseIconResolver.vue';
import TextOverline from '~/components/typography/TextOverline.vue';
import { useAppBreakpoints } from '~/composables/utils/useAppBreakpoints.js';
import AppLink from '~/components/navigations/AppLink.vue';
import AddLibraryFormPanel from '~/components/forms/AddLibraryFormPanel.vue';
import BaseTooltip from '~/components/feedback/BaseTooltip.vue';

const $sidebar = useMainNavigationSidebarStore();
const { items, expanded } = storeToRefs($sidebar);
const { isMobile } = useAppBreakpoints();

const onItemClick = () => isMobile.value && $sidebar.hide();
</script>

<template>
  <nav data-component="main-navigation-menus">
    <ul class="flex flex-col gap-1">
      <li>
        <TextOverline
          class="font-bold w-full flex items-center justify-between gap-3.5 my-3 text-neutral-500 dark:text-neutral-600"
        >
          <div v-if="expanded" class="flex-1">
            <AppLink :to="{ name: 'libraries.index' }" class="leading-none"> Libraries</AppLink>
          </div>

          <AddLibraryFormPanel class="mx-auto shrink-0" />
        </TextOverline>
      </li>
      <li v-for="(item, index) in items" :key="index">
        <template v-if="item.type === 'subheader'">
          <TextOverline class="font-bold flex gap-3.5 my-3 text-neutral-500 dark:text-neutral-600">
            <BaseIconResolver v-if="item.icon" :icon="item.icon" class="w-[14px] h-[14px] ml-1" />
            <span>{{ item.title }}</span>
          </TextOverline>
        </template>
        <template v-if="item.type === 'divider'">
          <hr class="block w-full my-1 mb-3" />
        </template>
        <template v-else-if="item.type === 'link'">
          <BaseTooltip :disabled="expanded" class="top-0 rounded-lg ml-1 py-2" placement="right">
            <template v-slot:activator>
              <BaseButton
                :active="$sidebar.isActive(item)"
                :class="[
                  expanded ? 'px-3' : 'px-2',
                  'w-full',
                  'font-bold',
                  'flex justify-start shrink-0 gap-4',
                  'focus:outline-none focus:ring-0',
                  '[&.active]:bg-primary [&.active]:text-primary-foreground',
                  'hover:[&.active]:bg-astronaut-blue-950',
                ]"
                :data-active="$sidebar.isActive(item)"
                :to="item.to"
                exact
                size="sm"
                variant="ghost"
                @click="onItemClick"
              >
                <template v-slot:prepend>
                  <BaseIconResolver
                    v-if="item.icon"
                    :icon="item.icon"
                    class="w-[16px] h-[16px] shrink-0"
                  />
                  <div v-else class="ml-4 block w-0" />
                </template>
                <span v-if="expanded">{{ item.title }}</span>
              </BaseButton>
            </template>
            <span>{{ item.title }}</span>
          </BaseTooltip>
        </template>
      </li>
    </ul>
  </nav>
</template>
