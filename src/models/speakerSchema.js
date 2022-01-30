const mongoose = require('mongoose');
const validator = require('validator');

const speakerSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    email : {
        type:String,
        required : true,
        unique : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Envalid Email");
            }
        }
    },
    phone : {
        type : Number,
        required : true
    },
    occupation : {
        type : String,
        required : true
    },
    message : {
        type : String
    }

})


const Speaker = new mongoose.model("Speaker",speakerSchema);
module.exports = Speaker;