const winston = require('winston');
const { LOG_DB_URL } = require('./server.config');

require('winston-mongodb')
const allowedTransports = []

// The below transport configuration enables logging on the console. 
allowedTransports.push(new winston.transports.Console({
        format : winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp({
                format:'YYYY-MM-DD HH:mm:ss'
            }),
            winston.format.printf((log)=>`${log.timestamp} [${log.level}]: ${log.message}`)
        )
    }
));

// The below transport configuration enables logging in MongoDB
allowedTransports.push(new winston.transports.MongoDB({
    level:'error',
    db:LOG_DB_URL,
    collection:'logs',
}))


allowedTransports.push(new winston.transports.File({
    filename:'app.log'
}))
const logger = winston.createLogger({
    format: winston.format.combine(
        // first argument to the combine is defining how we want the timestamp to come up
        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),
        // second argument to the combine method, which defines what is exactly going to be printed in log
        winston.format.printf((log)=>`${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
    transports:allowedTransports
});

module.exports = logger;