const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  id: Number,
  city: String
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
