const bcrypt = require('bcryptjs');

/**
 * Encrypt a password using the bcrypt algorithm
 * @param password - The password to be hashed.
 * @returns The hashed password.
 */
const encryptPwd = ( password ) => {

    let salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync( password, salt );

}

/**
 * Compare a password with a hash
 * @param pwdTarget - The password that you want to check against the hash.
 * @param hash - The hash to compare the password against.
 * @returns The result of the comparePwd function.
 */
const comparePwd = ( pwdTarget, hash ) => {
    return bcrypt.compareSync( pwdTarget, hash ); 
}


module.exports = {
    encryptPwd,
    comparePwd
}