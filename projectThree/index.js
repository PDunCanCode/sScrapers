const fetch = require("node-fetch");
const cheerio = require("cheerio");
(async function () {
  const res = await fetch("https://www.investing.com/equities/tesla-motors");
  const text = await res.text();
  const found = text.includes("695.00");
  console.log(found);
})();
