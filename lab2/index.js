const fs = require("fs");
const http = require("http");
const { scrape } = require("./scrape");

// const server = http.createServer((req, res) => {
//   fs.readdir(__dirname + "/news", (err, files) => {
//     if (err) {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.write("Error reading directory");
//       res.end();
//     } else {
//       res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
//       res.write(files.join("\n"));
//       res.end();
//     }
//   });
// });

// server.listen(3000, "localhost", function () {
//   console.log(
//     "... port %d in %s address",
//     server.address().port,
//     server.address().address
//   );
//   setInterval(scrape, 60 * 1000);
// });

scrape();
