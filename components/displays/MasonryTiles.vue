<script setup>
import { useItemsProps } from '~/composables/props/useItemsProps.js';
import PhotoCard from '~/components/displays/PhotoCard.vue';

defineProps({
  ...useItemsProps(),
  /** @type import('vue').PropType<ColumnGridType> */
  col: { type: [String, Number], default: 12 },
  minColumns: { type: [String, Number], default: 2 },
  width: { type: Number, default: 300 },
});
</script>

<template>
  <ClientOnly>
    <masonry-wall
      :column-width="width"
      :gap="16"
      :items="items"
      :min-columns="minColumns"
      :ssr-columns="4"
    >
      <template v-slot:default="{ item, index }">
        <slot name="item" v-bind="{ item, index }">
          <PhotoCard
            :key="index"
            :alt="item?.[itemTitle]"
            :caption="item?.[itemTitle]"
            :src="item?.[itemSrc]"
            class="w-full shadow my-0"
            variant="default"
          />
        </slot>
      </template>
    </masonry-wall>
  </ClientOnly>
</template>
