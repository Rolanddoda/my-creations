<template>
  <Grid gtc="auto 1fr" gap="2rem" class="card-content">
    <div class="thumbnail">
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M17.36,20.2V14.82H19.15V22H3V14.82H4.8V20.2H17.36M6.77,14.32L7.14,12.56L15.93,14.41L15.56,16.17L6.77,14.32M7.93,10.11L8.69,8.5L16.83,12.28L16.07,13.9L7.93,10.11M10.19,6.12L11.34,4.74L18.24,10.5L17.09,11.87L10.19,6.12M14.64,1.87L20,9.08L18.56,10.15L13.2,2.94L14.64,1.87M6.59,18.41V16.61H15.57V18.41H6.59Z"
        />
      </svg>
    </div>

    <div class="link-btn">
      <v-tooltip right color="primary">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            href="https://stackoverflow.com/users/6385184/roli-roli?tab=profile"
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
      <h1 class="so-title">Stackoverflow</h1>

      <Grid gap="0.5rem" justify-content="center">
        <Grid gtc="auto auto" justify-content="space-between" gap="1rem">
          <div class="so-legend">Reputation:</div>
          <div class="so-count">
            {{
              Intl.NumberFormat().format($store.state.stackoverflow.reputation)
            }}
          </div>
        </Grid>

        <Grid gtc="auto auto" justify-content="space-between" gap="1rem">
          <div class="so-legend">Impact:</div>
          <div class="so-count">~2.8m people reached</div>
        </Grid>

        <Grid gtc="auto auto" justify-content="space-between" gap="1rem">
          <div class="so-legend">Top tags:</div>
          <div class="so-count">
            {{ $store.state.stackoverflow.topTags }}
          </div>
        </Grid>

        <Grid gtc="auto auto" justify-content="space-between" gap="1rem">
          <div class="so-legend">Badges:</div>
          <div class="so-count">
            {{ $store.state.stackoverflow.badges.gold }} Gold,
            {{ $store.state.stackoverflow.badges.silver }} Silver,
            {{ $store.state.stackoverflow.badges.bronze }} Bronze
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
