<script setup>
import BaseImage from '~/components/displays/BaseImage.vue';
import TextSubheading from '~/components/typography/TextSubheading.vue';

defineProps({
  title: { type: String, default: null },
  subtitle: { type: [String, Number], default: null },
  src: { type: String, default: null },
  alt: { type: String, default: null },
  flat: Boolean,
  /** @type import('vue').PropType<BaseImageAspectRatioType> */
  aspectRatio: { type: String, default: 'auto' },
  hideDetails: Boolean,
});
</script>

<template>
  <div class="flex flex-col" data-component="poster-card" v-bind="$attrs">
    <slot name="image">
      <BaseImage
        :alt="alt"
        :aspect-ratio="aspectRatio"
        :class="[flat ? 'shadow-none' : 'shadow']"
        :src="src"
        class="h-[300px] w-[200px] bg-neutral-200 cursor-pointer hover:outline hover:outline-primary focus:outline-4 focus:outline-primary rounded-md"
        tabindex="0"
      />
    </slot>
    <template v-if="!hideDetails">
      <div v-if="$slots.title" class="text-sm mt-3 text-nowrap truncate w-[200px]">
        <slot name="title" />
      </div>
      <TextSubheading
        v-else-if="title"
        class="font-normal text-sm mt-3 text-nowrap truncate w-[200px]"
      >
        {{ title }}
      </TextSubheading>

      <div v-if="$slots.subtitle" class="font-normal text-sm text-neutral-500">
        <slot name="subtitle" />
      </div>
      <TextSubheading v-else-if="subtitle" class="font-normal text-sm text-neutral-500">
        {{ subtitle }}
      </TextSubheading>

      <slot name="extension" />
    </template>
  </div>
</template>
