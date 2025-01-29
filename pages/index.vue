<script setup>
import MainContent from '~/components/containments/MainContent.vue';
import AppContainer from '~/components/grids/AppContainer.vue';
import AppGrid from '~/components/grids/AppGrid.vue';
import AppColumn from '~/components/grids/AppColumn.vue';

definePageMeta({
  name: 'home',
  title: 'Home',
});
</script>

<template>
  <PageHeader title="Home" />
  <MainContent>
    <AppContainer>
      <AppGrid>
        <AppColumn> todo: Home </AppColumn>
      </AppGrid>
    </AppContainer>
  </MainContent>
  <PageFooter />
</template>
