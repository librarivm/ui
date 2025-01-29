<script setup>
import PageHeader from '~/components/page/PageHeader.vue';
import PageFooter from '~/components/page/PageFooter.vue';
import MainContent from '~/components/containments/MainContent.vue';
import AppContainer from '~/components/grids/AppContainer.vue';
import AppGrid from '~/components/grids/AppGrid.vue';
import AppColumn from '~/components/grids/AppColumn.vue';
import BaseButton from '~/components/containments/BaseButton.vue';
import BaseFlexWrapper from '~/components/containments/BaseFlexWrapper.vue';
import BaseSection from '~/components/containments/BaseSection.vue';
import BaseTooltip from '~/components/feedback/BaseTooltip.vue';
import VerticalStepper from '~/components/selections/VerticalStepper.vue';
import ContextMenu from '~/components/selections/ContextMenu.vue';

definePageMeta({
  layout: 'default',
  name: 'sandbox.ui',
  title: 'UI Sandbox',
});
</script>

<template>
  <PageHeader />

  <MainContent>
    <AppContainer class="mx-auto">
      <AppGrid class="place-self-center">
        <AppColumn class="flex flex-col gap-10 place-self-center mx-auto" md="8">
          <!--<AddFoldersForm />-->
          <PageTitle class="mb-4" type="h1">Context Menu</PageTitle>
          <div class="shrink-0">
            <ContextMenu :items="[1, 2, 3, 4]" name="x">
              <template v-slot:link="{ item }">
                <span>{{ item.title }}</span>
              </template>
            </ContextMenu>
            <ContextMenu :items="[1, 2, 3, 4]" name="y">
              <template v-slot:link="{ item }">
                <span>{{ item.title }}</span>
              </template>
            </ContextMenu>
          </div>

          <PageTitle class="mb-4" type="h1">Vertical Stepper</PageTitle>
          <BaseSection class="p-0 gap-4">
            <VerticalStepper
              :items="[
                { title: 'Step 1', description: 'Lorem ispum Step 1' },
                { title: 'Step 2', description: 'Lorem ispum Step 2' },
                { title: 'Step 3', description: 'Lorem ispum Step 3' },
                { title: 'Step 4', description: 'Lorem ispum Step 4' },
              ]"
            >
              <template v-slot:[`item.description`]>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur id
                incidunt quod recusandae suscipit temporibus. Ab aliquid asperiores at blanditiis,
                eius facere, id labore pariatur quaerat quos repellendus reprehenderit!
              </template>
            </VerticalStepper>
          </BaseSection>

          <PageTitle class="mb-4" type="h1">Buttons</PageTitle>
          <BaseSection class="p-0 gap-4">
            <div class="font-bold">Variants</div>
            <BaseFlexWrapper class="border border-neutral-400 bg-neutral-400/20 p-4 rounded-lg">
              <BaseButton
                v-for="i in [
                  'Primary',
                  'Secondary',
                  'Danger',
                  'Warning',
                  'Info',
                  'Success',
                  'Ghost',
                  'Filled',
                  'Default',
                ]"
                :key="i"
                :variant="i.toLowerCase()"
                class="max-w-6 min-w-[130px]"
              >
                {{ i }}
              </BaseButton>
            </BaseFlexWrapper>
          </BaseSection>

          <BaseSection class="p-0 gap-4">
            <div class="font-bold">Density</div>
            <BaseFlexWrapper class="border border-neutral-400 bg-neutral-400/20 p-4 rounded-lg">
              <BaseButton
                v-for="i in ['xl', 'lg', 'md', 'sm', 'xs']"
                :key="i"
                :size="i.toLowerCase()"
                class="shrink-0"
              >
                BUTTON {{ i.toUpperCase() }}
              </BaseButton>
            </BaseFlexWrapper>
          </BaseSection>

          <BaseSection class="p-0 gap-4">
            <div class="font-bold">Block</div>
            <p class="font-normal">
              Add <code class="border bg-neutral-50 rounded-lg py-1 px-2">w-full</code> class.
            </p>
            <BaseFlexWrapper class="border border-neutral-400 bg-neutral-400/20 p-4 rounded-lg">
              <BaseButton class="w-full">BUTTON w-full</BaseButton>
            </BaseFlexWrapper>
          </BaseSection>

          <PageTitle class="mb-4" type="h1">Tooltips</PageTitle>
          <BaseSection class="p-0 gap-4">
            <div class="font-bold">Base Tooltip</div>
            <p class="font-normal">
              Add <code class="border bg-neutral-50 rounded-lg py-1 px-2">w-full</code> class.
            </p>
            <BaseFlexWrapper class="border border-neutral-400 bg-neutral-400/20 p-4 rounded-lg">
              <BaseTooltip placement="bottom-start">
                <template v-slot:activator>the bottom-start</template>
                I'm the tooltip for <span class="font-bold">bottom-start</span>
              </BaseTooltip>
              <BaseTooltip placement="bottom-end">
                <template v-slot:activator>the bottom-end</template>
                I'm the tooltip for <span class="font-bold">bottom-end</span>
              </BaseTooltip>
              <BaseTooltip placement="top-end">
                <template v-slot:activator>the top-end</template>
                I'm the tooltip for <span class="font-bold">top-end</span>
              </BaseTooltip>
              <BaseTooltip placement="top-start">
                <template v-slot:activator>the top-start</template>
                I'm the tooltip for <span class="font-bold">top-start</span>
              </BaseTooltip>
              <BaseTooltip placement="left">
                <template v-slot:activator>the left</template>
                I'm the tooltip for <span class="font-bold">left</span>
              </BaseTooltip>
              <BaseTooltip placement="right">
                <template v-slot:activator>the right</template>
                I'm the tooltip for <span class="font-bold">right</span>
              </BaseTooltip>
              <BaseTooltip placement="bottom">
                <template v-slot:activator>the bottom</template>
                I'm the tooltip for <span class="font-bold">bottom</span>
              </BaseTooltip>
              <BaseTooltip placement="top">
                <template v-slot:activator>the top</template>
                I'm the tooltip for <span class="font-bold">top</span>
              </BaseTooltip>
              <BaseTooltip disabled placement="top">
                <template v-slot:activator>disabled tooltip</template>
                I'm the tooltip for <span class="font-bold">top</span>
              </BaseTooltip>
            </BaseFlexWrapper>
          </BaseSection>
        </AppColumn>
      </AppGrid>
    </AppContainer>
  </MainContent>
  <PageFooter />
</template>
