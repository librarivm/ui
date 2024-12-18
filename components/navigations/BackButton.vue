<script setup>
import BaseButton from '~/components/containments/BaseButton.vue';
import ChevronLeftIcon from '~/components/icons/ChevronLeftIcon.vue';
</script>

<template>
  <BaseButton class="items-center" size="xs" variant="ghost">
    <slot name="icon">
      <ChevronLeftIcon class="w-[16px] h-[16px]" />
    </slot>
    <slot>
      <span class="px-1">Back</span>
    </slot>
  </BaseButton>
</template>
