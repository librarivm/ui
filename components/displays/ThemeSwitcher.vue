<script setup>
import { useDark, useToggle } from '@vueuse/core';
import ThemeLightIcon from '~/components/icons/ThemeLightIcon.vue';
import ThemeDarkIcon from '~/components/icons/ThemeDarkIcon.vue';
import BaseButton from '~/components/containments/BaseButton.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <ClientOnly>
    <BaseButton
      class="flex transition-all shrink-0 p-1 align-center justify-center w-sm items-start text-background-foreground"
      size="xs"
      type="button"
      variant="default"
      @click.prevent="toggleDark()"
    >
      <span
        :class="[{ 'bg-primary text-primary-foreground': !isDark }]"
        class="p-1 text-sm rounded-md"
      >
        <ThemeLightIcon height="14px" width="14px" />
      </span>
      <span
        :class="[{ 'bg-primary text-primary-foreground': isDark }]"
        class="p-1 text-sm rounded-md"
      >
        <ThemeDarkIcon height="14px" width="14px" />
      </span>
    </BaseButton>
  </ClientOnly>
</template>
