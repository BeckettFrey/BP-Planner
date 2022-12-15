const express = require("express");
const router = express.Router();
const fs = require("fs");
const bodyParser = require("body-parser");
const { stringify } = require("querystring");

router.use(bodyParser.urlencoded({ extended: false }));

let usersArray = [];

fs.readFile("users.json", "utf8", (err, data) => {
  console.log("inside");
  if (err) throw err;
  usersArray = JSON.parse(data);
});
router.get("/", (req, res) => {
  res.render("index");
});
router.post("/", (req, res) => {
  if (accountExists(req.body.username)) {
    console.log(req.body.username);
    console.log(getID(req.body.username));
    res.redirect("/login/access/" + getID(req.body.username));
  } else {
    res.send("Account does not exist.");
  }
});
function accountExists(name) {
  for (let i = 0; i < usersArray.length; i++) {
    if (usersArray[i].username == name) {
      return true;
    }
  }
  return false;
}
function getID(name) {
  console.log(usersArray);
  for (let i = 0; i < usersArray.length; i++) {
    if (usersArray[i].username == name) {
      console.log(usersArray[i].username);
      return usersArray[i].id;
    }
  }
  return 88;
}
const accessRouter = require("./access");
router.use("/access", accessRouter);

module.exports = router;
