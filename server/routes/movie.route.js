const MovieController = require("../controllers/movie.controller");

module.exports = (app) => {
    app.get("/api/movies", MovieController.getAll);
    app.post("/api/movies",MovieController.create);
    // :id can be whatever just a param var
    app.get("/api/movies/:id", MovieController.getOne);
    app.put("/api/movies/:id", MovieController.update);
    app.delete("/api/movies/:id", MovieController.delete);
}