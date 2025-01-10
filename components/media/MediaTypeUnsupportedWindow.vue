<script setup>
import IllustrationCard from '~/components/displays/IllustrationCard';
import CatIcon from '~/components/icons/CatIcon.vue';

const params = computed(() => useRoute().params);
</script>

<template>
  <PageArticle>
    <div class="text-center mx-auto flex flex-col items-center">
      <IllustrationCard>
        <CatIcon class="size-16" />
      </IllustrationCard>
      <p class="font-sans font-normal">
        Media type <code>{{ params.library }}</code> is unsupported.
      </p>
    </div>
  </PageArticle>
</template>
