const film = require("../utils/films");

const pages = {
  getFilms: async (req, res) => {
    let title = req.params.title;
    const response = await film.getMovieByTitle(title);
    res.status(201).json(response);
  },
  notFound404: (req, res, next) => {
    return res.status(404).send({ message: "Route" + req.url + " Not found." });
  },
  notFound500: (req, res, next)=> {
    return res.status(500).send({ error: err });
  },
};

module.exports = pages;
