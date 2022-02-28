const CosmosClient = require('@azure/cosmos').CosmosClient;
const colors       = require('colors');

const options = {
    endpoint: process.env.DB_ENPOINT,
    key: process.env.DB_KEY,
    userAgentSuffix: 'MascopediaClient'
};

const dbClient = new CosmosClient( options );

/**
* Database configuration 
* @since   27.02.2022
* @author  jcanalesr
**/ 
const dbConnection = async() => {

    try {

        await createDbIfNotExist();
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
    dbClient
}