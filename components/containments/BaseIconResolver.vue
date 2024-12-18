<script setup>
import { defineAsyncComponent } from 'vue';

const $props = defineProps({
  icon: { type: String, required: true },
});

const icon = defineAsyncComponent(() => import(`~/components/icons/${$props.icon}.vue`));
</script>

<template>
  <component :is="icon" v-if="icon" />
</template>
