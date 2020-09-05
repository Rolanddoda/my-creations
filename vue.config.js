module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/my-creations/" : "/",
  transpileDependencies: ["vuetify"],

  devServer: {
    clientLogLevel: "warn",
    overlay: false
  }
};
