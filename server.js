const mongoose = require("mongoose");
const app = require("./app");


const dotenv = require("dotenv");
dotenv.config();

const source = process.env.DATABASE_LOCAL;
mongoose.connect(source, { useNewUrlParser: true })
    .then(() => {

        console.log("database connect succesfully")


    })
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`)


})