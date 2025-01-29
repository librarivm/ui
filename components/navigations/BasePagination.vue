<script setup>
import BaseButton from '~/components/containments/BaseButton.vue';
import ChevronLeftIcon from '~/components/icons/ChevronLeftIcon.vue';
import ChevronRightIcon from '~/components/icons/ChevronRightIcon.vue';
import BaseTooltip from '~/components/feedback/BaseTooltip.vue';
import { usePaginationProps } from '~/composables/props/usePaginationProps.js';
import SelectField from '~/components/controls/SelectField.vue';

const $emit = defineEmits(['update:current']);

const $props = defineProps({
  ...usePaginationProps(),
});

const current = ref($props.current || 1);
const perPage = ref($props.perPage || 10);
const quotient = computed(() => Math.ceil($props.total / $props.perPage));
const pages = computed(() => {
  const pages = [];
  const siblingCount = $props.siblingCount || 1;
  const currentPage = current.value;
  const totalPageCount = quotient.value;

  const startPage = Math.max(2, currentPage - siblingCount); // Start after page 1
  const endPage = Math.min(totalPageCount - 1, currentPage + siblingCount); // End before last page

  // Always include the first page
  pages.push(1);

  // Add `...` before the startPage if necessary
  if (startPage > 2) {
    pages.push('...');
  }

  // Add the range of pages
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  // Add `...` after the endPage if necessary
  if (endPage < totalPageCount - 1) {
    pages.push('...');
  }

  // Always include the last page
  if (totalPageCount > 1) {
    pages.push(totalPageCount);
  }

  return pages;
});

const onPageClick = (page) => {
  current.value = page;
};

const onPreviousClick = () => {
  current.value = Math.max(1, $props.current - 1);
};

const onNextClick = () => {
  current.value = Math.max(1, $props.current + 1);
};

watch([current, perPage], ([page, perPage]) => {
  $emit('update:current', { page, perPage });
});
</script>

<template>
  <footer class="flex gap-1.5 items-center justify-end p-2 transition-all">
    <BaseTooltip class="mt-1" placement="bottom-end">
      <template v-slot:activator>
        <SelectField
          v-model="perPage"
          :items="pageOptions"
          class="px-1 py-0 text-xs leading-none h-6"
          hide-details
        />
      </template>
      <span>Items per page</span>
    </BaseTooltip>
    <BaseTooltip class="mt-1" placement="bottom-end">
      <template v-slot:activator>
        <BaseButton
          class="rounded-md text-xs"
          size="sm"
          square
          variant="ghost"
          @click="onPreviousClick"
        >
          <ChevronLeftIcon />
        </BaseButton>
      </template>
      <span>Previous</span>
    </BaseTooltip>

    <template v-for="page in pages" :key="page">
      <span v-if="page === '...'" class="cursor-default text-neutral-500">{{ page }}</span>
      <BaseButton
        v-else
        :active="page.toString() === current.toString()"
        class="rounded-md text-xs font-normal [&.active]:bg-primary [&.active]:text-primary-foreground"
        size="sm"
        square
        variant="ghost"
        @click="onPageClick(page)"
      >
        {{ page }}
      </BaseButton>
    </template>

    <BaseTooltip class="mt-1" placement="bottom-end">
      <template v-slot:activator>
        <BaseButton
          class="rounded-md text-xs"
          size="sm"
          square
          variant="ghost"
          @click="onNextClick"
        >
          <ChevronRightIcon />
        </BaseButton>
      </template>
      <span>Next</span>
    </BaseTooltip>
  </footer>
</template>
