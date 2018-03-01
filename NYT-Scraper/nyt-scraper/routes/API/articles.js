const router = require("express").Router();
const articleController = require("../../controller/articleController.js");

// Using router to put user on main view and also view articles pulled by ID

router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

//Remove and article

router.route("/:Id") 
  .delete(articleController.delete);

module.exports = router;