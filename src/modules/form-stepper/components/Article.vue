<template>
  <Grid
    class="article"
    place-items="center"
    place-content="center"
    :data-active="active"
  >
    <div class="text-caption grey--text font-weight-bold">
      # Step {{ step }}
    </div>

    <h2>Lorem ipsum dolor sit amet.</h2>

    <p class="text-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, corporis
      debitis fuga impedit itaque iusto nihil nobis perferendis placeat quaerat
      quidem quod ratione repellat repudiandae voluptates? Cupiditate fugit
      ratione veniam?
    </p>

    <v-btn v-if="!noNext" color="primary" @click="$emit('next')">Next</v-btn>
  </Grid>
</template>

<script>
export default {
  props: {
    noNext: Boolean,
    active: Boolean,
    step: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.article {
  grid-area: 1 / -1;
  transform: translateY(-100%);
  transition: 0.5s cubic-bezier(0.36, 0, 0.66, -0.56);

  &[data-active] {
    transform: translateY(0);

    ~ .article {
      transform: translateY(100%);
    }
  }
}
</style>
