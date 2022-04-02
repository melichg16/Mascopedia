const { request, response} = require('express');
const { BasicInsertOperation } = require('../database/CrudOperations');
const { encryptPwd } = require('../helpers/password-encryption');
const { UserModel } = require('../models/User');


/**
 * Create a new user in the database
 * @param [req] - The request object.
 * @param [res] - The response object.
 * @returns The user that was created.
 * jcanales
 */
const createUser = async( req =  request, res = response ) => {

    const { fullName, email, age, password } = req.body;

    //TODO: hacer select al container con el email y el tipo 'USER', una vez se obtiene el usuarix validar que el email que viene
    //por el body no sea igual al que vino como respuesta.

    const userTmp = new UserModel( fullName, email, age, encryptPwd( password ) );

    try {

        const createdUser = BasicInsertOperation( userTmp );
        return res.status( 200 ).json( createdUser );

    } catch (error) {
        return res.status( 400 ).json({
            msg : 'An error has ocurred, please contact to your administrator'
        })
    }

    
}

module.exports = {
    createUser
}