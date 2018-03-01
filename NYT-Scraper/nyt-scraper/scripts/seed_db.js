const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// Initialize connection to MongoDB

mongoose.connect("mongodb://localhost/nyt-scraper", {
    useMongoClient: true
}
);

db.Articles 
    .remove({})
    .then(() => db.Articles.create(article))
    .then(data => {
        console.log(data.InsertedIds.length + "articles added");
    })
    .catch(err =>{

        console.error(err);
        console.log(err);

    })