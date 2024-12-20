<script setup>
import { useUuid } from '~/composables/utils/useUuid.js';
import snakeCase from 'lodash/snakeCase';
import BaseInputField from '~/components/controls/BaseInputField.vue';

const $props = defineProps({
  label: { type: String, default: '' },
  hideDetails: { type: Boolean, default: false },
});

const { generate } = useUuid();

const attrs = useAttrs();
const id = computed(() => snakeCase($props.label || attrs.id || `text_field_${generate('_')}`));
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div class="mb-4" data-component="text-field">
    <div class="flex justify-between align-center">
      <slot name="top-left">
        <label v-if="label" :for="id" class="text-neutral-700 text-base font-medium mb-3">
          {{ label }}
        </label>
      </slot>
      <slot name="top-right" />
    </div>
    <BaseInputField :id="id" class="w-full" v-bind="attrs" />
    <div v-if="!hideDetails" class="flex justify-between align-center">
      <slot name="bottom-left" />
      <slot name="bottom-right" />
    </div>
  </div>
</template>
