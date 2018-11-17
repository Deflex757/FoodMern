const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PlateSchema = new Schema({
    food: String,
    value: parseInt('integer')
});

export default PlateSchema;