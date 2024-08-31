const {StatusCodes} = require('http-status-codes');
const NotImplemented = require('../errors/notimplemented.error');

function pingProblemController(req,res){
    return res.json({message:"Ping check from ping problem controller"});
}

function addProblem(req,res,next){
    try{
        throw new NotImplemented('addProblem');
    }catch(error){
        next(error);
    }
}

function getProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"Not implemented"});
}

function getProblems(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"Not implemented"});
}
function updateProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"Not implemented"});
}
function deleteProblem(req,res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({message:"Not implemented"});
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    pingProblemController
}