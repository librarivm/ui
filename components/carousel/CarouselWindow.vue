<script setup>
import { useItemsProps } from '~/composables/props/useItemsProps.js';
import CarouselItem from '~/components/carousel/CarouselItem.vue';

defineProps({
  ...useItemsProps(),
  centered: { type: Boolean, default: true },
});
</script>

<template>
  <div class="relative w-full" data-component="carousel-window">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <slot>
        <CarouselItem
          v-for="(item, i) in items"
          :key="i"
          :class="{ 'justify-center items-center text-center max-auto align-middle': centered }"
        >
          <span>sd</span>
          <pre>{{ item }}</pre>
        </CarouselItem>
      </slot>
    </div>
  </div>
</template>
