const express    = require('express');
var cors         = require('cors');
const fileUpload = require('express-fileupload');
const colors     = require('colors');

//const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require( 'http' ).createServer( this.app );

        //rutas
        this.routes  = {
            dummy       : '/api/dummy',
        }

        this.connectToDB();
        this.middlewares();
        //this.route();

    }


    async connectToDB(){
        //await dbConnection();
        return;
    }

    middlewares(){

        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static( 'public' ) );
        this.app.use(fileUpload( { 
            useTempFiles     : true, 
            tempFileDir      : '/tmp/',
            createParentPath : true } )
        );

    }

    route() {
        this.app.use(this.routes.dummy, require( '../routes/dummy.routes' ) );
    }

    listen(){
        this.server.listen( this.port , () => {
            console.log( `Server running at port: ${this.port}`.bgGreen );
        });
    }

}

module.exports = Server;