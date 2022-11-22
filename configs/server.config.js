if(process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

module.exports = {
    PORT: process.env.PORT
}

// Dotenv is npm module.
// Dotenv basically loads yours .envfile
//production  env -> We don't need this env file

//By default the value of Node_env -> undefined