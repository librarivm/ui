<script setup>
import { useSizeVariantsProp } from '~/composables/props/useSizeVariantsProp.js';

defineProps({
  ...useSizeVariantsProp({ type: String }),
  src: { type: String, default: undefined },
  alt: { type: String, default: undefined },
});
</script>

<template>
  <picture>
    <slot name="srcset">
      <source v-if="xl" :srcset="xl" class="max-w-xl" />
      <source v-if="lg" :srcset="lg" class="max-w-lg" />
      <source v-if="md" :srcset="md" class="max-w-md" />
      <source v-if="sm" :srcset="sm" class="max-w-sm" />
      <source v-if="xs" :srcset="xs" class="max-w-xs" />
    </slot>
    <slot>
      <img :alt="alt" :src="src" class="w-auto" />
    </slot>
  </picture>
</template>
