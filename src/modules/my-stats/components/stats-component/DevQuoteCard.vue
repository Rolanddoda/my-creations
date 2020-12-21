<template>
  <Grid class="card">
    <CardSidebar @active="active = $event" />

    <Grid
      :class="{ active: !active || active === 'account' }"
      gtc="auto 1fr"
      gap="2rem"
      class="card-content"
    >
      <div class="card-layout"></div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="gradient">
            <stop offset="0%" stop-color="var(--color-stop-1)" />
            <stop offset="99%" stop-color="var(--color-stop-2)" />
          </linearGradient>
        </defs>

        <path
          fill="url(#gradient)"
          class="gradient-bg"
          fill-opacity="1"
          d="M0,64L34.3,74.7C68.6,85,137,107,206,112C274.3,117,343,107,411,122.7C480,139,549,181,617,213.3C685.7,245,754,267,823,250.7C891.4,235,960,181,1029,170.7C1097.1,160,1166,192,1234,186.7C1302.9,181,1371,139,1406,117.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>

      <div class="thumbnail">
        <v-img
          src="https://avatars0.githubusercontent.com/u/18482346?s=460&u=9edc330c7815a52c4438ba9827af194dde186bff&v=4"
        ></v-img>
      </div>

      <Grid align-items="center" class="text">
        <h2>Front End Developer's <span>Quote</span></h2>
        <blockquote>
          <p>
            Always code as if the guy who ends up maintaining your code will be
            a violent psychopath who knows where you live.
          </p>
        </blockquote>
      </Grid>
    </Grid>

    <StackOverflowCard :class="{ active: active === 'stackoverflow' }" />
    <GithubCard :class="{ active: active === 'github' }" />
    <DevtoCard :class="{ active: active === 'devto' }" />
  </Grid>
</template>

<script>
import CardSidebar from "./CardSidebar";
import StackOverflowCard from "./StackOverflowCard";
import GithubCard from "./GithubCard";
import DevtoCard from "./DevtoCard";

export default {
  components: {
    CardSidebar,
    StackOverflowCard,
    GithubCard,
    DevtoCard
  },

  data: () => ({
    active: null
  })
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Alegreya:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap");

.card {
  --color-stop-1: #68e4bc;
  --color-stop-2: #4ad0d1;
  width: 650px;
  border-radius: 10px;
  height: 250px;

  .card-content {
    width: inherit;
    height: inherit;
    padding: 2rem;
    z-index: 1;
    grid-area: 1 / -1;
    transition: transform 0.7s cubic-bezier(0.36, 0, 0.66, -0.56),
      opacity 0.6s cubic-bezier(0.36, 0, 0.66, -0.56);
    transform: translateY(-300%);
    opacity: 0;

    &.active {
      transform: translateY(0);
      opacity: 1;

      ~ .card-content {
        transform: translateY(300%);
      }
    }
  }

  .card-layout {
    position: absolute;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
    transform: scale(0);
    animation: scale-up 0.6s 1s cubic-bezier(0.45, 0, 0.55, 1) forwards;
  }

  svg {
    position: absolute;
    bottom: -10px;
    border-radius: 10px 20px 0 0;
    transform: translate(100%, 100%);
    animation: position-svg 1s 2.2s cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards;
  }

  .thumbnail {
    padding: 0.5rem;
    background: linear-gradient(to right, #68e4bc 0%, #4ad0d1 99%);
    border-radius: 10px;
    width: 185px;
    height: 185px;
    box-shadow: 5px -6px rgba(74, 208, 209, 0.5),
      -5px 6px rgba(74, 208, 209, 0.5);
    transform: translate(-150%, -150%);
    animation: position-thumbnail 1s 2.2s cubic-bezier(0.68, -0.6, 0.32, 1.6)
      forwards;
  }

  .text {
    transform: translate(150%, -150%);
    animation: position-quote 1s 2.2s cubic-bezier(0.68, -0.6, 0.32, 1.6)
      forwards;

    h2 {
      font-family: "Leckerli One", cursive;
      text-decoration: underline;
      text-align: center;
      color: #ffff38;

      span {
        background: linear-gradient(to right, #68e4bc 0%, #4ad0d1 99%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    blockquote {
      font-family: "Alegreya", serif;
      font-size: 1.2rem;
      padding: 0 3.5rem;
      text-align: center;
      color: #f9f9f9;

      p::before,
      p::after {
        content: "“";
        font-family: Georgia, sans-serif;
        font-size: 4rem;
        margin: -1rem 0 0 -2rem;
        position: absolute;
        opacity: 0.5;
      }

      p::after {
        content: "”";
        margin: -0.5rem 0.2rem;
      }
    }
  }
}

@keyframes scale-up {
  to {
    transform: scale(1);
  }
}

@keyframes position-svg {
  to {
    transform: translate(10px, 10px);
  }
}

@keyframes position-thumbnail {
  to {
    transform: translate(0, 0);
  }
}

@keyframes position-quote {
  to {
    transform: translate(0, 0);
  }
}

@media only screen and (max-width: 800px) {
  .card {
    width: 95%;
    height: 450px;
    margin: 0 auto 0 5%;

    .card-content {
      grid-template-columns: 1fr !important;
      justify-items: center;
      gap: 4px !important;
      transform: translateX(-100%);

      &.active {
        ~ .card-content {
          transform: translateX(100%);
        }
      }
    }
  }
}
</style>
