const { getFromDomain, getNewsText } = require("./service");
const { JSDOM } = require("jsdom");
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
    let dom = new JSDOM(res);
    let titles = dom.window.document.querySelectorAll(".entry-title");
    for (let title of titles) {
      newsTitles.push(title.textContent);
    }
    let href = dom.window.document.querySelectorAll(".entry-title a");
    for (let hr of href) {
      urls.push(hr.href);
    }

    for (let i = 0; i < newsTitles.length; i++) {
      getNewsText(urls[i]).then((res) => {
        let dom = new JSDOM(res);
        let paragraphs = dom.window.document.querySelectorAll("article p");
        let desc = "";
        for (let p of paragraphs) {
          desc = desc + p.textContent + "\n";
        }

        const filename = path.join(
          newsDir,
          `${newsTitles[i].substring(0, 30)}....txt`
        );
        fs.writeFileSync(filename, desc);
      });
    }
  });
};

module.exports = {
  scrape,
};
