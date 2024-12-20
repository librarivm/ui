<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
import { useMagicKeys, whenever } from '@vueuse/core';

const $emit = defineEmits(['shortcut:esc']);

defineProps({
  color: { type: String, default: 'bg-black/40' },
  active: Boolean,
});

const { escape } = useMagicKeys();
whenever(escape, () => $emit('shortcut:esc', false));
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div
    :class="
      useMergeClasses(
        [
          active ? 'opacity-100 visible' : 'opacity-0 invisible',
          'fixed',
          'top-0 left-0 right-0 bottom-0',
          'w-screen h-screen',
          'transition-all duration-200',
          'z-[51]',
          color,
        ],
        $attrs.class
      )
    "
    data-component="shadow-scrim"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>
