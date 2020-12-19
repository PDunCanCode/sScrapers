const fetch = require("node-fetch");

(async function () {
  const res = await fetch("https://news.ycombinator.com/");
  const text = await res.text();
  console.log({ text });
})();
