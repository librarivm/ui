<script setup>
import { useItemsProps, useItemsPropsSelection } from '~/composables/props/useItemsProps.js';
import {
  deduplicateHeaders,
  getHeaderSortOrder,
  getHeaderSortValue,
  sortHeader,
  useHeadersProps,
} from '~/composables/props/useHeadersProps.js';
import BaseIconResolver from '~/components/containments/BaseIconResolver.vue';
import BasePagination from '~/components/navigations/BasePagination.vue';
import DownArrowWideNarrowIcon from '~/components/icons/DownArrowWideNarrowIcon.vue';
import IndeterminateProgressBar from '~/components/feedback/IndeterminateProgressBar.vue';
import UpArrowNarrowWideIcon from '~/components/icons/UpArrowNarrowWideIcon.vue';
import { useLoadingProps } from '~/composables/props/useLoadingProps.js';
import { usePaginationProps } from '~/composables/props/usePaginationProps.js';
import { useSelectableProps } from '~/composables/props/useSelectableProps.js';
import CheckboxField from '~/components/controls/CheckboxField.vue';

const $selected = defineModel('selected', { type: Array, default: () => [] });

const $props = defineProps({
  ...useHeadersProps(),
  ...useItemsProps(),
  ...useLoadingProps(),
  ...usePaginationProps(),
  ...useSelectableProps(),
});

const $emit = defineEmits(['update:header', 'update:footer', 'update:options']);

const $route = useRoute();
const $router = useRouter();
const $query = computed(() => $route.query);

const $sort = computed(() =>
  ($route.query.sort || []).map((sort) => ({
    value: getHeaderSortValue(sort),
    order: getHeaderSortOrder(sort),
  }))
);

$props.headers.forEach((header) => {
  header.sort = $sort.value.find((s) => s.value === header[$props.itemValue])?.order || '';
});

$selected.value = $props.selected;

const onHeaderSort = (header) => {
  sortHeader(header);

  $emit('update:header', header);

  $router.push({
    query: {
      ...$route.query,
      sort: deduplicateHeaders([
        ...($route.query.sort || []),
        `${header[$props.itemValue]},${header.sort}`,
      ]),
    },
  });
};

const { items, select, onSelect, isAllSelected, toggleSelectAll } = useItemsPropsSelection(
  unref($props.items),
  {
    initialValues: $props.selected,
    isMultiSelect: true,
  }
);

const onPagination = ({ page, perPage }) => {
  $emit('update:footer', page);
  $router.push({
    query: {
      ...$route.query,
      per_page: perPage,
      page,
    },
  });
};

onSelect((selected) => {
  $selected.value = selected;
});

watch($query, (query) => {
  $emit('update:options', query);
});
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div class="relative rounded-lg overflow-x-auto overflow-y-hidden" v-bind="$attrs">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th v-if="selectable" class="pl-6 pr-0 py-3 w-2 text-center" scope="col">
            <CheckboxField
              :checked="isAllSelected"
              :indeterminate="selected.length > 0 && selected.length < items.length"
              class="mx-auto"
              @click="toggleSelectAll"
            />
          </th>
          <th v-for="(header, index) in headers" :key="index" class="px-6 py-3" scope="col">
            <div class="flex gap-3 items-center" v-bind="header.attrs">
              <slot v-if="header?.icon" name="header.icon" v-bind="{ header, index }">
                <BaseIconResolver :icon="header.icon" class="size-4" />
              </slot>
              <span
                :class="[header.sortable ? 'cursor-pointer' : 'cursor-default']"
                :role="header.sortable ? 'button' : undefined"
                class="rounded-md flex items-center gap-2"
                @click.prevent="onHeaderSort(header)"
              >
                <span :class="[header.sortable && 'hover:underline']">
                  <slot name="header.title" v-bind="{ header, index }">
                    {{ header?.[headerTitle] || header }}
                  </slot>
                </span>
                <slot v-if="header.sortable" name="header.sort" v-bind="{ header, index }">
                  <DownArrowWideNarrowIcon v-if="header.sort === 'desc'" class="size-4" />
                  <UpArrowNarrowWideIcon v-if="header.sort === 'asc'" class="size-4" />
                  <div v-if="header.sort === ''" class="size-4" />
                </slot>
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="100%"><IndeterminateProgressBar :active="loading" /></td>
        </tr>
        <tr
          v-for="(item, index) in items"
          :key="index"
          :class="[loading && 'opacity-75']"
          class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b border-neutral-100 dark:border-gray-700"
          v-bind="{ item, index }"
        >
          <td v-if="selectable" class="pl-6 pr-0 py-4 text-center text-gray-900 dark:text-gray-100">
            <CheckboxField :checked="item.selected" class="mx-auto" @click="select(item, index)" />
          </td>
          <td
            v-for="(header, j) in headers"
            :key="j"
            class="px-6 py-4 text-gray-900 dark:text-gray-100"
            v-bind="header.attrs"
          >
            <slot :name="`item.${header[headerValue]}`" v-bind="{ item, header, index }">
              {{ item?.[header[headerValue]] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <BasePagination
    :current="current"
    :per-page="perPage"
    :sibling-count="siblingCount"
    :total="total"
    class="mt-3"
    @update:current="onPagination"
  />
</template>
