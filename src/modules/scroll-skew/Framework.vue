<template>
  <Grid place-items="center" class="framework">
    <h1 :data-text="name">{{ name }}</h1>
  </Grid>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.framework {
  height: 65vh;
  width: 100vw;

  > h1 {
    font-size: 15vw;
    text-transform: uppercase;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-family: cursive;
    transform: skewY(var(--skew));
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
}
</style>
