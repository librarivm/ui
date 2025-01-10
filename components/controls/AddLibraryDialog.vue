<script setup>
import DialogModal from '~/components/containments/DialogModal';
import BaseButton from '~/components/containments/BaseButton.vue';
import PlusIcon from '~/components/icons/PlusIcon.vue';
import BaseCard from '~/components/containments/BaseCard.vue';
import BaseCardHeader from '~/components/containments/BaseCardHeader.vue';
import PackagePlusIcon from '~/components/icons/PackagePlusIcon.vue';
import BaseCardContent from '~/components/containments/BaseCardContent.vue';
import BaseCardFooter from '~/components/containments/BaseCardFooter.vue';
import { useLibraryType } from '~/composables/types/useLibraryType.js';
import { useListTypesService } from '~/composables/services/types/useListTypesService.js';
import AppGrid from '~/components/grids/AppGrid.vue';
import AppColumn from '~/components/grids/AppColumn.vue';
import CloseIcon from '~/components/icons/CloseIcon.vue';
import TextField from '~/components/controls/TextField.vue';

const { data: types } = await useListTypesService();
const { icon } = useLibraryType();
</script>

<template>
  <DialogModal
    class="self-baseline mt-16 shadow-2xl"
    @close="console.log('AddLibraryDialog@close')"
  >
    <template v-slot:activator="{ prop }">
      <BaseButton size="xs" v-bind="prop" variant="ghost">
        <PlusIcon height="14" width="14" />
      </BaseButton>
    </template>
    <template v-slot:default="{ prop }">
      <BaseCard>
        <BaseCardHeader class="justify-between">
          <div class="flex gap-4 items-center">
            <PackagePlusIcon class="size-5" />
            <span>Add Library</span>
          </div>
          <BaseButton size="xs" v-bind="prop" variant="ghost">
            <CloseIcon class="size-5" />
          </BaseButton>
        </BaseCardHeader>
        <BaseCardContent>
          <!-- widgets/AddLibraryWizard -->
          <TextField label="Name" />

          <p class="mb-3">Select your library type</p>
          <AppGrid>
            <AppColumn v-for="(type, i) in types" :key="i" md="3">
              <BaseCard
                :disabled="!type.active"
                class="flex-1 min-w-[105px] shadow-none border-none"
              >
                <BaseCardContent class="text-center flex flex-col items-center gap-4">
                  <component :is="icon(type.code)" class="mx-auto" />
                  <span>{{ type.title }}</span>
                </BaseCardContent>
              </BaseCard>
            </AppColumn>
          </AppGrid>
        </BaseCardContent>
        <BaseCardFooter>
          <BaseButton v-bind="prop">Cancel</BaseButton>
          <BaseButton class="min-w-24" variant="primary">Next</BaseButton>
        </BaseCardFooter>
      </BaseCard>
    </template>
  </DialogModal>
</template>
