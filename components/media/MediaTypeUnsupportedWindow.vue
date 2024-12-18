<script setup>
import IllustrationCard from '~/components/displays/IllustrationCard';
import FancyBlockquote from '~/components/displays/FancyBlockquote.vue';
</script>

<template>
  <PageArticle>
    <div class="text-center mx-auto flex flex-col items-center">
      <IllustrationCard>
        <img
          alt="Alice and the Cheshire Cat"
          class="object-contain max-w-xs dark:invert"
          src="~/assets/illustrations/alice.xl.png"
        />
      </IllustrationCard>
      <FancyBlockquote class="italic max-w-sm">
        Would you tell me, please, which way I ought to go from here?
        <!--Well, well, it seems you’ve wandered off the path. The page? Oh, it’s not here. Perhaps it-->
        <!--never was! Turn back... or forward... whichever way amuses you most.-->
      </FancyBlockquote>
    </div>
  </PageArticle>
</template>
