<script setup>
import CenterContent from '~/components/containments/CenterContent.vue';
import BaseCard from '~/components/containments/BaseCard.vue';
import CloseButton from '~/components/containments/CloseButton.vue';
import BaseCardContent from '~/components/containments/BaseCardContent.vue';
import ShadowScrim from '~/components/containments/ShadowScrim.vue';
import BaseCardFooter from '~/components/containments/BaseCardFooter.vue';
import GlassPanel from '~/components/containments/GlassPanel.vue';

const $emit = defineEmits(['close']);

const $route = useRoute();
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
  model.value = false;
  $emit('close');
};
</script>

<template>
  <div
    :class="[model ? 'opacity-1 visible' : 'opacity-0 invisible']"
    class="transition-all duration-100 fixed z-[54] inset-4"
  >
    <CenterContent class="inset-4">
      <BaseCard class="flex-1 w-full relative">
        <BaseCardContent class="flex-1 h-auto overflow-y-auto">
          <slot />
        </BaseCardContent>
        <GlassPanel class="sticky bottom-0 w-full">
          <BaseCardFooter class="justify-between">
            <div>
              <slot name="header.title" />
            </div>
            <div class="flex gap-4 align-middle">
              <slot name="header.actions" />
              <CloseButton placement="top-end" @click="onClose" />
            </div>
          </BaseCardFooter>
        </GlassPanel>
      </BaseCard>
    </CenterContent>
  </div>
  <ShadowScrim :active="model" class="z-[53]" @click.prevent="onClose" @shortcut:esc="onClose" />
</template>
