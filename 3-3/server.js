const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const posts = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
});

server.get("/", function (req, res) {
  const about = {
    avatar_company:
      "https://media-exp1.licdn.com/dms/image/C560BAQFU-ZKLLdANXg/company-logo_200_200/0?e=1609372800&v=beta&t=MVXb_ey8pT8NpMZXOJwMiY1QErQnxSCd7NEiiWPb9Rs",
    name_company: "Rocketseat",
    links: [
      { name: "Github", url: "https://github.com/Rocketseat" },
      {
        name: "Instragam",
        url: "https://www.instagram.com/rocketseat_oficial/",
      },
      { name: "Facebook", url: "https://www.facebook.com/rocketseat" },
    ],
  };
  return res.render("about", { about });
});

server.get("/courses", function (req, res) {
  return res.render("courses", { items: posts });
});

server.use(function (req, res) {
  res.status(404).render("not-found");
});

server.listen(5001, function () {
  console.log("server is running");
});
