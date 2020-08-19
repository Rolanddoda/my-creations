<template>
  <Grid class="text-center">
    <div class="text-h3 px-5 pt-15">
      Remember that in Gsap transform properties order matters!
    </div>

    <details>
      This:
      <code>
        transform: rotate(45deg) translate(10px, 10px)
      </code>

      <br />

      Is not the same as this:
      <code>
        transform: translate(10px, 10px) rotate(45deg)
      </code>

      <br />

      <b>Always use rotate last because this is what GSAP does</b>
    </details>
  </Grid>
</template>
