<script setup>
import { useItemsProps, useItemsPropsSelection } from '~/composables/props/useItemsProps.js';
import VerticalStepperItem from '~/components/selections/VerticalStepperItem.vue';

const $emit = defineEmits(['click:item']);
const $props = defineProps({
  ...useItemsProps(),
  firstItemSelected: { type: Boolean, default: true },
});

const data = computed(() => $props.items);
const { items, select, selectFromIndex, onSelect } = useItemsPropsSelection(data, {
  firstItemSelected: $props.firstItemSelected,
  isMultiSelect: $props.multiple,
});

onSelect((selected) => {
  $emit('click:item', selected);
});

const goToIndex = (index) => {
  selectFromIndex(index);
};
</script>

<template>
  <ol class="overflow-hidden relative space-y-8" data-component="vertical-stepper">
    <slot v-bind="{ items, onSelect, select }">
      <template v-for="(item, i) in items" :key="i">
        <slot name="item" v-bind="{ item, index: i, select, goToIndex }">
          <VerticalStepperItem
            :active="item.selected"
            :description="item?.[itemDescription] ?? item"
            :pipe="i < items.length - 1"
            :title="item?.[itemTitle] ?? item"
            :value="item?.[itemValue] ?? i + 1"
            @click:item="select(item)"
          >
            <template v-slot:value="{ value }">
              <slot
                name="item.value"
                v-bind="{ item, items, onSelect, index: i, select, goToIndex }"
              >
                {{ value }}
              </slot>
            </template>
            <template v-slot:title="{ title }">
              <slot
                name="item.title"
                v-bind="{ item, items, onSelect, index: i, select, goToIndex }"
              >
                {{ title }}
              </slot>
            </template>
            <template v-slot:description="{ description }">
              <slot
                name="item.description"
                v-bind="{ item, items, onSelect, index: i, select, goToIndex }"
              >
                {{ description }}
              </slot>
            </template>
          </VerticalStepperItem>
        </slot>
      </template>
    </slot>
  </ol>
</template>
