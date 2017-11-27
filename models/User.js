const mongoose = require("mongoose");
//const Schema = mongoose.Schema; essa instrucao é igual a debaixo
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: String,
    credits: {type:Number, default:0}
});

mongoose.model('user', userSchema);