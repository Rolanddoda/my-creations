<template>
  <Grid gtr="auto 1fr" class="gallery-page-transition fill-height">
    <div class="text-h3 text-center pa-10">Beautiful places</div>

    <div class="pa-10">
      <transition
        appear
        @before-enter="selectedPhotoBeforeEnter"
        @leave="selectedPhotoLeave"
        class="pa-5"
        :css="false"
      >
        <div
          v-if="selectedPhoto"
          class="selected-photo fill-height"
          :style="{
            background: `url(${selectedPhoto.src}) center / cover`
          }"
          @click="selectedPhoto = null"
        >
          <SplitImage :cols="5" />
        </div>
      </transition>

      <Grid
        v-if="!selectedPhoto"
        :gtc="`repeat(${photos.length}, 30%)`"
        class="photos fill-height pa-5"
      >
        <div
          class="photo"
          v-for="photo of photos"
          :key="photo.src"
          :style="{ background: `url(${photo.src}) center / cover` }"
          @click="selectedPhoto = photo"
        ></div>
      </Grid>
    </div>
  </Grid>
</template>

<script>
import gsap from "gsap";
import SplitImage from "./SplitImage";

export default {
  components: {
    SplitImage
  },

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
    ],
    selectedPhoto: {
      src:
        "https://cdn.statically.io/img/globalgrasshopper.com/wp-content/uploads/2020/03/most-beautiful-places-to-visit-in-Japan.jpg?f=auto"
    }
  }),

  methods: {
    selectedPhotoBeforeEnter(el) {
      const item = el.querySelectorAll(".__s-item");
      gsap.to(item, {
        y: "100%",
        delay: 0.2,
        duration: 1,
        stagger: {
          from: "center",
          amount: 0.2
        }
      });
      console.log("before enter", el);
    },

    selectedPhotoLeave(el, done) {
      const item = el.querySelectorAll(".__s-item");
      const tl = gsap.timeline({ onComplete: done });
      tl.to(item, {
        y: "0%",
        duration: 1,
        stagger: {
          from: "center",
          amount: 0.2
        }
      });
    }
  }
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

.selected-photo,
.photo {
  cursor: pointer;
  position: relative;
}
</style>
