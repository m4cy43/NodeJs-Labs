const { getFromDomain, getNewsText } = require("./service");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

const scrape = () => {
  const newsDir = path.join(__dirname, "news");
  if (!fs.existsSync(newsDir)) {
    fs.mkdirSync(newsDir);
  }

  const newsTitles = [];
  const urls = [];

  getFromDomain().then((res) => {
    let $ = cheerio.load(res);
    let $article = $("article");
    $article.each((i, el) => {
      newsTitles.push($(el).find("h4").text());
      urls.push($(el).find("h4").find("a").attr("href"));
    });

    for (let i = 0; i < newsTitles.length; i++) {
      getNewsText(urls[i]).then((res) => {
        let $$ = cheerio.load(res);
        let $$article = $$("article").find("p").text();

        const filename = path.join(newsDir, `${newsTitles[i].trim()}.txt`);
        fs.writeFileSync(filename, $$article);
      });
    }
  });
};

module.exports = {
  scrape,
};
