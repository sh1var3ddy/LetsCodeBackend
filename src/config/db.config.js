const mongoose = require('mongoose');
const { ATLAS_DB_URL,NODE_ENV } = require('./server.config');
// Function to connect to MongoDB
async function connectToDB() {
    try {
        if(NODE_ENV=='development'){
            await mongoose.connect(ATLAS_DB_URL);
            console.log('Connected to the DB successfully');
        }
    } catch (error) {
        console.log('Unable to connect to the DB server');
        console.error(error);  // This will give a detailed error output
    }
}

module.exports = connectToDB;