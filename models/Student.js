const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Create a schema object

// Create a new schema for Student model with the following fields
const StudentSchema = new Schema({
    rollno: { type: Number},
    name: { type: String},
    fatherName: { type: String},
    adharCard: { type: String},
    mobileNo: { type: String}
})

// Export the model so that it can be used in other modules
module.exports = mongoose.model('Student', StudentSchema);