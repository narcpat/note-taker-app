const router = require("express").Router();
const { json } = require("express/lib/response");
const fs = require("fs");
const path = require("path");

router.get("/notes", (req, res) => {
  fs.readFile(
    path.join(__dirname, "../../Develop/db/db.json"),
    "utf8",
    (err, data) => {
      if (err) throw err;
      let notes = JSON.parse(data);
      console.log(notes);
      res.json(notes);
    }
  );
});

router.post("/notes", (req, res) => {
  fs.readFile(
    path.join(__dirname, "../../Develop/db/db.json"),
    "utf8",
    (err, data) => {
      if (err) throw err;
      let notes = JSON.parse(data);
      res.json(notes);
      console.log(req.body);
      let callNotes = req.body;
      notes.push(callNotes);
      notes.forEach((element, i) => {
        element.id = i + 1;
      });

      console.log(notes);

      fs.writeFile(
        path.join(__dirname, "../../Develop/db/db.json"),
        JSON.stringify(notes),
        (err, data) => {
          if (err) throw err;
          res.json(notes);
        }
      );
    }
  );
});

module.exports = router;
