const router = require("express").Router();
const articleRoutes = require("./articles");


///Using router to view articles in one path

router.use("/articles", articleRoutes);

module.exports = router;