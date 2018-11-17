const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DishesSchema = new Schema({
    name: String,
    value: parseInt('integer')
});

// module.exports = mongoose('Dishes', DishesSchema);
export default DishesSchema;