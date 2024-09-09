const {Problem} = require('../models/index');

class ProblemRepository{
    async createProblem(problemData){
        console.log("createProblem inside problem repository");
        try{
            throw {"new":"some error occured"}
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
}

module.exports = ProblemRepository;