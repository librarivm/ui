<script setup>
import { useUserMenuStore } from '~/stores/useUserMenuStore.js';
import { useUserMenus } from '~/composables/menus/useUserMenus.js';
import BaseMenu from '~/components/containments/BaseMenu.vue';
import HorizontalDivider from '~/components/containments/HorizontalDivider.vue';

const $store = useUserMenuStore();
const { shown } = storeToRefs($store);

const { menus } = useUserMenus();
</script>

<template>
  <BaseMenu v-model="shown" :items="menus" hide-on-click-content>
    <template v-slot:activator="{ prop }">
      <button
        :aria-expanded="shown ? 'true' : 'false'"
        class="z-[51] flex text-sm bg-neutral-800 rounded-full md:me-0 focus:ring-4 focus:ring-neutral-300"
        type="button"
        v-bind="prop"
      >
        <span class="sr-only">Open user menu</span>
        <img
          alt="user photo"
          class="w-8 h-8 rounded-full object-cover border-none"
          src="/tmp/avatar.png"
        />
      </button>
    </template>
    <template v-slot:[`dropdown.prepend`]>
      <div class="px-4 py-3 border-none">
        <span class="block text-sm text-neutral-900 dark:text-white">John Dionisio</span>
        <span class="block text-sm text-neutral-500 truncate dark:text-neutral-400"
          >john.dionisio1@gmail.com</span
        >
      </div>
      <HorizontalDivider />
    </template>
  </BaseMenu>
</template>
