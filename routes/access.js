const express = require("express");
const router = express.Router();
const fs = require("fs");
const bodyParser = require("body-parser");
const { stringify } = require("querystring");

let postsArray = fs.readFile("posts/posts.json", "utf8", (err, data) => {
  if (err) throw err;
  postsArray = JSON.parse(data);
});

let usersArray = fs.readFile("users.json", "utf8", (err, data) => {
  console.log("loggy");
  if (err) throw err;
  usersArray = JSON.parse(data);
});

router.post("/:id/:username/delete", (req, res) => {
  console.log("entrance");
  const postIndex = req.body.itemNum;
  deletePost(postIndex, req.params.id);
  let cred = usersArray[req.params.id];
  let posts = postsArray[req.params.id];
  res.render("account", {
    cred,
    posts,
  });
});

//item from account.json form
router.post("/:id/:username", (req, res) => {
  console.log("NOPE");
  if (!postsSpace(req.params.id)) {
    console.log("something");
    let cred = usersArray[req.params.id];
    let posts = postsArray[req.params.id];
    res.render("account", {
      cred,
      posts,
    });
  } else {
    addPost(req.body.item, req.params.id);

    console.log("Should be after ADDpost");
    let cred = usersArray[req.params.id];
    let posts = postsArray[req.params.id];
    console.log(cred);
    console.log(posts);
    res.render("account", {
      cred,
      posts,
    });
  }
});

router.get("/:id/:username", (req, res) => {
  usersArray.push({ username: req.params.username, id: usersArray.length });
  let cred = usersArray[req.params.id];
  let posts = postsArray[req.params.id];
  res.render("account", {
    cred,
    posts,
  });
});
function deletePost(index, id) {
  console.log("before delte----");
  console.log(index);

  let tmpPosts = postsArray[id];
  let newJSON = "und";
  console.log("yuhhh" + index);
  console.log(index);
  index = parseInt(index);
  switch (index) {
    case 0:
      console.log("allGOOD");
      newJSON = {
        p1: "aeiou",
        p2: tmpPosts.p2,
        p3: tmpPosts.p3,
        p4: tmpPosts.p4,
        p5: tmpPosts.p5,
        p6: tmpPosts.p6,
        p7: tmpPosts.p7,
        p8: tmpPosts.p8,
        p9: tmpPosts.p9,
        p10: tmpPosts.p10,
      };
      break;
    case 1:
      newJSON = {
        p1: tmpPosts.p1,
        p2: "aeiou",
        p3: tmpPosts.p3,
        p4: tmpPosts.p4,
        p5: tmpPosts.p5,
        p6: tmpPosts.p6,
        p7: tmpPosts.p7,
        p8: tmpPosts.p8,
        p9: tmpPosts.p9,
        p10: tmpPosts.p10,
      };
      break;
    case 2:
      newJSON = {
        p1: tmpPosts.p1,
        p2: tmpPosts.p2,
        p3: "aeiou",
        p4: tmpPosts.p4,
        p5: tmpPosts.p5,
        p6: tmpPosts.p6,
        p7: tmpPosts.p7,
        p8: tmpPosts.p8,
        p9: tmpPosts.p9,
        p10: tmpPosts.p10,
      };
      break;
    case 3:
      newJSON = {
        p1: tmpPosts.p1,
        p2: tmpPosts.p2,
        p3: tmpPosts.p3,
        p4: "aeiou",
        p5: tmpPosts.p5,
        p6: tmpPosts.p6,
        p7: tmpPosts.p7,
        p8: tmpPosts.p8,
        p9: tmpPosts.p9,
        p10: tmpPosts.p10,
      };
      break;
    case 4:
      newJSON = {
        p1: tmpPosts.p1,
        p2: tmpPosts.p2,
        p3: tmpPosts.p3,
        p4: tmpPosts.p4,
        p5: "aeiou",
        p6: tmpPosts.p6,
        p7: tmpPosts.p7,
        p8: tmpPosts.p8,
        p9: tmpPosts.p9,
        p10: tmpPosts.p10,
      };
      break;
    case 5:
      newJSON = {
        p1: tmpPosts.p1,
        p2: tmpPosts.p2,
        p3: tmpPosts.p3,
        p4: tmpPosts.p4,
        p5: tmpPosts.p5,
        p6: "aeiou",
        p7: tmpPosts.p7,
        p8: tmpPosts.p8,
        p9: tmpPosts.p9,
        p10: tmpPosts.p10,
      };
      break;
    case 6:
      newJSON = {
        p1: tmpPosts.p1,
        p2: tmpPosts.p2,
        p3: tmpPosts.p3,
        p4: tmpPosts.p4,
        p5: tmpPosts.p5,
        p6: tmpPosts.p6,
        p7: "aeiou",
        p8: tmpPosts.p8,
        p9: tmpPosts.p9,
        p10: tmpPosts.p10,
      };
      break;
    case 7:
      newJSON = {
        p1: tmpPosts.p1,
        p2: tmpPosts.p2,
        p3: tmpPosts.p3,
        p4: tmpPosts.p4,
        p5: tmpPosts.p5,
        p6: tmpPosts.p6,
        p7: tmpPosts.p7,
        p8: "aeiou",
        p9: tmpPosts.p9,
        p10: tmpPosts.p10,
      };
      break;
    case 8:
      newJSON = {
        p1: tmpPosts.p1,
        p2: tmpPosts.p2,
        p3: tmpPosts.p3,
        p4: tmpPosts.p4,
        p5: tmpPosts.p5,
        p6: tmpPosts.p6,
        p7: tmpPosts.p7,
        p8: tmpPosts.p8,
        p9: "aeiou",
        p10: tmpPosts.p10,
      };
      break;
    case 9:
      newJSON = {
        p1: tmpPosts.p1,
        p2: tmpPosts.p2,
        p3: tmpPosts.p3,
        p4: tmpPosts.p4,
        p5: tmpPosts.p5,
        p6: tmpPosts.p6,
        p7: tmpPosts.p7,
        p8: tmpPosts.p8,
        p9: tmpPosts.p9,
        p10: "aeiou",
      };
      break;
    default:
      console.log("999");
  }
  postsArray[id] = newJSON;
  console.log("After delte----");
  console.log(postsArray[id]);
}
function addPost(post, id) {
  console.log("before addition - - - - - ");
  console.log(id);

  let tmpPosts = postsArray[id];
  let k = 99;
  let tmpHold = "und1";
  let newJSON = "VVVVV";
  console.log(tmpPosts);

  for (let i = 0; i < 10; i++) {
    switch (i) {
      case 0:
        tmpHold = tmpPosts.p1;
        break;
      case 1:
        tmpHold = tmpPosts.p2;
        break;
      case 2:
        tmpHold = tmpPosts.p3;
        break;
      case 3:
        tmpHold = tmpPosts.p4;
        break;
      case 4:
        tmpHold = tmpPosts.p5;
        break;
      case 5:
        tmpHold = tmpPosts.p6;
        break;
      case 6:
        tmpHold = tmpPosts.p7;
        break;
      case 7:
        tmpHold = tmpPosts.p8;
        break;
      case 8:
        tmpHold = tmpPosts.p9;
        break;
      case 9:
        tmpHold = tmpPosts.p10;
        break;
      default:
        tmpHold = "und2";
    }
    console.log(tmpHold);
    if (tmpHold == "aeiou") {
      k = i;
      break;
    }
  }
  console.log(k);
  switch (k) {
    case 0:
      console.log("ok");
      newJSON = {
        p1: post,
        p2: tmpPosts.p2,
        p3: tmpPosts.p3,
        p4: tmpPosts.p4,
        p5: tmpPosts.p5,
        p6: tmpPosts.p6,
        p7: tmpPosts.p7,
        p8: tmpPosts.p8,
        p9: tmpPosts.p9,
        p10: tmpPosts.p10,
      };
      break;
    case 1:
      newJSON = {
        p1: tmpPosts.p1,
        p2: post,
        p3: tmpPosts.p3,
        p4: tmpPosts.p4,
        p5: tmpPosts.p5,
        p6: tmpPosts.p6,
        p7: tmpPosts.p7,
        p8: tmpPosts.p8,
        p9: tmpPosts.p9,
        p10: tmpPosts.p10,
      };
      break;
    case 2:
      newJSON = {
        p1: tmpPosts.p1,
        p2: tmpPosts.p2,
        p3: post,
        p4: tmpPosts.p4,
        p5: tmpPosts.p5,
        p6: tmpPosts.p6,
        p7: tmpPosts.p7,
        p8: tmpPosts.p8,
        p9: tmpPosts.p9,
        p10: tmpPosts.p10,
      };
      break;
    case 3:
      newJSON = {
        p1: tmpPosts.p1,
        p2: tmpPosts.p2,
        p3: tmpPosts.p3,
        p4: post,
        p5: tmpPosts.p5,
        p6: tmpPosts.p6,
        p7: tmpPosts.p7,
        p8: tmpPosts.p8,
        p9: tmpPosts.p9,
        p10: tmpPosts.p10,
      };
      break;
    case 4:
      newJSON = {
        p1: tmpPosts.p1,
        p2: tmpPosts.p2,
        p3: tmpPosts.p3,
        p4: tmpPosts.p4,
        p5: post,
        p6: tmpPosts.p6,
        p7: tmpPosts.p7,
        p8: tmpPosts.p8,
        p9: tmpPosts.p9,
        p10: tmpPosts.p10,
      };
      break;
    case 5:
      newJSON = {
        p1: tmpPosts.p1,
        p2: tmpPosts.p2,
        p3: tmpPosts.p3,
        p4: tmpPosts.p4,
        p5: tmpPosts.p5,
        p6: post,
        p7: tmpPosts.p7,
        p8: tmpPosts.p8,
        p9: tmpPosts.p9,
        p10: tmpPosts.p10,
      };
      break;
    case 6:
      newJSON = {
        p1: tmpPosts.p1,
        p2: tmpPosts.p2,
        p3: tmpPosts.p3,
        p4: tmpPosts.p4,
        p5: tmpPosts.p5,
        p6: tmpPosts.p6,
        p7: post,
        p8: tmpPosts.p8,
        p9: tmpPosts.p9,
        p10: tmpPosts.p10,
      };
      break;
    case 7:
      newJSON = {
        p1: tmpPosts.p1,
        p2: tmpPosts.p2,
        p3: tmpPosts.p3,
        p4: tmpPosts.p4,
        p5: tmpPosts.p5,
        p6: tmpPosts.p6,
        p7: tmpPosts.p7,
        p8: post,
        p9: tmpPosts.p9,
        p10: tmpPosts.p10,
      };
      break;
    case 8:
      newJSON = {
        p1: tmpPosts.p1,
        p2: tmpPosts.p2,
        p3: tmpPosts.p3,
        p4: tmpPosts.p4,
        p5: tmpPosts.p5,
        p6: tmpPosts.p6,
        p7: tmpPosts.p7,
        p8: tmpPosts.p8,
        p9: post,
        p10: tmpPosts.p10,
      };
      break;
    case 9:
      newJSON = {
        p1: tmpPosts.p1,
        p2: tmpPosts.p2,
        p3: tmpPosts.p3,
        p4: tmpPosts.p4,
        p5: tmpPosts.p5,
        p6: tmpPosts.p6,
        p7: tmpPosts.p7,
        p8: tmpPosts.p8,
        p9: tmpPosts.p9,
        p10: post,
      };
      break;
    default:
      console.log("999");
  }
  postsArray[id] = newJSON;
  console.log("after addition  - - - -  - -  - - ");
  console.log(postsArray[id]);
}

function postsSpace(id) {
  if (postsArray[id].p10 == "aeiou") {
    return true;
  }
  return false;
}

module.exports = router;
