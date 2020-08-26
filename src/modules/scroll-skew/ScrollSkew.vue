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
      let oldScrollPos = this.$el.scrollTop;

      this.$el.onscroll = () => {
        const newScrollPos = this.$el.scrollTop;
        const scrollDif = newScrollPos - oldScrollPos;
        let newSkew;
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
@supports not (scrollbar-width: none) {
  .frameworks::-webkit-scrollbar {
    width: 0;
  }
}

.frameworks {
  --skew: 0deg;

  height: 100vh;
  overflow: auto;
  scrollbar-width: none;
  scroll-behavior: smooth;

  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
}
</style>
