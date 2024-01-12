import express from "express";

const app = express();



app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Us</h1>");
});


app.listen(3000, () => {
    console.log("Up and running.");
});