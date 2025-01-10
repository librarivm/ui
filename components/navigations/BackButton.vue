<script setup>
import BaseButton from '~/components/containments/BaseButton.vue';
import MoveLeftIcon from '~/components/icons/MoveLeftIcon.vue';

const $router = useRouter();
const onClick = () => {
  if (window.history.state.back === null) {
    $router.push('/');
  } else {
    $router.back();
  }
};
</script>

<template>
  <BaseButton
    class="items-center w-[26px] h-[26px] py-1 px-1.5"
    size="xs"
    variant="filled"
    @click="onClick"
  >
    <slot name="icon">
      <MoveLeftIcon class="w-[16px] h-[16px]" />
    </slot>
    <span v-if="$slots.default" class="px-1"><slot /></span>
  </BaseButton>
</template>
