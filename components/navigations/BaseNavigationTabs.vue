<script setup>
import { useItemsProps } from '~/composables/props/useItemsProps.js';
import AppLink from '~/components/navigations/AppLink.vue';
import AppContainer from '~/components/grids/AppContainer.vue';
import BaseIconResolver from '~/components/containments/BaseIconResolver.vue';

const $props = defineProps({
  ...useItemsProps(),
});

const $route = useRoute();
const $router = useRouter();

if (!$route.query.type) {
  const item = $props.items?.[0];
  $router.push({ query: { type: item?.metadata?.route?.query?.type } });
}

const isActive = (item) => {
  return item.metadata.route.query.type === $route.query.type;
};
</script>

<template>
  <AppContainer
    class="py-0 sm:py-0 lg:py-0 mb-4 max-w-full hide-scrollbar overflow-x-auto overflow-y-hidden text-sm font-medium text-center text-neutral-600 border-b"
  >
    <ul class="flex flex-nowrap text-nowrap">
      <li v-for="(item, i) in items" :key="i" class="me-2">
        <AppLink
          v-if="item?.metadata?.route"
          :class="[
            isActive(item) && 'active',
            '[&.active]:text-primary [&.active]:border-primary [&.active]:border-b-2 [&.active]:rounded-t-lg',
            'dark:[&.active]:text-astronaut-blue-300 dark:[&.active]:border-astronaut-blue-300',
            'dark:hover:[&.active]:text-astronaut-blue-400 dark:hover:[&.active]:border-astronaut-blue-400',
          ]"
          :to="item.metadata.route"
          class="flex gap-2 items-center hover:no-underline p-4 border-b-2 border-transparent rounded-t-lg hover:text-neutral-600 hover:border-neutral-300"
        >
          <BaseIconResolver v-if="item.metadata.icon" :icon="item.metadata.icon" class="size-4" />
          <span>{{ item?.[itemTitle] || item }}</span>
        </AppLink>
      </li>
    </ul>
  </AppContainer>
</template>
