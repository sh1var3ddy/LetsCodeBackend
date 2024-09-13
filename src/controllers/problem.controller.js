const NotImplemented = require('../errors/notimplemented.error');
const {ProblemService} = require('../services/index');
const {ProblemRepository} = require('../repositories/index');
const { StatusCodes } = require('http-status-codes');
const problemService = new ProblemService(new ProblemRepository())
const logger = require("../config/logger.config")
function pingProblemController(req,res){
    logger.error("ping error logs for ping controller");
    return res.json({message:"Ping check from ping problem controller"});
}

async function addProblem(req,res,next){
    try{
        // console.log("====== Add problem called inside controllers =====");
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

async function getProblem(req,res,next){
    try{
        const response  = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message: 'Successfully found problem',
            error:{},  
            data:response
        })
    }catch(error){
        next(error);
    }
}

async function getProblems(req,res,next){
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
async function updateProblem(req,res,next){
    try{
        
        const response  = await problemService.updateProblem(req.params.id,req.body);
        return res.status(StatusCodes.OK).json({
            success:true,
            message: 'Successfully updated problem',
            error:{},  
            data:response
        })

    }catch(error){
        next(error);
    }
}
async function deleteProblem(req,res,next){
    try{
        const response  = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message: 'Problem deleted successfully',
            error:{},  
            data:response
        })
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