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
  --calc-skew: calc(var(--skew) - 5deg);

  height: 65vh;
  width: 100vw;

  > h1 {
    font-size: 15vw;
    text-transform: uppercase;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-family: cursive;
    transform: skewY(var(--calc-skew));
    text-shadow: -2px 2px #000;
    transition: text-shadow 1s cubic-bezier(0.215, 0.61, 0.355, 1),
      transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);

    &:hover {
      --distance: 10px;
      --negative-distance: calc(var(--distance) * -1);

      text-shadow: var(--negative-distance) var(--distance) #000;
      transform: skewY(var(--calc-skew))
        translate(var(--distance), var(--negative-distance));
    }
  }
}
</style>
