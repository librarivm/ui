<script setup>
import snakeCase from 'lodash/snakeCase';
import { useNameProps } from '~/composables/props/useNameProps.js';
import { useInputControlProps } from '~/composables/props/useInputControlProps.js';
import { useUuid } from '~/composables/utils/useUuid.js';
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';

const $props = defineProps({
  ...useNameProps(),
  ...useInputControlProps(),
  indeterminate: Boolean,
});

const attrs = useAttrs();
const id = computed(() => snakeCase($props.label || attrs.id || `text_field_${useUuid('_')}`));

const checked = ref(false);
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div class="flex items-center">
    <input
      :id="id"
      v-model="checked"
      :class="
        useMergeClasses(
          [
            'shrink-0 mt-0.5',
            'rounded',
            'text-primary',
            'disabled:opacity-50 disabled:pointer-events-none',
            'border-gray-200 focus:ring-primary',
            'dark:bg-gray-800 dark:border-gray-700',
            'dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-gray-800',
          ],
          $attrs.class
        )
      "
      :indeterminate="indeterminate"
      :name="name"
      type="checkbox"
      v-bind="$attrs"
    />
    <label :for="id" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      <slot name="label" />
    </label>
  </div>
</template>
