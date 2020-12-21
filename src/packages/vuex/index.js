import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import articles from "@/../devto-articles.json";
import { contributions } from "@/../gh-contributions.json";

Vue.use(Vuex);

function getGithubData() {
  return axios.get("https://api.github.com/users/Rolanddoda");
}

export default new Vuex.Store({
  state: {
    stackoverflow: null,
    devtoArticles: articles,
    github: null
  },

  mutations: {
    setStackoverflowData: (state, payload) => (state.stackoverflow = payload),
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

    async extractInfoFromGithub({ commit }) {
      const { data: githubData } = await getGithubData();
      const { followers, public_repos } = githubData;

      commit("setGithubData", {
        contributions,
        followers,
        publicRepos: public_repos
      });
    }
  }
});
