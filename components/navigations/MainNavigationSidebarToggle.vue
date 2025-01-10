<script setup>
import BaseButton from '~/components/containments/BaseButton.vue';
import PanelRightOpenIcon from '~/components/icons/PanelRightOpenIcon.vue';
import PanelRightCloseIcon from '~/components/icons/PanelRightCloseIcon.vue';

const $store = useMainNavigationSidebarStore();
const { shown } = storeToRefs($store);
</script>

<template>
  <BaseButton
    class="items-center w-[26px] h-[26px] p-1"
    size="xs"
    variant="filled"
    @click="$store.toggle"
  >
    <slot>
      <PanelRightOpenIcon v-if="shown" class="w-[16px] h-[16px]" />
      <PanelRightCloseIcon v-else class="w-[16px] h-[16px]" />
    </slot>
  </BaseButton>
</template>
