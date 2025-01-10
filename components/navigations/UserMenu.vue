<script setup>
import { useUserMenuStore } from '~/stores/useUserMenuStore.js';
import { useUserMenus } from '~/menus/useUserMenus.js';
import AppLink from '~/components/navigations/AppLink.vue';
import { onClickOutside } from '@vueuse/core';
import BaseCard from '~/components/containments/BaseCard.vue';
import HorizontalDivider from '~/components/containments/HorizontalDivider.vue';

const $store = useUserMenuStore();
const { shown, hidden } = storeToRefs($store);

const { menus } = useUserMenus();

const menu = ref();
onClickOutside(menu, () => {
  $store.hide();
});
</script>

<template>
  <nav
    ref="menu"
    class="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
    data-component="user-menu"
  >
    <button
      :aria-expanded="shown ? 'true' : 'false'"
      class="z-[51] flex text-sm bg-neutral-800 rounded-full md:me-0 focus:ring-4 focus:ring-neutral-300"
      type="button"
      @click.prevent="$store.toggle"
    >
      <span class="sr-only">Open user menu</span>
      <img
        alt="user photo"
        class="w-8 h-8 rounded-full object-cover border-none"
        src="/tmp/avatar.png"
      />
    </button>
    <BaseCard
      :class="[shown && 'visible opacity-1', hidden && 'invisible opacity-0']"
      class="absolute min-w-[250px] transition-all top-full shadow-xl right-0 z-50 my-4 text-base list-none rounded-lg"
    >
      <div class="px-4 py-3 border-none">
        <span class="block text-sm text-neutral-900 dark:text-white">John Dionisio</span>
        <span class="block text-sm text-neutral-500 truncate dark:text-neutral-400"
          >john.dionisio1@gmail.com</span
        >
      </div>
      <HorizontalDivider />
      <ul aria-labelledby="user-menu-button" class="py-2">
        <li v-for="(item, i) in menus" :key="i">
          <template v-if="item.type === 'divider'">
            <HorizontalDivider />
          </template>
          <template v-else>
            <AppLink
              :to="item.to"
              class="block hover:no-underline px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 dark:hover:bg-primary dark:hover:text-white"
              >{{ item.title }}
            </AppLink>
          </template>
        </li>
      </ul>
    </BaseCard>
  </nav>
</template>
