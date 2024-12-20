<script setup>
import ShadowScrim from '~/components/containments/ShadowScrim.vue';

defineProps({
  inset: Boolean,
});

const model = ref(false);

const prop = reactive({
  onClick: () => (model.value = !model.value),
});
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <slot name="activator" v-bind="{ model, prop }" />
  <div
    :class="[model ? 'bottom-0' : '-bottom-1/2']"
    class="fixed transition-all left-0 right-0 z-[52]"
    v-bind="$attrs"
  >
    <div :class="[{ 'max-w-4xl': inset }]" class="bg-background !mx-auto">
      <slot />
    </div>
  </div>
  <ShadowScrim :active="model" @click.prevent="model = false" @shortcut:esc="model = false" />
</template>
