<template>
  <Grid gtr="auto 1fr" class="gallery-page-transition fill-height">
    <div class="text-h3 text-center pa-10">Beautiful places</div>

    <Grid :gtc="`repeat(${photos.length}, 30%)`" class="photos pa-5">
      <div
        class="photo"
        v-for="photo of photos"
        :key="photo.src"
        :style="{ background: `url(${photo.src}) center / cover` }"
      ></div>
    </Grid>
  </Grid>
</template>

<script>
export default {
  data: () => ({
    photos: [
      {
        src:
          "https://cdn.statically.io/img/globalgrasshopper.com/wp-content/uploads/2020/03/most-beautiful-places-to-visit-in-Japan.jpg?f=auto"
      },
      {
        src:
          "https://www.studentuniverse.com/blog/wp-content/uploads/2014/04/Santorini-Greece.jpg"
      },
      {
        src:
          "https://cdn.statically.io/img/globalgrasshopper.com/wp-content/uploads/2013/11/Machu-Picchu-1.jpg?f=auto"
      },
      {
        src:
          "https://cdn.theculturetrip.com/wp-content/uploads/2018/08/perast.jpg"
      },
      {
        src:
          "https://i1.wp.com/adventurediary.co/wp-content/uploads/2019/12/aurora-borealis-1933239-min-scaled.jpg?fit=2560%2C1704&ssl=1"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
@supports not (scrollbar-width: none) {
  .photos::-webkit-scrollbar {
    width: 0;
  }
}

.photos {
  overflow: auto;
  scrollbar-width: none;
}
</style>
