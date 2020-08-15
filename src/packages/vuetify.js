import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#1D3557",
        secondary: "#457B9D",
        accent: "#A8DADC",
        error: "#E63946",
        info: "#F1FAEE"
      }
    }
  }
});
