const BaseError = require('./base.error');

const {StatusCodes} = require('http-status-codes');

class NotFound extends BaseError{
    constructor(resourceName,resourceValue){
        super("Not found",StatusCodes.NOT_FOUND,`The requested resources ${resourceName} with value ${resourceValue} not found`,{
            resourceName,
            resourceValue
        }
        );
    }
}

module.exports = NotFound;