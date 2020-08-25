<template>
  <Grid class="frameworks" @hook:mounted="reallyMounted">
    <Grid
      v-for="framework of frameworks"
      :key="framework.name"
      place-items="center"
    >
      <Framework :name="framework.name" />
    </Grid>
  </Grid>
</template>

<script>
// Components
import Framework from "./Framework";

export default {
  components: {
    Framework
  },

  created() {
    this.frameworks = [
      { name: "Vue" },
      { name: "React" },
      { name: "Svelte" },
      { name: "Angular" },
      { name: "Ember" },
      { name: "Meteor" },
      { name: "Node" },
      { name: "Polymer" },
      { name: "Aurelia" },
      { name: "Backbone" }
    ];
  },

  mounted() {},

  methods: {
    reallyMounted() {
      let timer;
      let scrollOldPos = window.scrollY;
      window.onscroll = () => {
        console.log("running");
        if (timer) clearTimeout(timer);
        const scrollNewPos = window.scrollY;
        const scrollUpOrDown = scrollNewPos >= scrollOldPos ? 1 : -1; // 1 => Down, -1 => Up
        const getEl = getComputedStyle;
        const getSkewCssVar = getEl(this.$el).getPropertyValue("--skew");
        const setSkewCssVar = val => this.$el.style.setProperty("--skew", val);
        let skew = parseInt(getSkewCssVar);
        scrollOldPos = scrollNewPos;

        function resetSkew() {
          setSkewCssVar(`-5deg`); // -5deg is the default
        }

        if (skew < 15 && skew > -15) {
          skew += scrollUpOrDown;
          setSkewCssVar(`${skew}deg`);
        }

        timer = setTimeout(resetSkew, 100);
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.frameworks {
  --skew: -5deg;
}
</style>
