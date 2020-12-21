require("dotenv").config();
const fs = require("fs");
const execa = require("execa");
const axios = require("axios");

const devtoKey = process.env.VUE_APP_DEVTO;

async function getAndStoreArticles() {
  const { data: articles } = await axios.get(
    "https://dev.to/api/articles/me/all",
    {
      headers: {
        "api-key": devtoKey
      }
    }
  );

  fs.writeFile("devto-articles.json", JSON.stringify(articles), err => {
    if (err) throw err;
    else {
      execa.command("node scripts/gh-pages-deploy.js", { stdio: "inherit" });
    }
  });
}

getAndStoreArticles();
