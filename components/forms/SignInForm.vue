<script setup>
// const { form, submit } = useForm({
//   username: '',
// });
import TextField from '~/components/controls/TextField.vue';
import BaseButton from '~/components/containments/BaseButton.vue';
import BaseCard from '~/components/containments/BaseCard.vue';
import BaseCardContent from '~/components/containments/BaseCardContent.vue';
import BaseCardHeader from '~/components/containments/BaseCardHeader.vue';
import BaseCardFooter from '~/components/containments/BaseCardFooter.vue';

const submit = () => {};
</script>

<template>
  <form class="flex flex-col gap-4" @submit.prevent="submit">
    <BaseCard>
      <BaseCardHeader class="justify-center">
        <BrandComboMark />
      </BaseCardHeader>
      <BaseCardContent>
        <TextField label="Email" name="email" />
        <TextField label="Password" name="password" />
      </BaseCardContent>
      <BaseCardFooter>
        <BaseButton class="w-full" type="submit" variant="primary">Sign In</BaseButton>
      </BaseCardFooter>
    </BaseCard>
  </form>
</template>
