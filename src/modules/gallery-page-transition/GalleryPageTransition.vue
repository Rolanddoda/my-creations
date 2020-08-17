<template>
  <Grid gtr="auto 1fr" class="gallery-page-transition fill-height">
    <div class="text-h3 text-center pa-10">Beautiful places</div>

    <div class="pa-15">
      <transition
        appear
        @before-enter="beforeEnter"
        @leave="leave"
        class="pa-5"
        :css="false"
        mode="out-in"
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

        <Grid
          v-else
          :gtc="`repeat(${photos.length}, 30%)`"
          class="photos fill-height"
        >
          <div
            class="photo"
            v-for="photo of photos"
            :key="photo.src"
            :style="{ backgroundImage: `url(${photo.src})` }"
            @click="selectedPhoto = photo"
          ></div>
        </Grid>
      </transition>
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

    selectedPhoto: null
  }),

  methods: {
    beforeEnter(el) {
      if (this.selectedPhoto) this.selectedPhotoBeforeEnter(el);
      else this.photosBeforeEnter(el);
    },

    leave(el, done) {
      if (this.selectedPhoto) this.photosLeave(el, done);
      else this.selectedPhotoLeave(el, done);
    },

    getCommonGsapValues() {
      return {
        duration: 0.5,
        stagger: {
          from: "center",
          amount: 0.3
        }
      };
    },

    photosBeforeEnter(el) {
      const items = el.querySelectorAll(".photo");
      gsap.fromTo(
        items,
        { y: "100%" },
        { y: "0%", ...this.getCommonGsapValues() }
      );
    },

    photosLeave(el, done) {
      const items = el.querySelectorAll(".photo");
      gsap.fromTo(
        items,
        { y: "0%" },
        {
          y: "100%",
          ...this.getCommonGsapValues(),
          onComplete: done
        }
      );
    },

    selectedPhotoBeforeEnter(el) {
      const item = el.querySelectorAll(".__s-item");
      gsap.to(item, {
        duration: 0.7,
        y: "100%",
        ...this.getCommonGsapValues(),
        ease: "expo.in"
      });
    },

    selectedPhotoLeave(el, done) {
      const item = el.querySelectorAll(".__s-item");
      const tl = gsap.timeline({ onComplete: done });
      tl.to(item, {
        y: "0%",
        ...this.getCommonGsapValues()
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

  .photo {
    background-position: center;
    background-size: auto 100%;
    transition: background-size 0.7s ease-in-out;
  }

  > .photo:hover {
    filter: brightness(0.5);
    background-size: auto 120%;
  }
}

.selected-photo,
.photo {
  cursor: pointer;
  position: relative;
}
</style>
