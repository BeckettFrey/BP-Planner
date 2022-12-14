const express = require("express");
const app = express();

app.listen(3001);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
const loginRouter = require("./routes/login");
app.use("/login", loginRouter);

const signupRouter = require("./routes/signup");
app.use("/signup", signupRouter);
