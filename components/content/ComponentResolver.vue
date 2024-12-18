<script setup>
const $props = defineProps({
  componentName: { type: String, required: true },
  componentType: { type: String, required: true },
});

const name = defineAsyncComponent(() => import(`~/components/${$props.componentType}/${$props.componentName}.vue`));
const resolverName = computed(() => `${$props.componentType}/${$props.componentName}`);
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <component :is="name" :data-resolver-name="resolverName" data-component="component-resolver" v-bind="$attrs">
    <template v-if="$slots.activator" v-slot:activator="{ prop }">
      <div v-bind="prop">
        <ContentSlot :use="$slots.activator" />
      </div>
    </template>
    <ContentSlot :use="$slots.default" />
  </component>
</template>
