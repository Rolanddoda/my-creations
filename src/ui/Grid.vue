<template>
  <div class="grid" :style="{ ...contentItemsStyle, ...style }">
    <!-- @slot Default slot for grid items -->
    <slot />
  </div>
</template>

<script>
/**
 * This is a component for using CSS grid
 */
export default {
  name: "Grid",

  props: {
    /**
     *  CSS grid gap property
     */
    gap: String,
    /**
     *  CSS grid grid-template-columns property
     */
    gtc: String,
    /**
     *  CSS grid grid-template-rows property
     */
    gtr: String,
    /**
     *  CSS grid grid-template-areas property
     */
    gta: String,
    /**
     *  CSS grid grid-auto-flow property
     */
    gaf: String,
    /**
     *  CSS grid align-items property
     */
    alignItems: String,
    /**
     *  CSS grid align-content property
     */
    alignContent: String,
    /**
     *  CSS grid justify-items property
     */
    justifyItems: String,
    /**
     *  CSS grid justify-content property
     */
    justifyContent: String,

    /**
     * CSS grid place-items property
     */
    placeItems: String,

    /**
     * CSS grid place-content property
     */
    placeContent: String,

    /**
     * Shorthand for using justify-content and align-items
     */
    contentItems: String
  },

  computed: {
    contentItemsStyle() {
      return {
        ...(!!this.contentItems && {
          "justify-content": this.contentItems,
          "align-items": this.contentItems
        })
      };
    },

    style() {
      return {
        gap: this.gap,
        ...(this.gtc && { "grid-template-columns": this.gtc }),
        ...(this.gtr && { "grid-template-rows": this.gtr }),
        ...(this.gta && { "grid-template-areas": this.gta }),
        ...(this.gaf && { "grid-auto-flow": this.gaf }),
        ...(this.placeItems && { "place-items": this.placeItems }),
        ...(this.placeContent && { "place-content": this.placeContent }),
        ...(this.alignItems && { "align-items": this.alignItems }),
        ...(this.alignContent && { "align-content": this.alignContent }),
        ...(this.justifyItems && { "justify-items": this.justifyItems }),
        ...(this.justifyContent && { "justify-content": this.justifyContent })
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
}
</style>
