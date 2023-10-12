const { Router } = require("express");

const UsersController = require("..//controllers/UsersController");

const userRoutes = Router();

function myMidlleware(request, response, next) {
    console.log("Você passou pelo Middleware");
    
    next();
}

const usersControlle = new UsersController();

userRoutes.post("/", usersControlle.create);
userRoutes.put("/:id", usersControlle.update);

module.exports = userRoutes;