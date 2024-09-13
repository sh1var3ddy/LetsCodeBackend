const {CosmosClient} = require('@azure/cosmos')
const {COSMOS_ENDPOINT,COSMOS_PRIMARYKEY} = require("../config/server.config");
const db_Id = "logging-store";
const container_Id = "error-logs";
const client = new CosmosClient({endpoint: COSMOS_ENDPOINT,key:COSMOS_PRIMARYKEY});
const database = client.database(db_Id);
const container = database.container(container_Id);

async function logToCosmosDB(level,message){
    try {
        // structure of the document we store in DB
        await container.items.create({
            timeStamp: new Date().toISOString(),
            level:level,
            message:message
        })
        console.log("Entry created in Cosmos DB");
    } catch (error) {
        console.log("Error loggin to cosmos DB");
    }
}

module.exports = {logToCosmosDB}