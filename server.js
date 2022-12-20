const http = require("http");
const fs = require("fs");
const url = require("url");
const PORT = process.env.PORT || 3000



const dataset = {
  locations: [
    "a roller skating rink",
    "an amusement park",
    "an abandoned mine",
    "an abandoned mall",
    "a local diner",
    "a religious gathering place",
    "a sports match",
    "a high school dance",
    "a movie theater",
    "a nature preserve",
    "a thrift store",
    "a boba shop",
    "a community pool",
    "a courthouse",
    "a hospital",
    "your bedroom",
    "a bank",
    "a community pool",
  ],
  companions: [
    "alone",
    "with a lover",
    "with a parent/caregiver",
    "with a sibling",
    "with a friend",
    "with a hater",
    "with no one",
    "with a mangager",
    "with a partner",
  ],

  missions: [
    "revenge",
    "power",
    "wealth",
    "fame",
    "abundance",
    "success",
    "happiness",
    "love",
    "joy",
    "friendship",
    "peace",
    "retribution",
    "judgement",
    "release",
    "fame",
    "protection",
    "rebirth",
    "chaos",
    "anarchy",
    "isolation",
    "solitude",
    "greed",
    "death",
    "violence",
    "prestige",
  ],
};

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
   } else if (req.url == "/api") {
    // res.writeHead(200, { "Content-Type": "application/json" });
    res.end((dataset));
  } else if (req.url == "/css/style.css") {
    fs.readFile("css/style.css", function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (req.url == "/js/main.js") {
    fs.readFile("js/main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  }  
  

});

server.listen(PORT);
