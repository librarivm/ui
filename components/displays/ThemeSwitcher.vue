<script setup>
import { useDark, useToggle } from '@vueuse/core';
import ThemeLightIcon from '~/components/icons/ThemeLightIcon.vue';
import ThemeDarkIcon from '~/components/icons/ThemeDarkIcon.vue';
import BaseButton from '~/components/containments/BaseButton.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <ClientOnly>
    <BaseButton
      class="flex transition-all shrink-0 p-1 align-center justify-center w-sm items-center"
      size="xs"
      type="button"
      v-bind="$attrs"
      variant="filled"
      @click.prevent="toggleDark()"
    >
      <ThemeLightIcon v-if="isDark" height="16px" width="16px" />
      <ThemeDarkIcon v-else height="16px" width="16px" />
    </BaseButton>
  </ClientOnly>
</template>
