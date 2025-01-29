<script setup>
import BaseButton from '~/components/containments/BaseButton';
import BaseTooltip from '~/components/feedback/BaseTooltip.vue';
import isNil from 'lodash/isNil';

const $props = defineProps({
  title: { type: String, default: null },
  shortcut: { type: String, default: null },
  placement: { type: String, default: 'bottom' },
});

const disabled = computed(() => isNil($props.title));
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <BaseTooltip :disabled="disabled" :placement="placement">
    <template v-slot:activator>
      <BaseButton class="p-1 size-[28px]" size="xs" v-bind="$attrs" variant="ghost">
        <slot />
      </BaseButton>
    </template>
    <div>
      <span v-html="title" />
      <span class="ml-3 opacity-75" v-html="shortcut" />
    </div>
  </BaseTooltip>
</template>
