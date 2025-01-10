import MasonryWall from '@yeger/vue-masonry-wall';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(MasonryWall);
});
