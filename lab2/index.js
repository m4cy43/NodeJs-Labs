const { getFromDomain } = require("./service");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

const newsDir = path.join(__dirname, "news");
if (!fs.existsSync(newsDir)) {
  fs.mkdirSync(newsDir);
}

const newsTitles = [];

getFromDomain().then((res) => {
  let $ = cheerio.load(res);
  let $article = $("article");
  $article.each((i, el) => {
    newsTitles.push($(el).find("h4").text().trim());
  });

  for (let title of newsTitles) {
    const filename = path.join(newsDir, `${title}.txt`);
    fs.writeFileSync(filename, title);
  }
});
