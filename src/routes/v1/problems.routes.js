const express = require('express');

const {problemController} = require("../../controllers/index")

const problemRouter = express.Router();


// `/ping is a very specific route, so it should be first.`
// `/ is less specific than /ping, so it should be next.`
problemRouter.get("/ping",problemController.pingProblemController);

problemRouter.get("/",problemController.getProblems);

problemRouter.get("/:id",problemController.getProblem);

problemRouter.post("/",problemController.addProblem);

problemRouter.delete("/:id",problemController.deleteProblem);

problemRouter.put("/:id",problemController.updateProblem);


module.exports = problemRouter