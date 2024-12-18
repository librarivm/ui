<script setup>
/** @typedef { 'default' | 'polaroid' } PhotoCardVariantType */

const $props = defineProps({
  /** @type import('vue').PropType<PhotoCardVariantType> */
  variant: { type: String, default: 'default' },
  caption: { type: String, default: '' },
  alt: { type: String, default: '' },
  src: { type: String, default: '' },
  active: Boolean,
});

const isPolaroid = computed(() => $props.variant === 'polaroid');
const isDefault = computed(() => $props.variant === 'default');
</script>

<template>
  <figure
    :class="[
      { 'opacity-85 outline outline-primary': active },
      { 'bg-white p-3 rounded-xs': isPolaroid },
      { 'rounded-md': isDefault },
    ]"
    class="overflow-hidden hover:outline hover:outline-primary focus:outline-4 focus:outline-primary shadow"
    data-component="photo-card"
    tabindex="0"
    v-bind="$attrs"
  >
    <img :alt="alt" :src="src" class="w-full h-full object-cover object-top" />
    <template v-if="$slots.caption">
      <figcaption class="mt-3 text-center text-wrap break-words text-neutral-500">
        <slot name="caption" />
      </figcaption>
    </template>
    <figcaption
      v-else-if="caption && isPolaroid"
      class="mt-3 text-center text-wrap break-words text-neutral-500"
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>
