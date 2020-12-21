import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stackoverflow: null,
    devtoArticles: null
  },

  mutations: {
    setStackoverflowData: (state, payload) => (state.stackoverflow = payload),
    setDevtoData: (state, payload) => (state.devtoArticles = payload)
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
      axios
        .get("http://localhost:8080/api/articles/me/all/", {
          headers: { "api-key": process.env.VUE_APP_DEVTO }
        })
        .then(({ data: articles }) => {
          commit("setDevtoData", articles);
        });
    }
  }
});
