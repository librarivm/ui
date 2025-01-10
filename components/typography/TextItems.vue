<script setup>
import { useItemsProps } from '~/composables/props/useItemsProps.js';
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';

const $props = defineProps({
  ...useItemsProps(),
  showOnly: { type: Number, default: 2 },
  showMore: { type: Boolean, default: true },
  separator: { type: String, default: ',&nbsp;' },
});

const showOnly = ref(Number($props.showOnly));

const displayed = computed(() =>
  (showOnly.value
    ? $props.items.length > 1
      ? $props.items.slice(0, showOnly.value)
      : $props.items
    : $props.items
  ).filter(Boolean)
);

const hasHidden = computed(() => $props.items.length > $props.showOnly);

const hasMore = computed(() => !!($props.items.length - showOnly.value && $props.items.length > 1));

const remainder = computed(() => $props.items.length - displayed.value.length);

const onToggleMore = () => {
  showOnly.value = hasMore.value ? $props.items.length : $props.showOnly;
};
</script>

<template>
  <div :class="useMergeClasses(['transition-all', $attrs.class])" data-component="text-items">
    <template v-for="(item, index) in displayed" :key="index">
      <slot name="item" v-bind="{ item, index, items }">
        <span>{{ item?.[itemTitle] ?? item }}</span>
      </slot>
      <slot name="separator">
        <span v-if="displayed.length - 1 > index || (showMore && hasMore)" v-html="separator" />
      </slot>
    </template>

    <slot name="has-more" v-bind="{ hasMore, hasHidden, showMore, remainder }">
      <span v-if="showMore && hasHidden">
        <a class="hover:underline italic" href="#" @click.stop="onToggleMore">
          <template v-if="hasMore">and {{ remainder }} more</template>
          <span v-else class="ml-0.5">(show less)</span>
        </a>
      </span>
    </slot>
  </div>
</template>
