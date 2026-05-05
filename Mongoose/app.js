const express = require('express');
require('./db'); // Connect to MongoDB
const Student = require('./model/student');

const app = express();
app.use(express.json());

// Get all students
app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Get a student by id (query param)
app.get('/student', async (req, res) => {
  const id = parseInt(req.query.id);
  const student = await Student.findOne({ id: id });
  if (student) {
    res.json(student);
  } else {
    res.status(404).send('Student not found');
  }
});

// Create student(s)
app.post('/student', async (req, res) => {
  let newStudents = req.body;
  if (!Array.isArray(newStudents)) {
    newStudents = [newStudents];
  }
  const savedStudents = await Student.insertMany(newStudents);
  res.status(201).json(savedStudents);
});

// Update student by id (path param)
app.put('/updatestudent/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const updatedStudent = await Student.findOneAndUpdate(
    { id: id },
    req.body,
    { new: true }
  );
  if (updatedStudent) {
    res.json(updatedStudent);
  } else {
    res.status(404).send('Student not found');
  }
});

// Delete student by id (path param)
app.delete('/deletestudent/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const deletedStudent = await Student.findOneAndDelete({ id: id });
  if (deletedStudent) {
    res.json(deletedStudent);
  } else {
    res.status(404).send('Student not found');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
