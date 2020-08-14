import Vue from "vue";
import App from "./App.vue";
import router from "./packages/router";
import store from "./packages/vuex";
import Chakra from "@chakra-ui/vue";

Vue.use(Chakra);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
