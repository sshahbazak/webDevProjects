import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var name

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    name: name
  });
});

app.post("/submit", (req, res) => {
  res.render("index.ejs",{
    name: req.body['fName']
  });
  console.log(name);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
