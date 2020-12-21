<template>
  <Grid gtc="auto 1fr" gap="2rem" class="card-content">
    <div class="thumbnail">
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M7.73 11.93C7.73 13.65 7.71 13.76 7.5 14C7.31 14.17 7.12 14.23 6.74 14.23L6.23 14.24L6.2 11.97L6.18 9.7H6.7C7.05 9.7 7.3 9.77 7.47 9.91C7.71 10.12 7.73 10.16 7.73 11.93M22 7.5V16.5C22 17.61 21.11 18.5 20 18.5H4C2.89 18.5 2 17.61 2 16.5V7.5C2 6.39 2.89 5.5 4 5.5H20C21.11 5.5 22 6.39 22 7.5M8.93 11.73C8.9 9.89 8.88 9.74 8.64 9.34C8.24 8.66 7.79 8.5 6.28 8.5H5V15.5H6.21C7.54 15.5 8.1 15.33 8.5 14.79C8.91 14.26 9 13.81 8.93 11.73M13.12 8.5H11.64C10.15 8.5 10.14 8.5 9.93 8.78S9.7 9.21 9.7 12V14.96L9.97 15.23C10.22 15.5 10.28 15.5 11.68 15.5H13.12V14.31L12.03 14.27L10.93 14.24V12.6L11.61 12.57L12.27 12.53V11.34H10.88V9.7H13.12V8.5M19 8.56C19 8.5 18.7 8.5 18.34 8.5L17.66 8.56L17.07 10.91C16.69 12.39 16.45 13.18 16.4 13.04C16.32 12.77 15.26 8.6 15.26 8.55C15.26 8.5 14.95 8.5 14.58 8.5H13.89L14.3 10.05C14.5 10.92 14.89 12.33 15.11 13.2C15.45 14.55 15.57 14.85 15.86 15.14C16.06 15.36 16.31 15.5 16.47 15.5C16.8 15.5 17.23 15.16 17.37 14.77C17.5 14.5 19 8.69 19 8.56Z"
        />
      </svg>
    </div>

    <div class="link-btn">
      <v-tooltip right color="primary">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            href="https://dev.to/rolanddoda"
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

    <Grid align-items="start" align-content="start" class="so-description">
      <h2 class="so-title">Dev.to</h2>

      <Grid gap="0.2rem" gtr="1fr 1fr" class="dev-cards">
        <a
          v-for="article of $store.state.devtoArticles"
          :key="article.id"
          :href="article.url"
          target="_blank"
          rel="noopener"
        >
          <v-card hover dark>
            <v-card-text class="subtitle-2 py-0 pt-2">
              {{ article.title }}
            </v-card-text>

            <v-card-actions class="pa-0">
              <v-list-item dense>
                <v-row dense align="center" justify="end">
                  <v-icon small class="mr-1">
                    mdi-heart
                  </v-icon>
                  <span class="subheading mr-2">{{
                    article.public_reactions_count
                  }}</span>

                  <span class="mr-1">·</span>
                  <v-icon small class="mr-1">
                    mdi-comment
                  </v-icon>
                  <span class="subheading mr-1">{{
                    article.comments_count
                  }}</span>

                  <span class="mr-1">·</span>
                  <v-icon small class="mr-1">
                    mdi-eye
                  </v-icon>
                  <span class="subheading mr-2">{{
                    Intl.NumberFormat().format(article.page_views_count)
                  }}</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </a>
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

    .dev-cards {
      font-size: 0.825rem;

      a {
        text-decoration: none;

        .v-card {
          background: linear-gradient(to right, #108dc7, #ef8e38);
        }
      }
    }
  }
}
</style>
