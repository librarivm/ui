<script setup>
import ShadowScrim from '~/components/containments/ShadowScrim.vue';
import BaseCard from '~/components/containments/BaseCard.vue';
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';

const $emit = defineEmits(['open', 'close']);

const model = ref(false);

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
  <slot name="activator" v-bind="{ model, prop }" />

  <ClientOnly>
    <Teleport to="#portal">
      <BaseCard
        :class="
          useMergeClasses([
            model
              ? 'self-center top-0 opacity-100 visible z-[52]'
              : '-top-[100%] opacity-0 invisible z-[100]',
          ])
        "
        class="mx-auto sm:w-3/4 md:w-2/4 inset-0 flex shrink-0 items-center fixed transition-[opacity] ease-in-out m-2 border-none"
        v-bind="$attrs"
      >
        <div class="bg-background w-full mx-auto">
          <slot v-bind="{ model, prop }" />
        </div>
      </BaseCard>
      <ShadowScrim :active="model" @click.prevent="model = false" @shortcut:esc="model = false" />
    </Teleport>
  </ClientOnly>
</template>
