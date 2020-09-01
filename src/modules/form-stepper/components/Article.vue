<template>
  <article :data-active="active">
    <div class="text-caption grey--text font-weight-bold">
      # Step {{ step }}
    </div>

    <h2>Lorem ipsum dolor sit amet.</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, corporis
      debitis fuga impedit itaque iusto nihil nobis perferendis placeat quaerat
      quidem quod ratione repellat repudiandae voluptates? Cupiditate fugit
      ratione veniam?
    </p>

    <v-btn color="primary">Next</v-btn>
  </article>
</template>

<script>
export default {
  props: {
    active: Boolean,
    step: {
      type: Number,
      required: true
    }
  }
};
</script>
