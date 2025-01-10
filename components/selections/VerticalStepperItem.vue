<script setup>
import TextHeading from '~/components/typography/TextHeading.vue';

const $emit = defineEmits(['click:item']);

defineProps({
  active: Boolean,
  pipe: Boolean,
  title: { type: [String, Number], default: null },
  value: { type: [String, Number], default: null },
  description: { type: [String, Number], default: null },
});
</script>

<template>
  <li
    :class="[
      active ? 'after:bg-astronaut-blue-800' : 'after:bg-neutral-200',
      pipe && 'after:content-[\'\'] after:w-0.5',
    ]"
    class="relative group flex-1 transition-all duration-300 after:h-full after:inline-block after:absolute after:-bottom-10 after:left-4 lg:after:left-5"
  >
    <div class="flex items-start font-medium w-full" @click.stop="$emit('click:item', $event)">
      <span
        :class="[
          active
            ? 'bg-astronaut-blue-800 text-astronaut-blue-50'
            : 'bg-neutral-200 text-neutral-800 group-hover:text-astronaut-blue-800',
          'group-hover:border-astronaut-blue-800',
        ]"
        class="w-8 h-8 cursor-pointer aspect-square font-bold font-serif border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm lg:w-10 lg:h-10"
      >
        <slot name="value" v-bind="{ value }">
          {{ value }}
        </slot>
      </span>
      <div class="block w-full p-1">
        <TextHeading
          :class="[active && 'text-astronaut-blue-800']"
          class="text-base font-normal cursor-pointer group-hover:text-astronaut-blue-800 mb-2 mt-1"
        >
          <slot name="title" v-bind="{ title }">{{ title }}</slot>
        </TextHeading>
        <div
          :class="[active ? 'max-h-[200vh] overflow-x-visible' : 'max-h-0 overflow-hidden']"
          class="relative transition-all duration-200 text-sm text-neutral-600 max-x-full"
        >
          <slot name="description" v-bind="{ description }">{{ description }}</slot>
        </div>
      </div>
    </div>
  </li>
</template>
