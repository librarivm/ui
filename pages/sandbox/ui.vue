<script setup>
import PageHeader from '~/components/page/PageHeader.vue';
import PageFooter from '~/components/page/PageFooter.vue';
import PosterCard from '~/components/displays/PosterCard.vue';
import ItemsStrip from '~/components/selections/ItemsStrip.vue';
import MainContent from '~/components/containments/MainContent.vue';
import BottomSheet from '~/components/containments/BottomSheet.vue';
import BaseButton from '~/components/containments/BaseButton.vue';
import BaseCard from '~/components/containments/BaseCard.vue';
import BaseCardContent from '~/components/containments/BaseCardContent.vue';
import AppContainer from '~/components/grids/AppContainer.vue';
import AppGrid from '~/components/grids/AppGrid.vue';
import AppColumn from '~/components/grids/AppColumn.vue';
import PosterModernistCard from '~/components/displays/PosterModernistCard.vue';
import FlexTable from '~/components/displays/FlexTable.vue';
import MasonryTiles from '~/components/displays/MasonryTiles.vue';
import PhotoCard from '~/components/displays/PhotoCard.vue';
import ChevronRightIcon from '~/components/icons/ChevronRightIcon.vue';
import AppLink from '~/components/navigations/AppLink.vue';
import DialogModal from '~/components/containments/DialogModal.vue';
import BaseCardHeader from '~/components/containments/BaseCardHeader.vue';
import BaseCardFooter from '~/components/containments/BaseCardFooter.vue';
import AddLibraryDialog from '~/components/controls/AddLibraryDialog.vue';
import BaseTooltip from '~/components/feedback/BaseTooltip.vue';

definePageMeta({
  layout: 'sandbox',
  title: 'UI Sandbox',
});
</script>

<template>
  <PageHeader back />

  <MainContent>
    <AppContainer>
      <AppGrid>
        <AppColumn class="flex flex-col gap-4">
          <PageTitle class="mb-4" type="h1">Photos</PageTitle>
          <MasonryTiles :col="3">
            <PhotoCard
              alt="test"
              class="w-full mb-5 rounded-lg shadow"
              src="https://64.media.tumblr.com/2dd9ac6b3f8c29891a83cd0a026359bb/556d521e8078826a-37/s540x810/d84555e9becc69a68a78a52f48480b40b2adafac.gifv"
            />
            <PhotoCard
              alt="test"
              class="w-full mb-5 rounded-lg shadow"
              src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/03/02/16777634997342.jpg"
            />
            <PhotoCard
              alt="test"
              class="w-full mb-5 rounded-lg shadow"
              src="https://64.media.tumblr.com/4b2af90a92a8c665c714ed0466ca412b/495f7506527b2732-99/s540x810/6d6a59402c676a34079b4ce163f92c24ebeb63bd.gifv"
            />
            <PhotoCard
              alt="test"
              class="w-full mb-5 rounded-lg shadow"
              src="https://m.media-amazon.com/images/M/MV5BOWQ2YTgwYTktYzJiZC00NmZmLTg1MWEtNDIwNTNlYjcyMjY5XkEyXkFqcGc@._V1_.jpg"
            />
            <PhotoCard
              alt="test"
              class="w-full mb-5 rounded-lg shadow"
              src="https://i0.wp.com/gadget.co.za/wp-content/uploads/2022/11/Wednesday-image.gif?fit=600%2C703&ssl=1"
            />
            <PhotoCard
              alt="test"
              class="w-full mb-5 rounded-lg shadow"
              src="https://i.pinimg.com/originals/4b/9e/37/4b9e379f1077618ec7b58cacff5079e3.gif"
            />
            <PhotoCard
              alt="test"
              class="w-full mb-5 rounded-lg shadow"
              src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/myRzRzCxdfUWjkJWgpHHZ1oGkJd.jpg"
            />
          </MasonryTiles>

          <BaseTooltip>
            <template v-slot:activator>hello</template>
            Hello there.
          </BaseTooltip>

          <BottomSheet>
            <template v-slot:activator="{ prop }">
              <BaseButton v-bind="prop" variant="primary">Bottom Sheet</BaseButton>
            </template>

            <BaseCard>
              <BaseCardContent>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis
                deserunt, eligendi eos est, et fugit inventore iure iusto maiores minima nesciunt
                omnis placeat provident quia, repudiandae sit vel velit.
              </BaseCardContent>
            </BaseCard>
          </BottomSheet>

          <AddLibraryDialog />

          <DialogModal>
            <template v-slot:activator="{ prop }">
              <BaseButton v-bind="prop" variant="primary">Dialog</BaseButton>
            </template>

            <template v-slot:default="{ prop }">
              <BaseCard>
                <BaseCardHeader>Dialog</BaseCardHeader>
                <BaseCardContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis
                  deserunt, eligendi eos est, et fugit inventore iure iusto maiores minima nesciunt
                  omnis placeat provident quia, repudiandae sit vel velit.
                </BaseCardContent>
                <BaseCardFooter>
                  <BaseButton v-bind="prop">Cancel</BaseButton>
                  <BaseButton variant="primary">Confirm</BaseButton>
                </BaseCardFooter>
              </BaseCard>
            </template>
          </DialogModal>

          <PosterModernistCard
            class="mt-4"
            src="https://64.media.tumblr.com/2dd9ac6b3f8c29891a83cd0a026359bb/556d521e8078826a-37/s540x810/d84555e9becc69a68a78a52f48480b40b2adafac.gifv"
            subtitle="2013"
            title="The Wolf of Wallstreet"
          >
            <template v-slot:extension>
              <FlexTable
                :items="[
                  { title: 'Runtime', value: '3 hours' },
                  { title: 'Written by', value: 'Terence Winter' },
                  { title: 'Directed by', value: 'Martin Scorsese' },
                ]"
                :width="80"
              >
                <template v-slot:item.value="{ item }">
                  <span class="font-bold">{{ item.value }}</span>
                </template>
              </FlexTable>
            </template>
          </PosterModernistCard>

          <PosterModernistCard
            class="mt-4"
            src="https://64.media.tumblr.com/4b2af90a92a8c665c714ed0466ca412b/495f7506527b2732-99/s540x810/6d6a59402c676a34079b4ce163f92c24ebeb63bd.gifv"
            subtitle="2022"
            title="Wednesday"
          >
            <template v-slot:extension>
              <FlexTable
                :items="[
                  { title: 'Runtime', value: '3 hours' },
                  { title: 'Written by', value: 'Terence Winter' },
                  { title: 'Directed by', value: 'Martin Scorsese' },
                ]"
                :width="80"
              >
                <template v-slot:item.value="{ item }">
                  <span class="font-bold">{{ item.value }}</span>
                </template>
              </FlexTable>
            </template>
          </PosterModernistCard>
        </AppColumn>
      </AppGrid>
    </AppContainer>

    <ItemsStrip container>
      <template v-slot:label>
        <div class="flex gap-1 items-center">
          <AppLink href="#">Recently added</AppLink>
          <ChevronRightIcon />
        </div>
      </template>
      <template v-slot:default="{ prop }">
        <PosterCard
          src="https://m.media-amazon.com/images/M/MV5BOWQ2YTgwYTktYzJiZC00NmZmLTg1MWEtNDIwNTNlYjcyMjY5XkEyXkFqcGc@._V1_.jpg"
          subtitle="2017"
          v-bind="prop"
        >
          <template v-slot:title>
            <AppLink href="#">Voice from the Stone</AppLink>
          </template>
        </PosterCard>

        <PosterCard
          src="https://i0.wp.com/gadget.co.za/wp-content/uploads/2022/11/Wednesday-image.gif?fit=600%2C703&ssl=1"
          subtitle="2022"
          title="Wednesday"
        />

        <PosterCard
          src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/myRzRzCxdfUWjkJWgpHHZ1oGkJd.jpg"
          subtitle="2017"
          title="Ghost in the Shell"
        />
        <!--<PosterCard-->
        <!--  aspect-ratio="video"-->
        <!--  src="https://wallpapers.com/images/hd/movie-poster-background-x6fu97aioeo5vidk.jpg"-->
        <!--  subtitle="2008"-->
        <!--  title="The Dark Knight"-->
        <!--/>-->
        <PosterCard
          src="https://image.tmdb.org/t/p/original/rFBHD0499vOYqH0yHc7R843ErXP.jpg"
          subtitle="2021"
          title="Black Widow"
        />
        <PosterCard
          src="https://image.tmdb.org/t/p/original/kQAFHdt3I1TpYhtzcGeBb1ogwUP.jpg"
          subtitle="2022"
          title="The Wonder"
        />
        <PosterCard
          src="https://image.tmdb.org/t/p/original/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg"
          subtitle="2018"
          title="Tomb Raider"
        />
        <PosterCard
          src="https://api.mediux.pro/assets/ffa9ff9a-2965-40bb-8033-025be5d58861"
          subtitle="2024"
          title="Cuckoo"
        />
        <PosterCard
          src="https://api.mediux.pro/assets/6e7ad098-5437-4453-910e-766796737fe8"
          subtitle="2023"
          title="The Fall of the House of Usher"
        />
        <PosterCard src="https://api.mediux.pro/assets/9deddd14-36b4-4ef6-bc3a-8e592a91c03c" />
        <PosterCard src="https://api.mediux.pro/assets/b53c5976-2b84-47bd-98e3-e3edaa9e3fa9" />
        <PosterCard src="https://api.mediux.pro/assets/f92e1d70-5c29-43bc-91f1-6751cbb5b749" />
        <PosterCard src="https://api.mediux.pro/assets/f29dfa50-86b3-4faf-a882-67a43dbd3e17" />
        <PosterCard src="https://api.mediux.pro/assets/832efffa-19e1-4ae4-8f0a-be6894acef01" />
        <PosterCard src="https://api.mediux.pro/assets/235544ef-0cf5-4dbe-b26b-e8e186c6c2b8" />
        <PosterCard src="https://api.mediux.pro/assets/ac00c8a7-c908-4efd-afcd-8b3c020507ce" />

        <PosterCard src="https://image.tmdb.org/t/p/original/rFBHD0499vOYqH0yHc7R843ErXP.jpg" />
        <PosterCard src="https://image.tmdb.org/t/p/original/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg" />
        <PosterCard src="https://api.mediux.pro/assets/ffa9ff9a-2965-40bb-8033-025be5d58861" />
        <PosterCard src="https://api.mediux.pro/assets/6e7ad098-5437-4453-910e-766796737fe8" />
        <PosterCard src="https://api.mediux.pro/assets/9deddd14-36b4-4ef6-bc3a-8e592a91c03c" />
        <PosterCard src="https://api.mediux.pro/assets/b53c5976-2b84-47bd-98e3-e3edaa9e3fa9" />
        <PosterCard src="https://api.mediux.pro/assets/f92e1d70-5c29-43bc-91f1-6751cbb5b749" />
        <PosterCard src="https://api.mediux.pro/assets/f29dfa50-86b3-4faf-a882-67a43dbd3e17" />
        <PosterCard src="https://api.mediux.pro/assets/832efffa-19e1-4ae4-8f0a-be6894acef01" />
        <PosterCard src="https://api.mediux.pro/assets/235544ef-0cf5-4dbe-b26b-e8e186c6c2b8" />
        <PosterCard src="https://api.mediux.pro/assets/ac00c8a7-c908-4efd-afcd-8b3c020507ce" />
      </template>
    </ItemsStrip>
  </MainContent>
  <PageFooter />
</template>
