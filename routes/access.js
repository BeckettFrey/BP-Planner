const express = require("express");
const router = express.Router();
const fs = require("fs");
const bodyParser = require("body-parser");
const { stringify } = require("querystring");

let usersArray = fs.readFile("users.json", "utf8", (err, data) => {
  console.log("inside");
  if (err) throw err;
  usersArray = JSON.parse(data);
});

//item from account.json form
router.post("/:id", (req, res) => {
  let cred = usersArray[req.params.id];
  res.render("account", {
    cred,
  });
});

router.get("/:id", (req, res) => {
  ident = req.params.id;
  let cred = usersArray[req.params.id];
  res.render("account", {
    cred,
  });
});

function addPost(post, id) {
  return -1;
}

module.exports = router;
