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
import AppLink from '~/components/navigations/AppLink.vue';
import TextSubheading from '~/components/typography/TextSubheading.vue';
import TextItems from '~/components/typography/TextItems.vue';
import BookmarkIcon from '~/components/icons/BookmarkIcon.vue';
import TextSeparator from '~/components/typography/TextSeparator.vue';
import CaptionIcon from '~/components/icons/CaptionIcon.vue';
import BaseIconResolver from '~/components/containments/BaseIconResolver.vue';
import { getAspectRatioWidth } from '~/composables/props/useAspectRatioProp.js';
import ItemsGroup from '~/components/selections/ItemsGroup.vue';

definePageMeta({
  name: 'media.show',
});

const $route = useRoute();
const { data } = await useGetMediaService();
</script>

<template>
  <PageHeader back />

  <MainContent class="flex flex-col">
    <BackdropWindow :src="data.backdrop">
      <AppContainer>
        <AppGrid>
          <AppColumn lg="8" md="9">
            <BaseSection class="flex flex-col md:flex-row gap-6 p-0">
              <PosterCard
                :src="data.poster"
                aspect-ratio="poster"
                class="hidden md:block h-[180px] w-auto md:w-full md:min-w-[300px] md:max-w-[300px] md:h-auto"
              />

              <BaseSection class="mt-10 md:mt-0 p-0 gap-6">
                <BaseSection class="order-first md:order-first flex-row md:flex-col p-0 gap-1">
                  <PosterCard
                    :src="data.poster"
                    aspect-ratio="poster"
                    class="md:hidden h-[180px] w-auto md:w-full md:min-w-[300px] md:max-w-[300px] md:h-auto"
                  />
                  <div class="flex flex-col gap-1">
                    <PageTitle v-if="data.title">{{ data.title }}</PageTitle>

                    <p v-if="data" class="flex items-center text-sm">
                      <TextItems
                        :items="[data.year, data.duration]"
                        :show-more="false"
                        :show-only="2"
                        separator="&nbsp;•&nbsp;"
                      />
                      <TextSeparator v-if="data.authors">•</TextSeparator>
                      <TextItems
                        v-if="data.authors"
                        :items="data.authors"
                        :show-more="false"
                        :show-only="2"
                        separator="&nbsp;•&nbsp;"
                      />
                      <TextSeparator v-if="data.genres">•</TextSeparator>
                      <TextItems
                        v-if="data.genres"
                        :items="data.genres"
                        :show-more="false"
                        :show-only="2"
                      >
                        <template v-slot:item="{ item: prop }">
                          <AppLink href="#">{{ prop.title }}</AppLink>
                        </template>
                      </TextItems>
                    </p>

                    <p class="flex items-center gap-2 text-xs">
                      <BaseBadge v-if="data.parental" class="text-xs">
                        <FilmStarIcon class="size-4" />
                        {{ data.parental }}
                      </BaseBadge>
                      <BaseBadge v-if="data?.format?.video" class="text-xs">
                        <Video4kIcon class="size-4" />
                        {{ data.format?.video || 'Full HD' }}
                      </BaseBadge>
                      <BaseBadge v-if="data?.format?.audio" class="text-xs">
                        <VolumeHighIcon class="size-4" />
                        {{ data.format?.audio || '5.1' }}
                      </BaseBadge>
                      <BaseBadge v-if="data?.format?.subtitle" class="text-xs">
                        <CaptionIcon class="size-4" />
                        {{ data.format?.subtitle || 'English SDH' }}
                      </BaseBadge>
                    </p>
                  </div>
                </BaseSection>

                <BaseSection class="order-2 md:order-2 p-0 gap-1">
                  <TextSubheading v-if="data.tagline" class="font-normal font-sans italic">
                    {{ data.tagline }}
                  </TextSubheading>
                  <div v-if="data.overview" v-html="data.overview" />
                </BaseSection>

                <BaseSection class="order-3 md:order-3 p-0 gap-1 shrink-0 items-stretch">
                  <div class="flex items-center h-full gap-3">
                    <BaseButton class="h-12 shrink-0 flex-1 md:flex-none" variant="primary">
                      <template v-if="data?.metadata?.buttons?.action?.icon">
                        <BaseIconResolver
                          :icon="data?.metadata?.buttons?.action?.icon"
                          class="size-4"
                        />
                      </template>
                      <PlaySolidIcon v-else class="size-4" />
                      <span>{{ data.metadata?.buttons?.action?.name || 'Play Now' }}</span>
                    </BaseButton>
                    <BaseButton class="h-12 shrink-0" variant="filled">
                      <PencilIcon class="size-4" />
                      <span class="hidden md:block">Edit</span>
                    </BaseButton>
                    <BaseButton class="h-12 shrink-0" variant="filled">
                      <BookmarkIcon class="size-4" fill="currentColor" />
                    </BaseButton>
                    <BaseButton class="h-12 shrink-0" variant="filled">
                      <EllipsisVerticalIcon class="size-4" />
                    </BaseButton>
                  </div>
                </BaseSection>

                <BaseSection
                  v-if="data.details"
                  class="order-last md:order-last p-0 gap-1 shrink-0"
                >
                  <FlexTable :items="data.details">
                    <template v-slot:[`item.value`]="{ item }">
                      <TextItems
                        :item-title="data?.metadata?.details?.itemTitle || 'name'"
                        :items="item.value.items"
                        :show-only="2"
                      >
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

    <div class="flex flex-col gap-10 relative">
      <template v-for="(content, i) in data.contents" :key="i">
        <!--{
              name: 'media.content',
              params: {
                library: $route.params.library,
                media: $route.params.media,
                type: item?.[content?.metadata?.route?.params?.type],
                content: item?.[content?.metadata?.route?.params?.id],
              },
            }-->
        <ItemsGroup
          :aspect-ratio="content.metadata.aspectRatio"
          :hide-controls="content?.metadata?.hideControls"
          :item-href="
            (item) => ({
              name: 'media.content',
              params: {
                library: $route.params.library,
                media: $route.params.media,
                type: item.type,
                content: item.id,
              },
            })
          "
          :item-src="content?.metadata?.src || 'thumbnail'"
          :item-subtitle="content?.metadata?.subtitle || 'subtitle'"
          :items="content.items"
          :label="content.title"
          :text="content.text"
          :variant="content?.metadata?.type || 'strip'"
          container
        >
          <template v-slot:[`item.title`]="{ item }">
            <AppLink
              :class="getAspectRatioWidth(content.type)"
              :to="{
                name: 'media.content',
                params: {
                  library: $route.params.library,
                  media: $route.params.media,
                  type: item.type,
                  content: item.id,
                },
              }"
              class="block truncate"
            >
              {{ item[content?.metadata?.title || 'title'] }}
            </AppLink>
          </template>
        </ItemsGroup>
      </template>
    </div>

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
