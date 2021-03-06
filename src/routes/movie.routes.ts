import express from "express";
import Movie from "../models/movie";
const movieRoutes = express.Router();

let movies: Movie[] = [
    {id: 1, title: "movie 1", year: 1999, animated: false},
    {id: 2, title: "movie 2", year: 2000, animated: true},
    {id: 3, title: "movie 3", year: 2001, animated: false},
    {id: 4, title: "movie 4", year: 2002, animated: false},
];

movieRoutes.get("/", function (req, res) {

    let minRatingMovie = req.query.minyear as String;
    let maxRatingMovie = req.query.maxyear as String;

    if (minRatingMovie && maxRatingMovie) {
        let filteredMovies:Movie[] = [];
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].year >= minRatingMovie && movies[i].year <= maxRatingMovie)
            movies.push(movies[i]);
        }
        res.json(filteredMovies);
    }
    else {
    res.json(movies);
    }
});

movieRoutes.get("/:id", function (req, res) {
 
    for (let i=0; i<movies.length; i++){
    if (parseInt(req.params.id) === movies[i].id) {
        res.json(movies[i]);
        break;
    }
}
    res.status(404);
    res.send({"error": "Movie with that id does not exist"});
});

export default movieRoutes;



