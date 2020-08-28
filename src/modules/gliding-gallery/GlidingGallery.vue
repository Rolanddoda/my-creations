<template>
  <div id="app" data-state="0">
    <div class="ui-big-images">
      <div class="ui-big-image" data-key="0">
        <img src="https://picsum.photos/1200/1200/?image=1005" alt="" />
      </div>
      <div class="ui-big-image" data-key="1">
        <img src="https://picsum.photos/1200/1200/?image=804" alt="" />
      </div>
      <div class="ui-big-image" data-key="2">
        <img src="https://picsum.photos/1200/1200/?image=838" alt="" />
      </div>
      <div class="ui-big-image" data-key="3">
        <img src="https://picsum.photos/1200/1200/?image=832" alt="" />
      </div>
      <div class="ui-big-image" data-key="4">
        <img src="https://picsum.photos/1200/1200/?image=836" alt="" />
      </div>
      <div class="ui-big-image" data-key="5">
        <img src="https://picsum.photos/1200/1200/?image=823" alt="" />
      </div>
    </div>
    <div class="ui-thumbnails">
      <div class="ui-thumbnail" tabindex="-1" data-key="0" @click="send(0)">
        <img src="https://picsum.photos/1200/1200/?image=1005" alt="" />
        <div class="ui-cuticle" data-flip-key="cuticle"></div>
      </div>
      <div class="ui-thumbnail" tabindex="-1" data-key="1" @click="send(1)">
        <img src="https://picsum.photos/1200/1200/?image=804" alt="" />
        <div class="ui-cuticle" data-flip-key="cuticle"></div>
      </div>
      <div class="ui-thumbnail" tabindex="-1" data-key="2" @click="send(2)">
        <img src="https://picsum.photos/1200/1200/?image=838" alt="" />
        <div class="ui-cuticle" data-flip-key="cuticle"></div>
      </div>
      <div class="ui-thumbnail" tabindex="-1" data-key="3" @click="send(3)">
        <img src="https://picsum.photos/1200/1200/?image=832" alt="" />
        <div class="ui-cuticle" data-flip-key="cuticle"></div>
      </div>
      <div class="ui-thumbnail" tabindex="-1" data-key="4" @click="send(4)">
        <img src="https://picsum.photos/1200/1200/?image=836" alt="" />
        <div class="ui-cuticle" data-flip-key="cuticle"></div>
      </div>
      <div class="ui-thumbnail" tabindex="-1" data-key="5" @click="send(5)">
        <img src="https://picsum.photos/1200/1200/?image=823" alt="" />
        <div class="ui-cuticle" data-flip-key="cuticle"></div>
      </div>
    </div>
    <div class="ui-content">
      <nav class="ui-nav">
        <button id="prev" tabindex="-1" title="Previous" @click="send('PREV')">
          &lt;
        </button>
        <button id="next" tabindex="-1" title="Next" @click="send('NEXT')">
          &gt;
        </button>
      </nav>

      <div class="ui-articles">
        <article class="ui-article" data-key="0">
          <h2 class="ui-heading">Stephen Shaw</h2>
          <p class="ui-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            cupiditate assumenda nemo delectus totam atque quas suscipit dicta.
          </p>
        </article>
        <article class="ui-article" data-key="1">
          <h2 class="ui-heading">David Khourshid</h2>
          <p class="ui-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            sapiente soluta iusto molestias ullam.
          </p>
        </article>
        <article class="ui-article" data-key="2">
          <h2 class="ui-heading">Coding Compadre</h2>
          <p class="ui-paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </article>
        <article class="ui-article" data-key="3">
          <h2 class="ui-heading">Boolean Buddy</h2>
          <p class="ui-paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </article>
        <article class="ui-article" data-key="4">
          <h2 class="ui-heading">Animation Amigo</h2>
          <p class="ui-paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            exercitationem voluptatibus
          </p>
        </article>
        <article class="ui-article" data-key="5">
          <h2 class="ui-heading">Keyframe Companion</h2>
          <p class="ui-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            soluta reprehenderit, ut doloribus corrupti
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Flipping from "flipping/dist/flipping.web";

const flipping = new Flipping();
let activeBoxIndex = 0;
let state = {
  photo: 0
};

export default {
  data: () => ({
    flipping: null
  }),

  mounted() {
    this.send(0);
  },

  methods: {
    changeActive(box) {
      const flipping = new Flipping();
      flipping.read();
      const boxes = this.$el.querySelectorAll(".ui-thumbnail");
      boxes[activeBoxIndex].removeAttribute("data-active");
      boxes[box].setAttribute("data-active", "");
      activeBoxIndex = box;
      flipping.flip();
    },

    send(event) {
      const elImages = Array.from(document.querySelectorAll(".ui-big-image"));
      // read cuticle positions
      flipping.read();

      const elActives = document.querySelectorAll("[data-active]");

      Array.from(elActives).forEach(el => el.removeAttribute("data-active"));

      switch (event) {
        case "PREV":
          state.photo--;
          // Math.max(state.photo - 1, 0);
          break;
        case "NEXT":
          state.photo++;
          // Math.min(state.photo + 1, elImages.length - 1);
          break;
        default:
          state.photo = +event;
          break;
      }

      var len = elImages.length;
      // Loop Around
      //state.photo = ( ( state.photo % len) + len ) % len;
      state.photo = Math.max(0, Math.min(state.photo, len - 1));

      Array.from(
        document.querySelectorAll(`[data-key="${state.photo}"]`)
      ).forEach(el => {
        el.setAttribute("data-active", true);
      });

      // execute the FLIP animation
      flipping.flip();
    }
  }
};
</script>

<style lang="scss" scoped>
$gold: #d4a12d;
$purple: #493e56;
$duration: 0.7s;
$easing: cubic-bezier(0.25, 0, 0.1, 1);

img {
  max-width: 100%;
}

#app {
  width: 90%;
  height: 85%;
  overflow: hidden;
}

.ui-big-images {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
}

.ui-big-image {
  width: 100%;
  margin-right: -100%;

  img {
    object-fit: cover;
    object-position: center 20%;
    @media (max-height: 600px) {
      object-position: center center;
    }
    width: 100%;
    height: 100%;
    display: block;
  }
}

.ui-thumbnails {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem calc(45% + 0.5rem) 0 1rem;
}

.ui-thumbnail {
  display: block;
  margin-right: 0.5rem;
  padding: 0.5rem 0;
  cursor: pointer;
}

.ui-cuticle {
  background-color: $gold;
  position: absolute;
  bottom: 0;
  height: 0.25rem;
  width: 100%;
}

.ui-thumbnail > img {
  width: auto;
}

.ui-content {
  position: absolute;
  width: 40%;
  right: 5%;
  bottom: 0;
}

.ui-articles {
  background: #493e56;
  color: white;
  display: flex;
  align-items: stretch;
  overflow: hidden;
}

.ui-article {
  padding: 1.5rem;
  width: 100%;
  margin-right: -100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.ui-paragraph {
  margin: 0;
  font-size: 0.7rem;
  line-height: 1.7;
}

.ui-nav {
  position: absolute;
  right: 0;
  bottom: 100%;
  background: inherit;

  button {
    background: $purple;
    border: none;
    appearance: none;
    padding: 0.5em;
    width: 2em;
    color: #fff;
    font-family: monospace;
    transition: inherit;

    transition-duration: 300ms;
    &:hover,
    &:focus {
      background: $gold;
      outline: none;
    }

    &:active {
      outline: none;
      transform: translateY(0.25em);
      transition-duration: 100ms;
    }
  }
}

.ui-heading {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: normal;

  &:before {
    content: "Animator";
    font-size: 0.5rem;
    text-transform: uppercase;
    display: block;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
  }
}

/* ---------------------------------- */

.ui-big-image {
  opacity: 0;
  transform: translateX(-100%);

  img {
    transform: scale(0.85);
  }
}

.ui-big-image[data-active] ~ .ui-big-image {
  transform: translateX(100%);
}

.ui-big-image[data-active] {
  opacity: 1;
  transform: translateX(0%);
  img {
    transform: scale(1);
  }
}

/* ---------------------------------- */

.ui-article {
  transform: translateX(-100%);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $gold;
    opacity: 1;
    transition-duration: $duration / 2;
    z-index: 1;
  }
}

.ui-article[data-active] ~ .ui-article {
  transform: translateX(100%);
}

.ui-article[data-active] {
  transform: translateX(0%);

  &:before {
    opacity: 0;
  }
}

/* ---------------------------------- */

.ui-thumbnail {
  > img {
    filter: grayscale(100%);
    transition-duration: $duration / 2;
  }

  &:active {
    > img {
      transform: scale(0.9);
      transition-duration: 100ms;
    }
  }

  &:focus {
    outline: none;
  }
}

.ui-cuticle {
  display: none;
}

.ui-thumbnail {
  &[data-active],
  &:hover {
    > img {
      filter: grayscale(0%);
    }
  }

  &[data-active] .ui-cuticle {
    display: block;
  }
}

/* ---------------------------------- */

*,
*:before,
*:after {
  box-sizing: border-box;
  position: relative;
  transition: transform $duration cubic-bezier(0.5, 0, 0.5, 1),
    opacity $duration cubic-bezier(0.5, 0, 0.5, 1),
    filter $duration cubic-bezier(0.5, 0, 0.5, 1);
}
</style>
