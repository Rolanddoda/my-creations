require("dotenv").config();
const fs = require("fs");
const execa = require("execa");
const axios = require("axios");
const moment = require("moment");
const { parse } = require("node-html-parser");

const devtoKey = process.env.VUE_APP_DEVTO;

function parseAndGetContributions(html) {
  const doc = parse(html);
  const text = doc.querySelector(".js-yearly-contributions h2").innerHTML;
  return text
    .trim()
    .split("contributions")[0]
    .trim();
}

async function fetchAndStoreFromApis() {
  const { data: articles } = await axios.get(
    "https://dev.to/api/articles/me/all",
    {
      headers: {
        "api-key": devtoKey
      }
    }
  );

  await fs.writeFile("devto-articles.json", JSON.stringify(articles), err => {
    if (err) throw err;
  });

  const todaysDate = moment().format("YYYY-MM-DD");

  const myGhProfileHtml = await axios.get(
    `https://github.com/users/Rolanddoda/contributions?from=2020-12-01&to=${todaysDate}`
  );

  const contributions = parseAndGetContributions(myGhProfileHtml.data);

  await fs.writeFile(
    "gh-contributions.json",
    JSON.stringify({ contributions }),
    err => {
      if (err) throw err;
    }
  );

  execa.command("node scripts/gh-pages-deploy.js", { stdio: "inherit" });
}

fetchAndStoreFromApis();
