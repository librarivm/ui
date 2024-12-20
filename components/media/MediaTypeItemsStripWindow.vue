<script setup>
import ItemsStrip from '~/components/selections/ItemsStrip';
import PosterCard from '~/components/displays/PosterCard.vue';
import AppLink from '~/components/navigations/AppLink.vue';
import ChevronRightIcon from '~/components/icons/ChevronRightIcon.vue';
import FeaturedBackdrop from '~/components/containments/FeaturedBackdrop.vue';

defineProps({
  data: { type: Object, required: true },
  hideDetails: Boolean,
});
</script>

<template>
  <div class="flex flex-col gap-12" data-component="media-type-movie-window">
    <template v-for="(strip, i) in Object.values(data.contents)" :key="i">
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
            <PosterCard
              :hide-details="hideDetails"
              :src="item.poster"
              :subtitle="item.year"
              :to="{ name: 'media.show', params: { media: item.id } }"
              class="min-w-[200px]"
            >
              <template v-slot:title>
                <AppLink
                  :to="{ name: 'media.show', params: { media: item.id } }"
                  class="block truncate max-w-[200px]"
                >
                  {{ item.title }}
                </AppLink>
              </template>
            </PosterCard>
          </template>
        </ItemsStrip>
      </FeaturedBackdrop>
    </template>
  </div>
</template>
