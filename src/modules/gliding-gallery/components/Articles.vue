<template>
  <div class="articles-wrapper">
    <nav class="prev-next-btn">
      <button
        id="prev"
        tabindex="-1"
        title="Previous"
        @click="$emit('send', 'PREV')"
      >
        &lt;
      </button>
      <button
        id="next"
        tabindex="-1"
        title="Next"
        @click="$emit('send', 'NEXT')"
      >
        &gt;
      </button>
    </nav>

    <div class="articles">
      <article
        v-for="(article, index) of images"
        :key="article.src"
        class="article"
        :data-key="index"
      >
        <h2 class="heading">{{ article.title }}</h2>
        <p class="paragraph">
          {{ article.description }}
        </p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.articles-wrapper {
  position: absolute;
  width: 40%;
  right: 5%;
  bottom: 0;

  > .prev-next-btn {
    position: absolute;
    right: 0;
    bottom: 100%;
    background: inherit;

    button {
      background: var(--purple);
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
        background: var(--gold);
        outline: none;
      }

      &:active {
        outline: none;
        transform: translateY(0.25em);
        transition-duration: 100ms;
      }
    }
  }

  > .articles {
    background: #493e56;
    color: white;
    display: flex;
    align-items: stretch;
    overflow: hidden;
  }

  .article {
    padding: 1.5rem;
    width: 100%;
    margin-right: -100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateX(-100%);
    transition: transform var(--duration) cubic-bezier(0.5, 0, 0.5, 1);

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--gold);
      opacity: 1;
      transition: opacity var(--duration) cubic-bezier(0.5, 0, 0.5, 1);
      z-index: 1;
    }

    &[data-active] ~ .article {
      transform: translateX(100%);
    }

    &[data-active] {
      transform: translateX(0%);

      &:before {
        opacity: 0;
      }
    }

    > .heading {
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

    > .paragraph {
      margin: 0;
      font-size: 0.7rem;
      line-height: 1.7;
    }
  }
}
</style>
