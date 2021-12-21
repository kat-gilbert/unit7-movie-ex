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
    res.json(movies);
});

movieRoutes.get("/:id", function (req, res) {
 
    // search array for id
    for (let i=0; i<movies.length; i++){
    if (parseInt(req.params.id) === movies[i].id) {
        res.json(movies[i]);
        break;
    }
}
    res.status(404);
    res.send({"error": "Movie does not exist"});
});

export default movieRoutes;



