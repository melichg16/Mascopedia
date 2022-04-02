const passwordEncryption = require('../helpers/password-encryption');
const jsonWebToken       = require('../helpers/jsonWebToken');

module.exports ={
    ...passwordEncryption,
    ...jsonWebToken
}