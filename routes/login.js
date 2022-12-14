const express = require("express");
const router = express.Router();
const fs = require("fs");
const bodyParser = require("body-parser");
const { stringify } = require("querystring");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
