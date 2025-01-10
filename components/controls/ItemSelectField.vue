<script setup>
import TextField from '~/components/controls/TextField.vue';
import AppGrid from '~/components/grids/AppGrid.vue';
import AppColumn from '~/components/grids/AppColumn.vue';
import BaseCard from '~/components/containments/BaseCard.vue';
import BaseCardContent from '~/components/containments/BaseCardContent.vue';
import { useItemsProps, useItemsPropsSelection } from '~/composables/props/useItemsProps.js';
import isEmpty from 'lodash/isEmpty';
import WindIcon from '~/components/icons/WindIcon.vue';
import BaseFlexWrapper from '~/components/containments/BaseFlexWrapper.vue';

const model = defineModel({ type: Array, default: () => [] });
const $props = defineProps({
  ...useItemsProps(),
});

const { items, selected, select, onSelect } = useItemsPropsSelection($props.items, {
  isMultiSelect: false,
});

onSelect((item) => {
  model.value = item;
});
</script>

<template>
  <TextField v-bind="$attrs">
    <template v-slot:default="{ id }">
      <AppGrid :id="id" class="rounded-lg" grid="1" tabindex="0">
        <template v-if="isEmpty(items)">
          <AppColumn class="text-center opacity-50 mx-auto">
            <WindIcon class="mx-auto size-20 m-3" />
            <div>No items found.</div>
          </AppColumn>
        </template>
        <template v-else>
          <BaseFlexWrapper>
            <BaseCard
              v-for="(item, i) in items"
              :key="i"
              :class="[
                {
                  'bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground dark:border-primary':
                    item.selected,
                },
              ]"
              class="aspect-square cursor-pointer max-w-auto md:max-w-20 h-[80px] w-[80px]"
              tabindex="0"
              @click="select(item)"
            >
              <BaseCardContent
                class="py-2 px-3 md:py-3 md:px-4 flex flex-col flex-1 gap-3 justify-center items-center"
              >
                <slot name="item.title" v-bind="{ item, select, selected, index: i }">
                  <span>{{ item[itemTitle] }}</span>
                </slot>
              </BaseCardContent>
            </BaseCard>
          </BaseFlexWrapper>
        </template>
      </AppGrid>
    </template>
  </TextField>
</template>
