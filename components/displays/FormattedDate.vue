<script setup>
import moment from 'moment';
import BaseTooltip from '~/components/feedback/BaseTooltip.vue';

/**
 * Props definition
 * @typedef {'human' | 'ISO' | string} FormatType
 */
const { format } = defineProps({
  /**
   * Format for the date.
   * 'human' - relative time (e.g., "2 minutes ago").
   * 'ISO' - ISO 8601 format.
   * 'custom' - uses moment's formatting strings.
   * @type {import('vue').PropType<FormatType>}
   */
  format: {
    type: String,
    default: 'human',
  },
});

const slots = useSlots();
const content = computed(() => slots.default?.()[0]?.children || '');

const formattedDate = computed(() => {
  const datetime = moment(content.value);
  if (!datetime.isValid()) return 'Invalid Date';

  switch (format) {
    case 'human':
      return datetime.fromNow();
    case 'ISO':
      return datetime.toISOString();
    default:
      return datetime.format(format);
  }
});
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <BaseTooltip placement="bottom-end">
    <template v-slot:activator>
      <span v-bind="$attrs">{{ formattedDate }}</span>
    </template>
    {{ content }}
  </BaseTooltip>
</template>
