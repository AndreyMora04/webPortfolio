//Importing MongoBD
const mongoose = require('mongoose');

//Importing our application.
const app = require('./app');

//Server port.
const port = process.env.PORT || 3997;

//Importing our API version.
const {
    API_Version,
    IP_Server,
    portDB,
    dbName
} = require('./config');

//Solution when we want to update a register.
mongoose.set('useFindAndModify', false);

//Database connection with mongoose.
mongoose.connect(`mongodb://${IP_Server}:${portDB}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, res) => {

    if (err) {
        throw err;
    } else {
        console.log('Conectado');
        app.listen(port, () => {});
    }

});