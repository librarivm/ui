<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
import BaseButton from '~/components/containments/BaseButton.vue';
import SendToBackIcon from '~/components/icons/SendToBackIcon.vue';

defineProps({
  src: { type: String, default: null },
});

const isShown = ref(true);
const toggle = () => (isShown.value = !isShown.value);
</script>

<template>
  <div
    :class="
      useMergeClasses(
        [
          '-mt-16 pt-16',
          'bg-no-repeat relative',
          'bg-contain',
          'md:bg-[length:auto_600px] md:bg-[right_-5rem_top]',
          'md:before:content-[\'\'] md:before:absolute md:before:left-0 md:before:top-0',
          'md:before:w-full md:before:h-full',
          'md:before:bg-gradient-to-r md:before:from-50% md:before:from-workspace',
        ],
        $attrs.class
      )
    "
    :style="isShown ? `background-image: url('${src}');` : undefined"
    data-component="backdrop-window"
  >
    <BaseButton
      :class="isShown ? 'rotate-0' : 'rotate-180'"
      class="transition-transform bg-background/50 duration-500 ease-in-out absolute z-10 mt-16 top-4 right-4 size-8 rounded-full"
      size="xs"
      variant="ghost"
      @click.stop="toggle"
    >
      <SendToBackIcon class="transition-all size-4" />
    </BaseButton>
    <div
      :class="[
        'before:content-[\'\'] before:absolute before:left-0 before:top-0',
        'before:w-full before:h-full',
        'before:bg-gradient-to-t before:from-workspace',
        'before:from-75%  md:before:from-20% md:before:to-40%',
      ]"
    />
    <div class="relative">
      <slot />
    </div>
  </div>
</template>
