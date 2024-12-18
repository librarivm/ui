<script setup>
defineProps({
  src: { type: String, default: '' },
  disabled: Boolean,
});
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <slot v-if="disabled" />
  <div
    v-else
    :style="`background-image: url('${src}');`"
    class="relative pt-8 pb-10 overflow-hidden bg-cover bg-no-repeat"
    v-bind="$attrs"
  >
    <div class="z-10 relative">
      <slot />
    </div>
    <div class="absolute top-0 left-0 w-full h-full bg-black/75 z-[1]" />
  </div>
</template>
