<script setup>
import BaseCard from '~/components/containments/BaseCard.vue';
import BaseCardContent from '~/components/containments/BaseCardContent.vue';
import TextHeading from '~/components/typography/TextHeading.vue';
import BaseImage from '~/components/displays/BaseImage.vue';

defineProps({
  src: { type: String, default: null },
  alt: { type: String, default: null },
  title: { type: String, default: null },
  subtitle: { type: String, default: null },
});
</script>

<template>
  <BaseCard
    class="bg-[#ddd8d2] dark:text-neutral-100 aspect-[2/3] w-full md:w-[300px] rounded-md shadow gap-0 border-none cursor-pointer hover:outline hover:outline-primary focus:outline-4 focus:outline-primary"
    data-component="poster-modernist-card"
    tabindex="0"
    v-bind="$attrs"
  >
    <BaseCardContent>
      <BaseImage
        :alt="alt"
        :src="src"
        aspect-ratio="square"
        class="mx-auto max-w-full items-center"
      />
      <TextHeading class="lg:text-2xl text-4xl leading-tight tracking-tight uppercase mt-3">
        <span>{{ title }}</span>
        <span class="text-2xl lg:text-sm text-neutral-500">&nbsp;{{ subtitle }}</span>
      </TextHeading>
    </BaseCardContent>
    <BaseCardContent class="flex flex-col pt-0 md:pt-0 flex-1 justify-end">
      <div
        v-if="$slots.extension"
        class="text-sm lg:text-xs uppercase leading-tight tracking-tight"
      >
        <slot name="extension" />
      </div>
    </BaseCardContent>
  </BaseCard>
</template>
