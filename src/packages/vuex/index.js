import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import moment from "moment";

Vue.use(Vuex);

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

function parseAndGetContributions(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html"); //returns an HTMLDocument, which also is a Document.
  const text = doc.body.querySelector(".js-yearly-contributions h2")
    .textContent;
  return text.trim().split("contributions")[0];
}

function getGithubData() {
  return axios.get("https://api.github.com/users/Rolanddoda", {
    headers: {
      Accept: "Accept: application/vnd.github.v3+json"
    }
  });
}

export default new Vuex.Store({
  state: {
    stackoverflow: null,
    devtoArticles: null,
    github: null
  },

  mutations: {
    setStackoverflowData: (state, payload) => (state.stackoverflow = payload),
    setDevtoData: (state, payload) => (state.devtoArticles = payload),
    setGithubData: (state, payload) => (state.github = payload)
  },

  actions: {
    getStackoverflowData({ commit }) {
      Promise.all([
        axios.get(
          "https://api.stackexchange.com/2.2/users/6385184/top-tags?pagesize=6&site=stackoverflow&filter=!4(b760c_70fDlY1F1"
        ),
        axios.get(
          "https://api.stackexchange.com/2.2/users/6385184?order=desc&sort=reputation&site=stackoverflow&filter=!LnOc*kSGImRnIS(7WOjCjN"
        )
      ]).then(([res1, res2]) => {
        console.log({ res2 });
        const data = {
          topTags: res1.data.items
            .filter(item => item.tag_name !== "post")
            .map(item => item.tag_name)
            .join(", "),
          badges: res2.data.items[0].badge_counts,
          reputation: res2.data.items[0].reputation,
          profileViews: res2.data.items[0].view_count
        };

        commit("setStackoverflowData", data);
      });
    },

    getDevtoArticles({ commit }) {
      axiosInstance
        .get("https://dev.to/api/articles/me/all", {
          headers: {
            "api-key": process.env.VUE_APP_DEVTO
          }
        })
        .then(({ data: articles }) => {
          commit("setDevtoData", articles);
        });
    },

    async extractInfoFromGithub({ commit }) {
      const todaysDate = moment().format("YYYY-MM-DD");

      axios
        .get(
          `https://github.com/Rolanddoda?tab=overview&from=2020-12-01&to=${todaysDate}`
        )
        .then(async res => {
          const contributions = parseAndGetContributions(res.data);
          const { data: githubData } = await getGithubData();
          const { followers, public_repos } = githubData;

          commit("setGithubData", {
            contributions,
            followers,
            publicRepos: public_repos
          });
        });
    }
  }
});
