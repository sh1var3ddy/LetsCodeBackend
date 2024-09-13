const path = require('path');

require('dotenv').config({ path : path.resolve(__dirname, '.env') });

module.exports = {
    PORT: process.env.PORT || 3000,
    ATLAS_DB_URL: process.env.ATLAS_DB_URL,
    NODE_ENV: process.env.NODE_ENV,
    LOG_DB_URL: process.env.LOG_DB_URL,
    COSMOS_ENDPOINT: process.env.COSMOS_ENDPOINT,
    COSMOS_PRIMARYKEY:process.env.COSMOS_PRIMARYKEY
}