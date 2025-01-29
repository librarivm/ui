<script setup>
import { useGetMediaContentService } from '~/composables/services/media/useGetMediaContentService.js';
import BottomSheet from '~/components/containments/BottomSheet.vue';
import BaseCard from '~/components/containments/BaseCard.vue';
import BaseCardFooter from '~/components/containments/BaseCardFooter.vue';
import IconButton from '~/components/controls/IconButton.vue';
import ImagesIcon from '~/components/icons/ImagesIcon.vue';
import ReadingLeftIcon from '~/components/icons/ReadingLeftIcon.vue';
import CloseButton from '~/components/containments/CloseButton.vue';
import MaximizeIcon from '~/components/icons/MaximizeIcon.vue';

definePageMeta({
  name: 'media.content',
});

const $route = useRoute();

const { data } = await useGetMediaContentService();

const model = ref(false);
watch(
  $route.params,
  () => {
    setTimeout(() => {
      model.value = true;
    }, 80);
  },
  { deep: true, immediate: true }
);

const onClose = async () => {
  const $router = useRouter();

  model.value = false;

  setTimeout(async () => {
    await $router.push({ name: 'media.show', params: { media: $route.params.media } });
  }, 100);
};
</script>

<template>
  <BottomSheet v-model="model" class="w-1/2" @shortcut:hit="onClose">
    <BaseCard class="border-none">
      <div
        class="flex py-2 flex-row flex-1 max-h-[calc(100vh-32px)] overflow-x-auto items-center gap-4"
      >
        <img
          v-for="(page, i) in data.pages"
          :key="i"
          :alt="page.title"
          :src="page.src"
          class="h-[calc(100vh-100px)] max-w-2xl"
        />
      </div>
      <BaseCardFooter>
        <IconButton placement="top right" shortcut="alt+t" title="View thumbnails">
          <ImagesIcon class="size-4" />
        </IconButton>
        <IconButton placement="top right" shortcut="alt+r" title="Reading direction">
          <ReadingLeftIcon class="size-4" />
        </IconButton>
        <div class="w-[1px] opacity-75 rounded h-4 bg-slate-700 dark:bg-slate-400" />
        <IconButton placement="top right" shortcut="F11" title="Toggle Fullscreen">
          <MaximizeIcon class="size-4" />
        </IconButton>
        <CloseButton placement="top right" @click="onClose" />
      </BaseCardFooter>
    </BaseCard>
  </BottomSheet>
  <!--<FloatingWindow @close="onClose">-->
  <!--  <template v-slot:[`header.title`]>Issue #1</template>-->
  <!--  <template v-slot:[`header.actions`]>-->
  <!--    <IconButton placement="top right" shortcut="alt+t" title="View thumbnails">-->
  <!--      <ImagesIcon class="size-4" />-->
  <!--    </IconButton>-->
  <!--    <IconButton placement="top right" shortcut="alt+r" title="Reading direction">-->
  <!--      <ReadingLeftIcon class="size-4" />-->
  <!--    </IconButton>-->
  <!--    <IconButton placement="top right" shortcut="F11" title="Toggle Fullscreen">-->
  <!--      <MaximizeIcon class="size-4" />-->
  <!--    </IconButton>-->
  <!--  </template>-->
  <!--  <div class="flex flex-row flex-1 h-full items-center gap-4">-->
  <!--    <img-->
  <!--      v-for="(page, i) in data.pages"-->
  <!--      :key="i"-->
  <!--      :alt="page.title"-->
  <!--      :src="page.src"-->
  <!--      class="max-h-full max-w-2xl"-->
  <!--    />-->
  <!--  </div>-->
  <!--</FloatingWindow>-->
</template>
