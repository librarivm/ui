<script setup>
import MainContent from '~/components/containments/MainContent.vue';
import CenterContent from '~/components/containments/CenterContent.vue';
import SignInForm from '~/components/forms/SignInForm.vue';

definePageMeta({
  layout: 'authentication',
  title: 'Sign in',
});
</script>

<template>
  <MainContent class="bg-workspace">
    <CenterContent class="place-content-start pt-8">
      <SignInForm />
    </CenterContent>
  </MainContent>
</template>
