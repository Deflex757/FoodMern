const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DishesSchema = new Schema({
    name: String,
    value: parseInt('integer')
});

export default DishesSchema;