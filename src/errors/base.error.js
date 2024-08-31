class BaseError extends Error{
    constructor(name,statusCode,description,details){
        super(description);// passing message as argument to parent class
        this.name = name;
        this.statusCode = statusCode;
        this.details = details;
    }
}

module.exports = BaseError;