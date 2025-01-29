<script setup>
import ShadowScrim from '~/components/containments/ShadowScrim.vue';
import BaseCard from '~/components/containments/BaseCard.vue';

const $emit = defineEmits(['close', 'open', 'shortcut:hit']);
const model = defineModel('modelValue', false);
defineProps({
  inset: Boolean,
  modelValue: Boolean,
});

watchEffect(() => {
  $emit(model.value ? 'open' : 'close');
});

const prop = reactive({
  onClick: () => (model.value = !model.value),
});

const onShortcutHit = () => {
  model.value = false;
  $emit('close');
  $emit('shortcut:hit', model.value);
};
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <slot name="activator" v-bind="{ model, prop }" />
  <ShadowScrim :active="model" @click.prevent="onShortcutHit" @shortcut:esc="onShortcutHit">
    <div
      :class="[model ? 'bottom-0' : '-bottom-1/2']"
      class="fixed transition-all left-0 right-0 z-[54]"
      data-component="bottom-sheet"
    >
      <BaseCard
        :class="[{ 'max-w-4xl': inset }]"
        class="rounded-t-lg rounded-b-none !mx-auto"
        v-bind="$attrs"
      >
        <slot />
      </BaseCard>
    </div>
  </ShadowScrim>
</template>
