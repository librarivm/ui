<script setup>
import PageHeader from '~/components/page/PageHeader.vue';
import PageFooter from '~/components/page/PageFooter.vue';
import { useGetDocumentation } from '~/composables/services/documentation/useGetDocumentation.js';
import AppContainer from '~/components/grids/AppContainer.vue';
import AppGrid from '~/components/grids/AppGrid.vue';
import AppColumn from '~/components/grids/AppColumn.vue';
import MainContent from '~/components/containments/MainContent.vue';
import startCase from 'lodash/startCase';

definePageMeta({
  layout: 'sandbox',
  name: 'sandbox.show',
});

const route = useRoute();
const { content } = await useGetDocumentation(
  `components/${route.params.type}/${route.params.slug}`
);
</script>

<template>
  <PageHeader :title="startCase(route.params.type)" />

  <MainContent>
    <AppContainer>
      <AppGrid>
        <AppColumn>
          <PageArticle class="p-0 m-0">
            <ContentRenderer :value="content" class="article" />
          </PageArticle>
        </AppColumn>
      </AppGrid>
    </AppContainer>
  </MainContent>

  <PageFooter />
</template>
