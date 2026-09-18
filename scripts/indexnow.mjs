// Tells Bing, Seznam and other IndexNow engines about every URL in the live sitemap.
// Run after a deploy: `npm run indexnow`.
const host = "www.otevriauto.cz";
const key = "9bb4b5bdadf1dc57debaec794245cbd0";

const sitemap = await (await fetch(`https://${host}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
});

console.log(`IndexNow: ${response.status} ${response.statusText} (${urlList.length} URLs)`);
