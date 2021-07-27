const router = require("express").Router();
const pages = require("../controllers/pages");

router.get("/films/:title?", pages.getFilms);
router.post("/films/", pages.postFilms)
router.put("/films/", pages.putFilms)
router.delete("/films/", pages.deleteFilms)



module.exports = router;
