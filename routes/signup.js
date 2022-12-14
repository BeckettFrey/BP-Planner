const express = require("express");
const router = express.Router();
const fs = require("fs");
const bodyParser = require("body-parser");
const { stringify } = require("querystring");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res) => {
  if (nameAvailable(req.body.username)) {
    fs.writeFile(
      "users.json",
      JSON.stringify({ username: req.body.username, id: 0 }),
      function (err) {
        console.log(err);
      }
    );
    res.render("success");
  } else {
    res.render("nosuccess");
  }
  res.render("index");
});

function nameAvailable(userName) {
  return false;
}
module.exports = router;
