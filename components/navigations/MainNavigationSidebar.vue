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
import ThemeSwitcher from '~/components/displays/ThemeSwitcher.vue';
import PaletteIcon from '~/components/icons/PaletteIcon.vue';

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
      <section class="flex shrink-0 justify-between p-4 h-base">
        <BrandComboMark />
      </section>

      <BaseSection>
        <MainNavigationMenus />
      </BaseSection>

      <BaseSection class="flex-1 gap-2 justify-end">
        <section :class="[collapsed ? 'flex-col' : 'flex-row']" class="flex gap-2 mx-0">
          <BaseButton
            class="w-sm p-1 w-[26px] h-[26px]"
            size="xs"
            variant="filled"
            @click="$store.rail"
          >
            <PaneDividerIcon height="16px" width="16px" />
          </BaseButton>
        </section>
        <section :class="[collapsed ? 'flex-col' : 'flex-row']" class="flex gap-2 mx-0">
          <ThemeSwitcher class="w-[26px] h-[26px]" />
          <BaseButton
            :to="{ name: 'sandbox.ui' }"
            class="w-sm p-1 w-[26px] h-[26px]"
            size="xs"
            variant="filled"
          >
            <PaletteIcon height="16px" width="16px" />
          </BaseButton>
        </section>
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
