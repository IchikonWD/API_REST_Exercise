const fetch = require("node-fetch");
const key = process.env.API_KEY

const film = {
    getMovieByTitle: async (title) => {
        const res = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${key}&`)
        const data = await res.json()
        console.log(data);
        return data
    }
};
module.exports = film