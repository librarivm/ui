<script setup>
import AppGrid from '~/components/grids/AppGrid';
import AppColumn from '~/components/grids/AppColumn.vue';
import AppContainer from '~/components/grids/AppContainer.vue';
import MasonryTiles from '~/components/displays/MasonryTiles.vue';

defineProps({
  data: { type: Object, default: () => ({}) },
});
</script>

<template>
  <AppContainer>
    <AppGrid>
      <AppColumn>
        <PageBody>
          <template v-for="(contents, i) in Object.values(data.contents)" :key="i">
            <PageTitle class="font-normal" type="h4">{{ contents.title }}</PageTitle>
            <MasonryTiles :items="contents.items" col="4" item-src="src" />
          </template>
        </PageBody>
      </AppColumn>
    </AppGrid>
  </AppContainer>
</template>
