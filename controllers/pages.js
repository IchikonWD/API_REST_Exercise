const film = require("../utils/films");

const pages = {
  getFilms: (req, res) => {
    let title = await req.params.id;
    const response = await film.getMovieByTitle(title);
    res.status(200).json(response);
  },
};

module.exports = pages;
