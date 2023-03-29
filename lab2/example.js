const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

const newsDir = path.join(__dirname, "news");

// Create the news directory if it doesn't exist
if (!fs.existsSync(newsDir)) {
  fs.mkdirSync(newsDir);
}

async function scrapeNews() {
  try {
    const response = await axios.get("https://example.com/");
    const $ = cheerio.load(response.data);

    const newsTitles = [];

    $("html").each((i, elem) => {
      newsTitles.push($(elem).text());
    });

    // Save each news title in a separate file
    for (let i = 0; i < newsTitles.length; i++) {
      const filename = path.join(newsDir, `news-${i + 1}.txt`);
      fs.writeFileSync(filename, newsTitles[i]);
    }

    console.log("Scraped news titles:", newsTitles);
  } catch (error) {
    console.error("Error while scraping:", error);
  }
}

// Call the scrapeNews function once a minute
setInterval(scrapeNews, 60 * 1000);
