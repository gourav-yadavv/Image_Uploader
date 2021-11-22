const mongoose = require('mongoose');
require("dotenv").config();

const Connect = async () => {
    try{
        // mongodb clund connection
        const con = await mongoose.connect(process.env.MONGO_URI , {
            useNewUrlParser : true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex : true
        })

        console.log(`Database Connected Successfully.`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = Connect