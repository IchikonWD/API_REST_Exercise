const router = require("express").Router();
const pages = require("../controllers/pages")

router.get("/films", pages.getFilms)