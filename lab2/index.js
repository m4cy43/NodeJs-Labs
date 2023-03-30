const fs = require("fs");
const http = require("http");
const path = require("path");
const { scrape } = require("./scrape");

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/news/")) {
    let fileName = req.url.split("/").pop();
    fileName = decodeURIComponent(fileName);
    const pathToNews = path.join(__dirname, "news", fileName);
    const text = fs.readFileSync(pathToNews, "utf8");
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(text);
  }
  fs.readdir(__dirname + "/news", (err, files) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.write("Error reading directory");
      res.end();
    } else {
      let list = [];
      for (let file of files) {
        list.push(`<li><a href="/news/${file}">${file}</a></li>`);
      }
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(`<ul>${list.join("")}</ul>`);
    }
  });
});

server.listen(3000, "localhost", function () {
  console.log(
    "... port %d in %s address",
    server.address().port,
    server.address().address
  );
  setInterval(scrape, 60 * 1000);
});
