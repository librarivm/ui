<script setup>
import ItemsStrip from '~/components/selections/ItemsStrip';
import PosterCard from '~/components/displays/PosterCard.vue';
import AppLink from '~/components/navigations/AppLink.vue';
import ChevronRightIcon from '~/components/icons/ChevronRightIcon.vue';
import FeaturedBackdrop from '~/components/containments/FeaturedBackdrop.vue';
import BaseFlexWrapper from '~/components/containments/BaseFlexWrapper.vue';

defineProps({
  /** @type import('vue').PropType<MediaItem> */
  data: { type: Object, required: true },
  hideDetails: Boolean,
  hideTag: Boolean,
});
</script>

<template>
  <div class="flex flex-col gap-12" data-component="media-type-movie-window">
    <template v-for="(strip, i) in Object.values(data.collections)" :key="i">
      <FeaturedBackdrop
        :disabled="!strip.is_featured"
        :src="strip.backdrop"
        class="dark dark:text-white"
      >
        <ItemsStrip :items="strip.items" container>
          <template v-slot:label>
            <div class="flex gap-1 items-center">
              <AppLink href="#">{{ strip.title }}</AppLink>
              <ChevronRightIcon />
            </div>
          </template>
          <template v-if="strip.is_featured" v-slot:prepend>
            <div
              class="w-[320px] shrink-0 h-[300px] flex flex-col self-end max-h-[300px] text-wrap"
            >
              <div class="flex-1 place-content-center flex flex-col items-center">
                <img
                  :alt="strip.title"
                  :src="strip.poster"
                  class="h-[150px] aspect-square object-cover object-bottom rounded-xl block mx-auto m-3"
                />
              </div>
              <div class="max-h-[150px] text-sm text-center overflow-auto">
                {{ strip.description.slice(0, 200) }}
              </div>
            </div>
          </template>
          <template v-slot:item="{ item }">
            <div :class="{ 'mr-4': item.is_collection }" class="relative group transition-all">
              <template v-if="item.is_collection">
                <BaseFlexWrapper class="absolute top-0 lef-0">
                  <PosterCard
                    v-for="(child, j) in item.items.slice(0, 2)"
                    :key="j"
                    :src="child.poster"
                    class="absolute transition-all top-0 left-0 rotate-[1deg] hover:focus-0 hover:outline-0"
                  />
                </BaseFlexWrapper>
              </template>
              <!--PosterCard:class="relative transition-all w-[133px] h-[200px] md:w-[200px] md:h-[300px]"-->
              <!--AppLink:class="block truncate max-w-[130px] md:max-w-[200px]"-->
              <PosterCard
                :aspect-ratio="strip?.metadata?.aspectRatio || 'poster'"
                :hide-details="hideDetails"
                :hide-tag="hideTag"
                :src="item.poster"
                :subtitle="item?.[strip?.metadata?.subtitle] || item.subtitle"
                :to="{ name: 'media.show', params: { library: data.slug, media: item.id } }"
                class="relative transition-all"
              >
                <template v-slot:title>
                  <AppLink
                    :to="{ name: 'media.show', params: { library: data.slug, media: item.id } }"
                    class="block truncate max-w-[130px] md:max-w-[200px]"
                  >
                    {{ item?.[strip?.metadata?.title] || item.title }}
                  </AppLink>
                </template>
                <template v-if="strip?.metadata?.links?.subtitle" v-slot:subtitle>
                  <AppLink
                    :to="{ name: 'media.show', params: { library: data.slug, media: item.id } }"
                    class="block truncate max-w-[130px] md:max-w-[200px]"
                  >
                    {{ item?.[strip?.metadata?.subtitle] || item.subtitle }}
                  </AppLink>
                </template>
              </PosterCard>
            </div>
          </template>
        </ItemsStrip>
      </FeaturedBackdrop>
    </template>
  </div>
</template>
