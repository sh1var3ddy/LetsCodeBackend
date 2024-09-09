const NotImplemented = require('../errors/notimplemented.error');
const {ProblemService} = require('../services/index');
const {ProblemRepository} = require('../repositories/index');
const { StatusCodes } = require('http-status-codes');
const problemService = new ProblemService(new ProblemRepository())

function pingProblemController(req,res){
    return res.json({message:"Ping check from ping problem controller"});
}

async function addProblem(req,res,next){
    try{
        console.log("====== Add problem called inside controllers =====");
        const newproblem  = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message: 'Successfully created a new problem',
            error:{},  
            data:newproblem
        })
    }catch(error){
        next(error);
    }
}

function getProblem(req,res){
    try{
        throw new NotImplemented('getProblems');
    }catch(error){
        next(error);
    }
}

async function getProblems(req,res){
    try{
        const response  = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success:true,
            message: 'Successfully got all problems',
            error:{},  
            data:response
        })
    }catch(error){
        next(error);
    }
}
function updateProblem(req,res){
    try{
        throw new NotImplemented('updateProblem');
    }catch(error){
        next(error);
    }
}
function deleteProblem(req,res){
    try{
        throw new NotImplemented('deleteProblem');
    }catch(error){
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    pingProblemController
}