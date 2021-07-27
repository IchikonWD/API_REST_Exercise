const film = require("../utils/films");

const pages = {
  getFilms: async (req, res) => {
    let title = req.params.id;
    const response = await film.getMovieByTitle(title);
    res.status(201).json(response);
  },
};

module.exports = pages;
