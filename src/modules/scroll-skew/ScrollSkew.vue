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

  methods: {
    reallyMounted() {
      let oldScrollPos = window.scrollY;

      window.onscroll = () => {
        const newScrollPos = window.scrollY;
        const scrollDif = newScrollPos - oldScrollPos;
        let newSkew = 0;
        if (scrollDif > 20) newSkew = 20;
        else if (scrollDif < -20) newSkew = -20;
        else newSkew = scrollDif;
        this.$el.style.setProperty("--skew", `${newSkew}deg`);
        oldScrollPos = newScrollPos;
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.frameworks {
  --skew: 0deg;
}
</style>
