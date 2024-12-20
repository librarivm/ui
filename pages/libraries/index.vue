<script setup>
import MainContent from '~/components/containments/MainContent.vue';
import AppContainer from '~/components/grids/AppContainer.vue';
import AppGrid from '~/components/grids/AppGrid.vue';
import AppColumn from '~/components/grids/AppColumn.vue';

definePageMeta({
  name: 'libraries.index',
});
</script>

<template>
  <PageHeader />
  <MainContent>
    <AppContainer>
      <AppGrid>
        <AppColumn>
          <PageTitle>Libraries</PageTitle>
        </AppColumn>
      </AppGrid>
    </AppContainer>
  </MainContent>
  <PageFooter />
</template>
