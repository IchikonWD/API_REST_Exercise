const film = require("../utils/films");

const pages = {
  getFilms: async (req, res) => {
    let title = req.params.title;
    const response = await film.getMovieByTitle(title);
    res.status(201).json(response);
  },
  postFilms: async (req, res) => {
    let film = await req.body.title
    res.status(200).json({message: `Se ha guardado: ${film}`})    
  },
  putFilms: async (req, res) => {
    let film = await req.body.title
    res.status(200).json({id:"0", message: `Se ha actualizado ${film}`})    
  },
  deleteFilms: async (req, res) => {
    let film = await req.body.title
    res.status(200).json({id:"0", message: `Se ha borrado: ${film}`})    
  },
};

module.exports = pages;
