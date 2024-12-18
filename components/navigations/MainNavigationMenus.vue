<script setup>
import BaseButton from '~/components/containments/BaseButton.vue';
import BaseIconResolver from '~/components/containments/BaseIconResolver.vue';
import TextOverline from '~/components/typography/TextOverline.vue';

const { items, expanded } = storeToRefs(useMainNavigationSidebarStore());
</script>

<template>
  <nav data-component="main-navigation-menus">
    <ul class="flex flex-col gap-1">
      <li v-for="(item, index) in items" :key="index">
        <template v-if="item.type === 'subheader'">
          <TextOverline class="font-bold flex gap-3.5 my-3 text-neutral-500">
            <BaseIconResolver v-if="item.icon" :icon="item.icon" class="w-[14px] h-[14px] ml-1" />
            <span>{{ item.title }}</span>
          </TextOverline>
        </template>
        <template v-if="item.type === 'divider'">
          <hr class="block w-full my-1 mb-3" />
        </template>
        <template v-else-if="item.type === 'link'">
          <BaseButton
            :class="[expanded ? 'px-3' : 'px-2']"
            :to="item.to"
            class="w-full flex shrink-0 gap-4 hover:bg-primary/10 hover:text-primary focus:ring-primary/50 justify-start font-bold [&.router-link-active]:bg-primary [&.router-link-active]:text-primary-foreground"
            size="sm"
            variant="ghost"
          >
            <template #prepend>
              <BaseIconResolver
                v-if="item.icon"
                :icon="item.icon"
                class="w-[16px] h-[16px] shrink-0"
              />
              <div v-else class="ml-4" />
            </template>
            <span v-if="expanded">{{ item.title }}</span>
          </BaseButton>
        </template>
      </li>
    </ul>
  </nav>
</template>
