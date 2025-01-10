<script setup>
import { useItemsProps } from '~/composables/props/useItemsProps.js';
import { useContainerXPadding } from '~/composables/ui/useContainerPadding.js';
import BaseButton from '~/components/containments/BaseButton.vue';
import ChevronLeftIcon from '~/components/icons/ChevronLeftIcon.vue';
import ChevronRightIcon from '~/components/icons/ChevronRightIcon.vue';
import PosterCard from '~/components/displays/PosterCard.vue';
import { useAspectRatioProp } from '~/composables/props/useAspectRatioProp.js';
import { useItemsGroup, useItemsGroupProps } from '~/composables/props/useItemsGroupProps.js';
import TextHeading from '~/components/typography/TextHeading.vue';
import TextSubheading from '~/components/typography/TextSubheading.vue';
import BaseSection from '~/components/containments/BaseSection.vue';
import PencilIcon from '~/components/icons/PencilIcon.vue';
import BookOpenIcon from '~/components/icons/BookOpenIcon.vue';
import DetailsIcon from '~/components/icons/DetailsIcon.vue';
import { useTruncate } from '~/composables/utils/useTruncate.js';

const $props = defineProps({
  ...useItemsProps(),
  ...useAspectRatioProp(),
  ...useItemsGroupProps(),
  label: { type: String, default: null },
  text: { type: String, default: null },
});

const content = ref();

/** @param {'right' | 'left'} direction */
const scroll = (direction = 'right') => {
  const scrollBy = $props.scrollBy === 'auto' ? content.value.clientWidth : $props.scrollBy;
  content.value.scrollBy({
    left: scrollBy * (direction === 'left' ? -1 : 1),
    behavior: 'smooth',
  });
};

const { isGrid, isStrip, isList } = useItemsGroup($props.variant);
</script>

<template>
  <div class="flex flex-col gap-3 overflow-visible overflow-y-visible" data-component="items-grid">
    <div
      v-if="$slots.label || label"
      :class="[container && useContainerXPadding()]"
      class="flex justify-between"
    >
      <slot v-if="$slots.label" name="label" />
      <span v-else-if="label" class="font-bold font-serif">{{ label }}</span>

      <slot v-if="!hideControls && isStrip" name="controls" v-bind="{ scroll, scrollBy }">
        <div class="flex shrink-0 items-center ml-4 gap-2">
          <BaseButton
            class="shrink-0 w-6 h-6 p-1"
            size="xs"
            variant="ghost"
            @click="scroll('left')"
          >
            <ChevronLeftIcon />
          </BaseButton>
          <BaseButton
            class="shrink-0 w-6 h-6 p-1"
            size="xs"
            variant="ghost"
            @click="scroll('right')"
          >
            <ChevronRightIcon />
          </BaseButton>
        </div>
      </slot>
    </div>

    <div
      v-if="$slots.text || text"
      :class="[container && useContainerXPadding()]"
      class="text-neutral-500"
    >
      <slot v-if="$slots.text" name="text" />
      <span v-else-if="text">{{ text }}</span>
    </div>

    <slot name="content">
      <div
        ref="content"
        :class="[
          `items-group-${variant}`,
          isGrid && 'flex-wrap',
          isGrid && useContainerXPadding(),
          isList && 'flex-col',
        ]"
        class="flex gap-x-3 gap-y-6 align-middle p-1 overflow-x-auto overflow-y-visible overflow-visible whitespace-nowrap hide-scrollbar"
      >
        <slot v-bind="{ items }">
          <slot name="prepend" v-bind="{ items }" />
          <div v-if="isStrip" :class="[{ 'w-0 md:w-[16px]': container }]" class="shrink-0" />

          <template v-for="(item, i) in items" :key="i">
            <div
              :class="[
                isList && container && 'flex gap-4 flex-1 max-w-full',
                isList && container && useContainerXPadding(),
              ]"
            >
              <slot name="item" v-bind="{ item, index: i, items }">
                <PosterCard
                  :aspect-ratio="aspectRatio"
                  :src="item[itemSrc]"
                  :subtitle="!isList && item[itemSubtitle]"
                  :title="!isList && item[itemTitle]"
                  :to="itemHref(item)"
                >
                  <template v-if="!isList && $slots['item.title']" v-slot:title>
                    <slot name="item.title" v-bind="{ item, i }" />
                  </template>
                  <template v-if="!isList && $slots['item.subtitle']" v-slot:subtitle>
                    <slot name="item.subtitle" v-bind="{ item, i }" />
                  </template>
                </PosterCard>
                <BaseSection
                  v-if="isList"
                  class="flex-col p-0 h-auto gap-1 overflow-visible items-start justify-start align-top"
                >
                  <TextHeading class="text-xl text-wrap max-w-full w-full"
                    >{{ item[itemTitle] }}
                  </TextHeading>
                  <TextSubheading class="font-sans text-md text-neutral-500 font-normal"
                    >{{ item[itemSubtitle] }}
                  </TextSubheading>
                  <div
                    class="text-wrap truncate max-w-lg max-h-[120px]"
                    v-html="useTruncate(item[itemDescription])"
                  />
                  <div class="flex-1 gap-2 items-end flex">
                    <BaseButton size="sm" variant="primary">
                      <BookOpenIcon class="size-4" />
                      Read
                    </BaseButton>
                    <BaseButton size="sm" variant="filled">
                      <DetailsIcon class="size-4" />
                      Details
                    </BaseButton>
                    <BaseButton class="h-9" size="sm" variant="filled">
                      <PencilIcon class="size-4" />
                    </BaseButton>
                  </div>
                </BaseSection>
              </slot>
            </div>
          </template>

          <div v-if="isStrip" :class="[{ 'w-0 md:w-[16px]': container }]" class="shrink-0" />
          <slot name="append" v-bind="{ items }" />
        </slot>
      </div>
    </slot>
  </div>
</template>
