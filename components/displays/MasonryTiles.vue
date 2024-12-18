<script setup>
import { useItemProp, useItemPropSelection } from '~/composables/props/useItemProp.js';
import PhotoCard from '~/components/displays/PhotoCard.vue';

const $emit = defineEmits(['click:item']);

defineProps({
  ...useItemProp(),
  /** @type import('vue').PropType<ColumnGridType> */
  col: { type: [String, Number], default: 12 },
  width: { type: String, default: '200px' },
  activatable: Boolean,
});

const { selected, select } = useItemPropSelection();
const onItemClick = (item) => {
  select(item);
  $emit('click:item', { item, selected });
};
</script>

<template>
  <div data-component="masonry-tiles">
    <div
      :style="`columns: ${col} ${width}`"
      class="[&>*]:break-inside-avoid-column prose-figure:m-0 prose-figure:mb-4"
    >
      <slot name="items" v-bind="{ items, selected, onItemClick }">
        <template v-for="(item, i) in items" :key="i">
          <div class="cursor-pointer" @click="onItemClick(item)">
            <slot
              name="item"
              v-bind="{ item, isSelected: item.selected, index: i, items, onItemClick }"
            >
              <PhotoCard
                :alt="item?.[itemTitle]"
                :caption="item?.[itemTitle]"
                :src="item?.[itemSrc]"
                class="w-full mb-5 shadow"
              />
            </slot>
          </div>
        </template>
      </slot>
    </div>
  </div>
</template>
