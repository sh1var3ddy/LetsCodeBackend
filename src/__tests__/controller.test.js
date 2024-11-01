const problemController = require('../controllers/problem.controller');
const NotFound = require('../errors/notfounderror');
const problemService = require("../services/problem.service");
const {StatusCodes} = require("http-status-codes");

jest.mock("../services/problem.service")

describe("tests",()=>{
    beforeEach(()=>{
        req={};
        res = {
            status:jest.fn(()=>res),
            json:jest.fn()
        };
        next = jest.fn();
    });

    test('should get all problems',async()=>{
        const problems = []
        problemService.prototype.getAllProblems.mockResolvedValue(problems);
        await problemController.getProblems(req,res,next);
        expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
        expect(problemService.prototype.getAllProblems).toHaveBeenCalledTimes(1);
        expect(next).not.toHaveBeenCalled();
    })
    test('getproblem should call next with error if service throws error',async()=>{
        const mockError = new Error('id',123);
        problemService.prototype.getProblem.mockRejectedValue(mockError);
        req.params = { id:10};
        await problemController.getProblem(req,res,next);
        expect(res.status).not.toHaveBeenCalled();
        expect(res.json).not.toHaveBeenCalled();
        expect(next).toHaveBeenCalledWith(mockError);
    })

})