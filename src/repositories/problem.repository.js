const logger = require('../config/logger.config');
const NotFound = require('../errors/notfounderror');
const {Problem} = require('../models/index');

class ProblemRepository{
    async createProblem(problemData){
        //console.log("createProblem inside problem repository");
        try{
            const problem = await Problem.create({
                title:problemData.title,
                description:problemData.description,
                testCases:(problemData.testCases)?problemData.testCases:[]
            })
            return problem;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    async updateProblem(id,updateData){
        try{
            const problem = await Problem.findByIdAndUpdate({_id:id},updateData);
            if (!problem) {
                throw new NotFound("Problem",id);
              } else {
                console.log('Document updated successfully');
              }
            return problem;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    async getAllProblems(){
        try{
            const problems = await Problem.find({});
            return problems;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    async getProblem(id){
        try {
            const problem = await Problem.findById(id);
            if(problem===null){
                throw new NotFound("Problem",id);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    } 
    async deleteProblem(id){
        try {
            const result = await Problem.deleteOne({ _id: id });
            if(result.deletedCount===0){
                logger.error(`Problem with id: ${id} not found in the db.`)
                throw new NotFound("Problem",id);
            }else {
                console.log('Document deleted successfully');
            }
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }  
}

module.exports = ProblemRepository;