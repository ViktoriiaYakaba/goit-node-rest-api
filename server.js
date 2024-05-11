const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST = "mongodb+srv://Viktoriia:Vika1111@cluster0.ufwzkax.mongodb.net/";

mongoose.set('strictQuery', true)

mongoose.connect(DB_HOST)
    .then(() => app.listen(3000))
    .catch(error => {
        console.log(error.message);
        process.exit()
    });