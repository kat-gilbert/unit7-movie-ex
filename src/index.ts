import express from "express";
import movieRoutes from "../src/routes/movie.routes";

const app = express();
const port = 3000; 

app.use(express.json());
app.use("/api/movies", movieRoutes);

app.listen(port, function(){
    console.log(`Listening on ${port}`);
});