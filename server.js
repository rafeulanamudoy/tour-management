const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv").config();
const colors = require("colors");

mongoose.connect(process.env.DATABASE_LOCAL)
    .then(() => {

        console.log("database connect succesfully".green)
    })
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})