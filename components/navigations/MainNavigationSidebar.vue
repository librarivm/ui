<script setup>
import BaseSection from '~/components/containments/BaseSection.vue';
import BrandComboMark from '~/components/brand/BrandComboMark.vue';
import GlassPanel from '~/components/containments/GlassPanel.vue';
import MainNavigationMenus from '~/components/navigations/MainNavigationMenus.vue';
import ShadowScrim from '~/components/containments/ShadowScrim.vue';
import { storeToRefs } from 'pinia';
import { useAppBreakpoints } from '~/composables/utils/useAppBreakpoints.js';
import { useMainNavigationSidebarStore } from '~/stores/useMainNavigationSidebarStore.js';
import MainNavigationSidebarRail from '~/components/navigations/MainNavigationSidebarRail.vue';
import SecondaryNavigationMenus from '~/components/navigations/SecondaryNavigationMenus.vue';

const $store = useMainNavigationSidebarStore();
const { shown, collapsed, expanded } = storeToRefs($store);

const { isMobile } = useAppBreakpoints();
const isScrimActive = computed(() => isMobile.value && shown.value);
</script>

<template>
  <aside
    :class="[collapsed ? 'w-[64px]' : 'w-[320px]', shown ? 'ml-0' : '-ml-[100%]']"
    class="transition-all flex flex-col fixed inset-y-0 start-0 bg-sidebar overflow-x-visible h-screen border-r z-[52]"
    data-component="main-navigation-panel"
  >
    <GlassPanel class="flex flex-col h-screen">
      <section
        :class="[collapsed && 'justify-center']"
        class="flex shrink-0 items-center gap-3 p-4 h-base"
      >
        <MainNavigationSidebarRail />
        <BrandComboMark v-if="expanded" />
      </section>

      <BaseSection>
        <MainNavigationMenus />
      </BaseSection>

      <BaseSection class="flex-1 gap-2 justify-end">
        <SecondaryNavigationMenus />
      </BaseSection>
    </GlassPanel>
  </aside>
  <ShadowScrim
    :active="isScrimActive"
    :class="[collapsed ? 'left-[64px]' : expanded ? 'left-[320px]' : '-left-[100%]']"
    class="transition-all"
    @click.stop="$store.toggle()"
  />
</template>
