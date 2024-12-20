<script setup>
import BaseImage from '~/components/displays/BaseImage.vue';
import AppLink from '~/components/navigations/AppLink.vue';
import { useLinkProp } from '~/composables/props/useLinkProp.js';
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
import BaseBadge from '~/components/feedback/BaseBadge.vue';
import { useAspectRatioProp } from '~/composables/props/useAspectRatioProp.js';

const $props = defineProps({
  ...useLinkProp(),
  ...useAspectRatioProp(),

  title: { type: String, default: null },

  subtitle: { type: [String, Number], default: null },

  src: { type: String, default: null },

  alt: { type: String, default: null },

  flat: Boolean,

  hideDetails: Boolean,

  tag: { type: String, default: null },
});

const link = computed(() => ($props.to ? AppLink : 'div'));
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div class="flex flex-col" data-component="poster-card">
    <slot name="image">
      <component :is="link" :to="to" class="relative">
        <BaseImage
          :alt="alt"
          :aspect-ratio="aspectRatio"
          :class="
            useMergeClasses(
              [
                flat ? 'shadow-none' : 'shadow',
                'h-[300px] bg-neutral-200 cursor-pointer hover:outline hover:outline-primary focus:outline-4 focus:outline-primary',
              ],
              $attrs.class
            )
          "
          :src="src"
          tabindex="0"
          v-bind="$attrs"
        />
        <BaseBadge v-if="tag || $slots.tag" class="absolute right-0 bottom-0 m-1">
          <slot name="tag">
            {{ tag }}
          </slot>
        </BaseBadge>
      </component>
    </slot>
    <template v-if="!hideDetails">
      <div v-if="$slots.title" class="text-sm mt-3 text-nowrap truncate">
        <slot name="title" />
      </div>
      <div v-else-if="title" class="font-normal text-sm mt-3 text-nowrap truncate w-[200px]">
        {{ title }}
      </div>

      <div v-if="$slots.subtitle" class="font-normal text-sm text-neutral-500">
        <slot name="subtitle" />
      </div>
      <div v-else-if="subtitle" class="font-normal text-sm text-neutral-500">
        {{ subtitle }}
      </div>

      <slot name="extension" />
    </template>
  </div>
</template>
