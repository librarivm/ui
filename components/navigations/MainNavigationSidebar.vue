<script setup>
import BaseButton from '~/components/containments/BaseButton.vue';
import PaneDividerIcon from '~/components/icons/PaneDividerIcon.vue';
import BaseSection from '~/components/containments/BaseSection.vue';
import MainNavigationMenus from '~/components/navigations/MainNavigationMenus.vue';
import { useMainNavigationSidebarStore } from '~/stores/useMainNavigationSidebarStore.js';
import GlassPanel from '~/components/containments/GlassPanel.vue';
import BrandComboMark from '~/components/brand/BrandComboMark.vue';
import { storeToRefs } from 'pinia';
import { useAppBreakpoints } from '~/composables/utils/useAppBreakpoints.js';
import ShadowScrim from '~/components/containments/ShadowScrim.vue';

const $store = useMainNavigationSidebarStore();
const { shown, collapsed, expanded } = storeToRefs($store);

const { isMobile } = useAppBreakpoints();
const isScrimActive = computed(() => isMobile.value && shown.value);
</script>

<template>
  <aside
    :class="[collapsed ? 'w-[64px]' : 'w-[320px]', shown ? 'ml-0' : '-ml-[100%]']"
    class="transition-all flex flex-col fixed inset-y-0 start-0 bg-sidebar overflow-x-hidden h-screen border-r z-50"
    data-component="main-navigation-panel"
  >
    <GlassPanel class="flex flex-col h-screen">
      <section class="flex shrink-0 justify-between p-4 h-base">
        <BrandComboMark />

        <BaseButton v-if="expanded" class="p-[3px] border-none" size="xs" @click="$store.rail">
          <PaneDividerIcon class="h-[20px]" />
        </BaseButton>
      </section>

      <BaseSection>
        <MainNavigationMenus />
      </BaseSection>

      <BaseSection class="flex-1 justify-end">
        <BaseButton v-if="collapsed" class="p-1 border-none rounded-[8px]" @click="$store.expand">
          <PaneDividerIcon />
        </BaseButton>
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
