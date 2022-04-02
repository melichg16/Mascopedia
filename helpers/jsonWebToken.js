const jwt = require('jsonwebtoken');

/**
 * using the user id it creates a token
 * @param [id] - user id
 * @returns token
 * @author jcanales
 */
const generateJwt = ( id ) => {

    return new Promise ( ( resolve , reject ) => {

        const payload = { id };

        jwt.sign( payload , process.env.SECRETKEY , {
            expiresIn: '2h'
        }, ( err, token) => {
            if( err ) {
                console.log( err );
                reject( 'An error has ocurred during the token generation')
            } else{
                resolve( token );
            }
        });
    });

}

/**
 * using the token it returns the user id
 * @param [token]
 * @returns user id
 * @author jcanales
 */
const getIdWithToken = ( token ) => {

    try {

        const { id } = jwt.verify( token, process.env.SECRETKEY ); 
        return id;
    } catch (error) {
        throw new Error("Invalid token");
    }

}

module.exports = {
    generateJwt,
    getIdWithToken
}