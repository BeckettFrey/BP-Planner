const express = require("express");
const router = express.Router();
const fs = require("fs");
const bodyParser = require("body-parser");
const { stringify } = require("querystring");

router.use(bodyParser.urlencoded({ extended: false }));

let usersArray = fs.readFile("users.json", "utf8", (err, data) => {
  console.log("inside");
  if (err) throw err;
  usersArray = JSON.parse(data);
});

router.post("/", (req, res) => {
  if (!serverSpace()) {
    res.render("fullserver");
  }
  if (nameAvailable(req.body.username)) {
    addUser(req.body.username);
    res.render("success");
  } else {
    res.render("nosuccess");
  }
});

function nameAvailable(userName) {
  if (usersArray.length > 10) {
    return false;
  }
  for (let i = 0; i < usersArray.length; i++) {
    if (usersArray[i].username == userName) {
      return false;
    }
  }
  return true;
}

function addUser(user) {
  usersArray.push({ username: user, id: usersArray.length });
  fs.writeFile("users.json", JSON.stringify(usersArray), function (err) {
    console.log(err);
  });
}
function serverSpace() {
  if (usersArray.length > 9) {
    return false;
  }
  return true;
}
module.exports = router;
