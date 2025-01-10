<script setup>
import BaseImage from '~/components/displays/BaseImage.vue';
import AppLink from '~/components/navigations/AppLink.vue';
import { useLinkProps } from '~/composables/props/useLinkProps.js';
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
import BaseBadge from '~/components/feedback/BaseBadge.vue';
import {
  getAspectRatioHeight,
  getAspectRatioWidth,
  useAspectRatioProp,
} from '~/composables/props/useAspectRatioProp.js';

const $props = defineProps({
  ...useLinkProps(),
  ...useAspectRatioProp(),

  title: { type: String, default: null },

  subtitle: { type: [String, Number], default: null },

  src: { type: String, default: null },

  alt: { type: String, default: null },

  flat: Boolean,

  hideDetails: Boolean,

  hideTag: Boolean,

  duration: { type: String, default: null },
});

const link = computed(() => ($props.to ? AppLink : 'div'));
const height = computed(() => getAspectRatioHeight($props.aspectRatio));
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div class="flex flex-col" data-component="poster-card">
    <slot name="image">
      <component :is="link" :to="to" class="relative" data-component="base-image-container">
        <BaseImage
          :alt="alt"
          :aspect-ratio="aspectRatio"
          :class="
            useMergeClasses(
              [
                flat ? 'shadow-none' : 'shadow',
                height,
                'cursor-pointer',
                'bg-neutral-200 dark:bg-gray-800',
                'transition-all duration-75 hover:outline hover:outline-primary focus:outline-4 focus:outline-primary',
                'dark:hover:outline-astronaut-blue-300',
              ],
              $attrs.class
            )
          "
          :src="src"
          tabindex="0"
          v-bind="$attrs"
        />
        <BaseBadge
          v-if="!hideTag && (duration || $slots.duration)"
          class="absolute right-0 bottom-0 m-1 dark:bg-black/50 dark:text-white"
        >
          <slot name="duration">
            {{ duration }}
          </slot>
        </BaseBadge>
      </component>
    </slot>
    <template v-if="!hideDetails">
      <div
        v-if="$slots.title || title"
        :class="getAspectRatioWidth(aspectRatio)"
        class="text-sm font-normal mt-3 text-nowrap truncate"
      >
        <slot v-if="$slots.title" name="title" />
        <span v-else-if="title">{{ title }}</span>
      </div>

      <div
        v-if="$slots.subtitle"
        :class="getAspectRatioWidth(aspectRatio)"
        class="font-normal text-sm text-neutral-500"
      >
        <slot name="subtitle" />
      </div>
      <div
        v-else-if="subtitle"
        :class="getAspectRatioWidth(aspectRatio)"
        class="font-normal text-sm text-neutral-500 truncate"
      >
        {{ subtitle }}
      </div>

      <slot name="extension" />
    </template>
  </div>
</template>
