<script setup>
import { useUuid } from '~/composables/utils/useUuid.js';
import snakeCase from 'lodash/snakeCase';
import BaseInputField from '~/components/controls/BaseInputField.vue';
import TextField from '~/components/controls/TextField.vue';
import { useInputControlProps } from '~/composables/props/useInputControlProps.js';

const $props = defineProps(useInputControlProps());

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
    <BaseInputField :id="id" class="w-full" field="textarea" v-bind="attrs" />
  </TextField>
</template>
