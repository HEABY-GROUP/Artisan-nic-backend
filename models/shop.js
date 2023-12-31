const {Schema, model} = require('mongoose');

const shopSchema = new Schema({
    name:{type: String,required:true},
    departamento: {type: String,required:true},
    municipio: {type: String,required:true},
    city:{type: String,required:true},
    password: {type: String,required:true},
    exactDirection: {type: String,required:false},
    phone: {type: String,required:true},
    rol:{type:String,default:"shop"},
    likes:{type:Array,required:false},
});

module.exports = model("shops",shopSchema);