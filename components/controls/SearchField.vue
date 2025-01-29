<script setup>
import TextField from '~/components/controls/TextField.vue';
import SearchIcon from '~/components/icons/SearchIcon.vue';
import debounce from 'lodash/debounce.js';
import { useClosableProps } from '~/composables/props/useClosableProps.js';
import CloseIcon from '~/components/icons/CloseIcon.vue';
import isEmpty from 'lodash/isEmpty.js';

const query = defineModel('modelValue', { type: String });

const $props = defineProps({
  ...useClosableProps(),
  delay: { type: Number, default: 800 },
});

const $emit = defineEmits(['update:modelValue']);

const $route = useRoute();
const $router = useRouter();

query.value = $route.query.q || '';

const onKeyup = debounce((e) => {
  query.value = e.target.value;
  $emit('update:modelValue', e.target.value);
  $router.push({ query: { ...$route.query, q: e.target.value } });
}, $props.delay);

const clearQuery = () => {
  query.value = '';
  $emit('update:modelValue', '');
  $router.push({ query: { ...$route.query, q: '' } });
};
</script>

<template>
  <TextField :model-value="query" hide-details v-bind="$attrs" @keyup="onKeyup">
    <template v-slot:prepend>
      <SearchIcon class="size-4" />
    </template>
    <template v-slot:append>
      <CloseIcon v-if="!isEmpty(query)" class="size-4" role="button" @click="clearQuery" />
    </template>
  </TextField>
</template>
