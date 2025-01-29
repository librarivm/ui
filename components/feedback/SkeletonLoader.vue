<script setup>
defineProps({
  count: { type: Number, default: 1 },
  active: { type: Boolean, default: true },
})
</script>

<script>
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div v-if="active" class="skeleton-loader flex flex-col space-y-1 animate-pulse" data-component="skeleton-loader" v-bind="$attrs">
    <div v-for="item in count" :key="item" class="animate-pulse">
      <slot name="loader" v-bind="{ item, count }">
        <div class="h-8 bg-neutral-300 rounded-lg w-full" />
      </slot>
    </div>
  </div>
  <slot />
</template>
