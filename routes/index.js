const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/users/cool/", function (req, res, next) {
	res.render("cool", { title: "Cool" });
});

module.exports = router;
