const { sanitizeMarkdownContent } = require("../utilities/markdownSanitizer");

class ProblemService{
    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }
    async createProblem(problemData){
        console.log("========== createProblem inside service==========");
        try{
             // 1.  sanitize the markdown for description
            problemData.description = sanitizeMarkdownContent(problemData.description);
            console.log("Sanitized input",problemData);
            const problem = await this.problemRepository.createProblem(problemData);
            return problem;
        }catch(error){
            console.log(error, "failing to create new problem");
            throw error;
        }
       
    }
}

module.exports = ProblemService;
