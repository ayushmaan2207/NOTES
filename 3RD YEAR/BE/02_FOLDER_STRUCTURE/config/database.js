// npm i mongoose - to set connection in mongodb
// npm i dotenv - to import all ele in process object

const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB ka Connection is Successful"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        // Inform any monitoring tools or services that the application has crashed due to an error
        process.exit(1);
    } );
}

module.exports = dbConnect;