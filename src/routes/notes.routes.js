const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router();

// function myMidlleware(request, response, next) {
//     console.log("Você passou pelo Middleware");
    
//     next();
// }

const notesControlle = new NotesController();

notesRoutes.get("/", notesControlle.index);
notesRoutes.post("/:user_id", notesControlle.create);
notesRoutes.get("/:id", notesControlle.show);
notesRoutes.delete("/:id", notesControlle.delete);

module.exports = notesRoutes;