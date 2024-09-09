const { sanitizeMarkdownContent } = require("../utilities/markdownSanitizer");

class ProblemService{
    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }
    async createProblem(problemData){
        // console.log("========== createProblem inside service==========");
            // 1.  sanitize the markdown for description
        problemData.description = sanitizeMarkdownContent(problemData.description);
        // console.log("Sanitized input",problemData);
        const problem = await this.problemRepository.createProblem(problemData);
        return problem;
    }
    async getAllProblems(){
        const problems = await this.problemRepository.getAllProblems();
        return problems;
    }
    async getProblem(id){
        const problem = await this.problemRepository.getProblem(id);
        return problem;
    }
    async deleteProblem(id){
        const result = await this.problemRepository.deleteProblem(id);
        return result;
    }
    async updateProblem(id,updateData){
        updateData.description = sanitizeMarkdownContent(updateData.description);
        const result = await this.problemRepository.updateProblem(id,updateData);
        return result;
    }
}

module.exports = ProblemService;
