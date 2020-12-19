const fetch = require("node-fetch");

(async function () {
  const res = await fetch("https://explodingtopics.com/topics-this-month");
  const text = await res.text();
  const found = text.toLowecase().includes("ancestral");
  console.log({ found });
})();
