const mongoose = require('mongoose');
require('dotenv').config();
const dbConnection = async() => {

    try {
          mongoose.connect(process.env.DB_CNN,{ 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        } );
         console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD, ver los Logs')
    }
}

module.exports = {
    dbConnection
}