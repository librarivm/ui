<script setup>
import BaseCard from '~/components/containments/BaseCard.vue';
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
</script>

<template>
  <BaseCard
    :class="
      useMergeClasses(
        ['fixed max-w-[250px] shadow-xl z-[99] my-4 text-base list-none rounded-lg'],
        $attrs.class
      )
    "
    data-component="base-menu-dropdown"
    v-bind="$attrs"
  >
    <slot />
  </BaseCard>
</template>
