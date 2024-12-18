<script setup>
import BaseButton from '~/components/containments/BaseButton.vue';
import PanelRightOpenIcon from '~/components/icons/PanelRightOpenIcon.vue';
import PanelRightCloseIcon from '~/components/icons/PanelRightCloseIcon.vue';

const $store = useMainNavigationSidebarStore();
const { shown } = storeToRefs($store);
</script>

<template>
  <BaseButton class="items-center" size="xs" variant="ghost" @click="$store.toggle">
    <slot>
      <PanelRightOpenIcon v-if="shown" class="w-[16px] h-[16px]" />
      <PanelRightCloseIcon v-else class="w-[16px] h-[16px]" />
    </slot>
  </BaseButton>
</template>
