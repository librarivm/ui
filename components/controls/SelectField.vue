<script setup>
import { useUuid } from '~/composables/utils/useUuid.js';
import snakeCase from 'lodash/snakeCase';
import BaseInputField from '~/components/controls/BaseInputField.vue';
import TextField from '~/components/controls/TextField.vue';
import { useInputControlProps } from '~/composables/props/useInputControlProps.js';
import { useItemsProps } from '~/composables/props/useItemsProps.js';
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
import pick from 'lodash/pick.js';

const $props = defineProps({
  ...useInputControlProps(),
  ...useItemsProps(),
});

const attrs = useAttrs();
const id = computed(() => snakeCase($props.label || attrs.id || `text_field_${useUuid('_')}`));
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <TextField v-bind="pick($props, ['label', 'hideDetails'])">
    <BaseInputField
      :id="id"
      :class="
        useMergeClasses(
          [
            'w-full',
            'py-3 px-4 pe-9 block w-full rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none',
            'border-gray-200',
            'dark:text-gray-400 dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-700 dark:placeholder-gray-500 dark:focus:ring-gray-600',
          ],
          attrs.class
        )
      "
      field="select"
      v-bind="attrs"
    >
      <slot>
        <option
          v-for="(item, i) in items"
          :key="i"
          :value="item?.[itemValue] ?? item"
          v-bind="item?.attrs"
        >
          {{ item?.[itemTitle] ?? item }}
        </option>
      </slot>
    </BaseInputField>
  </TextField>
</template>
