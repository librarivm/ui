<script setup>
import ShadowScrim from '~/components/containments/ShadowScrim.vue';
import BaseCard from '~/components/containments/BaseCard.vue';
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';

const $emit = defineEmits(['open', 'close']);

const model = defineModel('modelValue', false);

defineProps({
  modelValue: Boolean,
});

watchEffect(() => {
  $emit(model.value ? 'open' : 'close');
});

const close = () => (model.value = false);
const open = () => (model.value = false);

const prop = reactive({
  onClick: () => {
    model.value = !model.value;

    $emit(model.value ? 'open' : 'close');
  },
});
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <slot name="activator" v-bind="{ model, prop, close, open }" />

  <ClientOnly>
    <Teleport to="#portal">
      <BaseCard
        :class="
          useMergeClasses([
            model
              ? 'translate-y-0 opacity-100 visible z-[54]'
              : '-translate-y-full opacity-0 invisible z-[100]',
          ])
        "
        class="max-h-[calc(100vh-24px)] m-2 md:mx-auto sm:w-3/4 md:w-2/4 inset-0 flex shrink-0 self-center items-center fixed transition-[transform,opacity,visibility] ease-in-out duration-300 border-none"
        v-bind="$attrs"
      >
        <div class="bg-background w-full mx-auto max-h-[calc(100vh-24px)]">
          <slot v-bind="{ model, prop, close, open }" />
        </div>
      </BaseCard>
      <ShadowScrim
        :active="model"
        class="z-[53]"
        @click.prevent="model = false"
        @shortcut:esc="model = false"
      />
    </Teleport>
  </ClientOnly>
</template>
