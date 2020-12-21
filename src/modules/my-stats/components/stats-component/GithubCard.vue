<template>
  <Grid gtc="auto 1fr" gap="2rem" class="card-content">
    <div class="thumbnail">
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
        />
      </svg>
    </div>

    <div class="link-btn">
      <v-tooltip right color="primary">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            href="https://github.com/Rolanddoda"
            fab
            dark
            small
            color="#68e4bc"
            target="_blank"
            rel="noopener"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </template>
        <span>See profile</span>
      </v-tooltip>
    </div>

    <Grid
      gap="16px"
      align-items="start"
      align-content="start"
      class="so-description"
    >
      <h1 class="so-title">Github</h1>

      <Grid gap="0.5rem" justify-content="center">
        <Grid gtc="auto auto" justify-content="space-between" gap="1rem">
          <div class="so-legend">Contributions from 2020:</div>
          <div class="so-count">
            {{ Intl.NumberFormat().format($store.state.github.contributions) }}
          </div>
        </Grid>

        <Grid gtc="auto auto" justify-content="space-between" gap="1rem">
          <div class="so-legend">Popular package:</div>
          <div class="so-count">
            <a
              href="https://github.com/Rolanddoda/vue-cli-plugin-gh-pages-auto-deploy"
              style="color: currentColor"
              target="_blank"
              rel="noopener"
            >
              gh-pages-auto-deploy
            </a>
          </div>
        </Grid>

        <Grid gtc="auto auto" justify-content="space-between" gap="1rem">
          <div class="so-legend">Followers:</div>
          <div class="so-count">
            {{ $store.state.github.followers }}
          </div>
        </Grid>

        <Grid gtc="auto auto" justify-content="space-between" gap="1rem">
          <div class="so-legend">Public repos:</div>
          <div class="so-count">
            {{ $store.state.github.publicRepos }}
          </div>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Alegreya:wght@500&display=swap");

.card-content {
  border-radius: 10px;
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);

  .link-btn {
    position: absolute;
    right: -10px;
    top: -10px;
  }

  .thumbnail {
    padding: 0.5rem;
    background: linear-gradient(to right, #68e4bc 0%, #4ad0d1 99%);
    border-radius: 10px;
    width: 185px;
    height: 185px;
    box-shadow: 5px -6px rgba(74, 208, 209, 0.5),
      -5px 6px rgba(74, 208, 209, 0.5);
  }

  .so-description {
    font-family: "Alegreya", serif;

    .so-title {
      font-family: "Leckerli One", cursive;
      background: linear-gradient(to right, #68e4bc 0%, #4ad0d1 99%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
    }
  }
}
</style>
