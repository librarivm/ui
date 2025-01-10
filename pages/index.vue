<script setup>
import MainContent from '~/components/containments/MainContent.vue';
import AppContainer from '~/components/grids/AppContainer.vue';
import AppGrid from '~/components/grids/AppGrid.vue';
import AppColumn from '~/components/grids/AppColumn.vue';

definePageMeta({
  name: 'dashboard',
  title: 'Dashboard',
});
</script>

<template>
  <PageHeader title="Dashboard" />
  <MainContent>
    <AppContainer>
      <AppGrid>
        <AppColumn> todo: dashboard</AppColumn>
      </AppGrid>
    </AppContainer>
  </MainContent>
  <PageFooter />
</template>
