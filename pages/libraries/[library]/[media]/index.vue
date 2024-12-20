<script setup>
import PageHeader from '~/components/page/PageHeader.vue';
import PageFooter from '~/components/page/PageFooter.vue';
import MainContent from '~/components/containments/MainContent.vue';
import AppColumn from '~/components/grids/AppColumn.vue';
import AppGrid from '~/components/grids/AppGrid.vue';
import AppContainer from '~/components/grids/AppContainer.vue';
import PosterCard from '~/components/displays/PosterCard.vue';
import { useGetMediaService } from '~/composables/services/media/useGetMediaService.js';
import BaseSection from '~/components/containments/BaseSection.vue';
import FilmStarIcon from '~/components/icons/FilmStarIcon.vue';
import BaseBadge from '~/components/feedback/BaseBadge.vue';
import Video4kIcon from '~/components/icons/Video4kIcon.vue';
import VolumeHighIcon from '~/components/icons/VolumeHighIcon.vue';
import BaseButton from '~/components/containments/BaseButton.vue';
import PlaySolidIcon from '~/components/icons/PlaySolidIcon.vue';
import PencilIcon from '~/components/icons/PencilIcon.vue';
import EllipsisVerticalIcon from '~/components/icons/EllipsisVerticalIcon.vue';
import BackdropWindow from '~/components/displays/BackdropWindow.vue';
import FlexTable from '~/components/displays/FlexTable.vue';
import ItemsStrip from '~/components/selections/ItemsStrip.vue';
import AppLink from '~/components/navigations/AppLink.vue';
import TextSubheading from '~/components/typography/TextSubheading.vue';
import TextItems from '~/components/typography/TextItems.vue';
import BookmarkIcon from '~/components/icons/BookmarkIcon.vue';

definePageMeta({
  name: 'media.show',
});

const { data } = await useGetMediaService();
const posterCardClass = (type) => {
  switch (type) {
    case 'avatar':
      return 'h-[150px] w-[150px] rounded-xl';
    case 'poster':
      return 'h-[300px] w-[200px]';
    default:
      return 'h-[200px]';
  }
};
</script>

<template>
  <PageHeader />
  <MainContent class="flex flex-col">
    <BackdropWindow :src="data.backdrop">
      <AppContainer>
        <AppGrid>
          <AppColumn lg="8" md="9">
            <BaseSection class="flex flex-col md:flex-row gap-6 p-0">
              <PosterCard
                :src="data.poster"
                aspect-ratio="poster"
                class="h-[180px] w-auto md:w-full md:min-w-[300px] md:max-w-[300px] md:h-auto"
              />

              <BaseSection class="p-0 gap-6">
                <BaseSection class="order-first md:order-first p-0 gap-1">
                  <PageTitle>{{ data.title }}</PageTitle>
                  <p class="flex items-center text-sm">
                    <span>{{ data.year }}</span>
                    <span class="mx-1">•</span>
                    <span class="mr-1">{{ data.duration }}</span>
                    <span class="mx-1">•</span>
                    <span class="mr-1">
                      <TextItems :items="data.genres" :show-more="false" :show-only="2">
                        <template v-slot:item="{ item: prop }">
                          <AppLink href="#">{{ prop.title }}</AppLink>
                        </template>
                      </TextItems>
                    </span>
                  </p>
                  <p class="flex items-center gap-2 text-xs">
                    <BaseBadge class="text-xs">
                      <FilmStarIcon class="size-4" />
                      {{ data.parental }}
                    </BaseBadge>
                    <BaseBadge class="text-xs">
                      <Video4kIcon class="size-4" />
                      {{ data.format?.video || 'Full HD' }}
                    </BaseBadge>
                    <BaseBadge class="text-xs">
                      <VolumeHighIcon class="size-4" />
                      {{ data.format?.audio || '5.1' }}
                    </BaseBadge>
                  </p>
                </BaseSection>

                <BaseSection class="order-3 md:order-2 p-0 gap-1">
                  <TextSubheading v-if="data.tagline" class="font-normal font-sans italic">
                    {{ data.tagline }}
                  </TextSubheading>
                  <div v-html="data.overview" />
                </BaseSection>

                <BaseSection class="order-2 md:order-3 p-0 gap-1 shrink-0 items-stretch">
                  <div class="flex items-center h-full gap-3">
                    <BaseButton class="shrink-0" variant="primary">
                      <PlaySolidIcon class="size-4" />
                      Watch Now
                    </BaseButton>
                    <BaseButton class="shrink-0" variant="filled">
                      <PencilIcon class="size-4" />
                      <span class="hidden md:block">Edit</span>
                    </BaseButton>
                    <BaseButton class="shrink-0 h-full" variant="filled">
                      <BookmarkIcon class="size-4" fill="currentColor" />
                    </BaseButton>
                    <BaseButton class="shrink-0 h-full" variant="filled">
                      <EllipsisVerticalIcon class="size-4" />
                    </BaseButton>
                  </div>
                </BaseSection>

                <BaseSection class="order-last md:order-last p-0 gap-1 shrink-0">
                  <FlexTable
                    :items="[
                      { title: 'Directed by', items: data?.casts_and_crew?.directors ?? [] },
                      { title: 'Written by', items: data?.casts_and_crew?.writers ?? [] },
                      {
                        title: 'Genres',
                        items: data.genres.map((i) => ({ name: i.title, ...i })),
                      },
                      { title: 'Studio', items: data?.casts_and_crew?.studios ?? [] },
                    ]"
                  >
                    <template v-slot:[`item.value`]="{ item }">
                      <TextItems :items="item.value.items" :show-only="2" item-title="name">
                        <template v-slot:item="{ item: prop }">
                          <AppLink href="#">{{ prop.name }}</AppLink>
                        </template>
                      </TextItems>
                    </template>
                  </FlexTable>
                </BaseSection>
              </BaseSection>
            </BaseSection>
          </AppColumn>
        </AppGrid>
      </AppContainer>
    </BackdropWindow>

    <template v-for="(content, i) in data.contents" :key="i">
      <ItemsStrip :items="content.items" class="mt-6" container>
        <template v-slot:label>
          <span class="font-serif">{{ content.title }}</span>
        </template>
        <template v-slot:item="{ item, prop }">
          <PosterCard
            :aspect-ratio="content.type"
            :class="posterCardClass(content.type)"
            :hide-details="content.metadata?.hideDetails"
            :src="item[content?.metadata?.src || 'thumbnail']"
            :subtitle="item[content?.metadata?.subtitle || 'subtitle']"
            :tag="item.duration"
            href="#"
            v-bind="prop"
          >
            <template v-slot:title>
              <AppLink class="block max-w-[350px] truncate" href="#">
                {{ item[content?.metadata?.title || 'title'] }}
              </AppLink>
            </template>
          </PosterCard>
        </template>
      </ItemsStrip>
    </template>

    <div class="flex-1" />

    <AppContainer>
      <AppGrid>
        <AppColumn>
          <hr class="py-4 border-neutral-200" />

          <TextSubheading class="text-md font-serif mb-4">More information</TextSubheading>

          <AppGrid class="text-sm">
            <AppColumn col="12" md="2" sm="2">
              <div class="font-bold">Video</div>
              <div>{{ data.format?.video ?? 'Full HD' }}</div>
            </AppColumn>
            <AppColumn col="12" md="2" sm="2">
              <div class="font-bold">Audio</div>
              <div>{{ 'English' }}</div>
            </AppColumn>
            <AppColumn col="12" md="2" sm="2">
              <div class="font-bold">Subtitles</div>
              <div class="">{{ 'English, English (SDH)' }}</div>
            </AppColumn>
          </AppGrid>
        </AppColumn>
      </AppGrid>
    </AppContainer>
  </MainContent>

  <PageFooter />
</template>
