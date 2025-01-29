<script setup>
import { useUuid } from '~/composables/utils/useUuid.js';
import snakeCase from 'lodash/snakeCase';
import BaseInputField from '~/components/controls/BaseInputField.vue';
import { useInputControlProps } from '~/composables/props/useInputControlProps.js';
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
import isEmpty from 'lodash/isEmpty.js';

const model = defineModel({ type: String, default: undefined });
const $props = defineProps({ ...useInputControlProps() });

const attrs = useAttrs();
const id = computed(() => snakeCase($props.label || attrs.id || `text_field_${useUuid('_')}`));
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div :class="[!hideDetails && 'mb-4']" class="relative" data-component="text-field">
    <div class="flex justify-between align-center">
      <slot name="top-left">
        <label v-if="!isEmpty(label)" :for="id" class="text-neutral-700 text-base font-medium mb-3">
          {{ label }}
          <span
            v-if="$attrs.hasOwnProperty('required')"
            class="text-red-600 text-sm dark:text-red-400 font-serif"
            >*</span
          >
        </label>
      </slot>
      <slot name="top-right" />
    </div>
    <div v-if="$slots.prepend" class="absolute inset-y-3 left-0 pl-3">
      <slot name="prepend" />
    </div>
    <slot v-bind="{ id, attrs, model }">
      <BaseInputField
        :id="id"
        v-model="model"
        :class="useMergeClasses(['w-full', $slots.prepend && 'pl-9'], attrs.class)"
        v-bind="attrs"
      />
    </slot>
    <div v-if="$slots.append" class="absolute inset-y-3 right-0 pr-3">
      <slot name="append" />
    </div>
    <div v-if="!hideDetails" class="flex justify-between align-center">
      <slot name="bottom-left" />
      <slot name="bottom-right" />
    </div>
  </div>
</template>
