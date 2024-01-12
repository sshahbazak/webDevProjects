import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {

    const today = new Date();
    const day = today.getDay();


    let type = "a weekday";
    let adv = "it's time to work hard";

    if (today.getDay() === 0 || today.getDay() === 6){
        type = "the weekend";
        adv = "it's time to have fun";
        }

    res.render("index.ejs", {
        dayType: type,
        advice: adv
    });


    
    //  else {
    //     res.send("<h1>Hey! It's the weekday, it's time to work hard!</h1>");
    // }
});








app.listen(port, (req, res) =>{
    console.log("Listeing on port: " +port);
});