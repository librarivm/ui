<script setup>
import { useUuid } from '~/composables/utils/useUuid.js';
import snakeCase from 'lodash/snakeCase';
import BaseInputField from '~/components/controls/BaseInputField.vue';
import TextField from '~/components/controls/TextField.vue';
import { useInputControlProps } from '~/composables/props/useInputControlProps.js';
import { useItemsProps } from '~/composables/props/useItemsProps.js';

const $props = defineProps({
  ...useInputControlProps(),
  ...useItemsProps(),
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
  <TextField v-bind="$props">
    <BaseInputField
      :id="id"
      class="w-full border-r-8 border-transparent px-4 text-sm outline outline-1 outline-neutral-300 dark:outline-neutral-400"
      field="select"
      v-bind="attrs"
    >
      <slot>
        <option
          v-for="(item, i) in items"
          :key="i"
          :value="item[itemValue] ?? item"
          v-bind="item?.attrs"
        >
          {{ item[itemTitle] ?? item }}
        </option>
      </slot>
    </BaseInputField>
  </TextField>
</template>
