const CosmosClient = require('@azure/cosmos').CosmosClient;
const colors       = require('colors');

const options = {
    endpoint: process.env.DB_ENPOINT,
    key: process.env.DB_KEY,
    userAgentSuffix: 'MascopediaClient'
};

const dbClient = new CosmosClient( options );
const databaseClient = dbClient.database(process.env.DB_NAME);
const containerClient = databaseClient.container(process.env.DB_CONTAINER);

/**
* Database configuration 
* @since   27.02.2022
* @author  jcanalesr
**/ 
const dbConnection = async() => {

    try {

        await createDbIfNotExist();
        await createContainerIfNotExist();
        await readDataBase();
        console.log( `Reading database:${process.env.DB_NAME}\n`.cyan );

    } catch ( error ) {
        console.log( `An error has ocurred during the database creation = ${ error }`.bgRed );
    }

}

/**
* Create database if it is not already created
* @since   27.02.2022
* @author  jcanalesr
**/ 
const createDbIfNotExist = async() => {
    await dbClient.databases.createIfNotExists( { id: process.env.DB_NAME } );
}

const createContainerIfNotExist = async() => {

    await dbClient.database( process.env.DB_NAME ).containers.createIfNotExists(
        { id: process.env.DB_CONTAINER },
        { offerThroughput: 400 }
    );

}

/**
* Read database 
* @since   27.02.2022
* @author  jcanalesr
**/ 
const readDataBase = async() => {
    await dbClient.database( process.env.DB_NAME ).read();
}

module.exports = {
    dbConnection,
    containerClient
}