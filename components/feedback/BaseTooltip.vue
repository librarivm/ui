<template>
  <div class="hs-tooltip relative [--placement:bottom-left] [--tooltip-strategy:fixed]">
    <slot name="activator" v-bind="{ class: 'hs-tooltip-toggle transition' }" />
    <span
      class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity invisible z-[800] absolute py-1 px-2 m-2 text-xs rounded text-nowrap font-sans bg-primary text-primary-foreground"
      role="tooltip"
    >
      <slot />
    </span>
  </div>
</template>
