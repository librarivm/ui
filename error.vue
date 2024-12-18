<script setup>
import MainContent from '~/components/containments/MainContent';
import IllustrationCard from '~/components/displays/IllustrationCard.vue';
import FancyBlockquote from '~/components/displays/FancyBlockquote.vue';
import BaseButton from '~/components/containments/BaseButton.vue';
import { NOT_FOUND_CODE, NOT_FOUND_MESSAGE } from '~/composables/types/useStatusType.js';
import { useDark } from '@vueuse/core';

const config = useRuntimeConfig();
const route = useRoute();

defineProps({
  /** @type import('vue').PropType<HttpError> */
  error: { type: Object, default: () => ({}) },
});

useHead({
  titleTemplate: (title) => (title ? `${title} - ${config.app.name}` : `${config.app.name}`),
});

useSeoMeta({
  title: route?.meta?.title || undefined,
});

definePageMeta({
  title: `${NOT_FOUND_CODE} - ${NOT_FOUND_MESSAGE}`,
});

useDark();
</script>

<template>
  <MainContent
    class="items-center align-center justify-center h-screen bg-background text-background-foreground"
  >
    <PageArticle class="p-16">
      <div class="text-center mx-auto flex flex-col gap-6 items-center">
        <section class="flex flex-col items-center">
          <IllustrationCard>
            <img
              alt="Alice and the Cheshire Cat"
              class="object-contain max-w-[16rem] dark:invert"
              src="~/assets/illustrations/alice.xl.png"
            />
          </IllustrationCard>
          <FancyBlockquote class="italic max-w-sm">
            Would you tell me, please, which way I ought to go from here?
            <!--Well, well, it seems you’ve wandered off the path. The page? Oh, it’s not here. Perhaps it-->
            <!--never was! Turn back... or forward... whichever way amuses you most.-->
          </FancyBlockquote>
        </section>
      </div>
      <div class="text-center mt-28 max-w-xs w-auto mx-auto">
        <section class="mb-4 font-bold">
          <div class="text-center mx-auto leading-none">
            {{ error.statusCode }}
          </div>
          <div>{{ error.statusMessage }}</div>
        </section>
        <BaseButton
          class="mx-auto no-underline inline-block"
          size="sm"
          @click="clearError({ redirect: '/' })"
        >
          Back home
        </BaseButton>
      </div>
    </PageArticle>
  </MainContent>
</template>
