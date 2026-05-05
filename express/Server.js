const e = require("express");
const cors = require("cors"); 
const express = require ("express");
const app = express();
app.use(express.json());
app.use(cors());

let arr =[{ name: "Ravi", id: 1, city: "New York"},{name: "Om", id: 2, city: "Chicago"}];

app.get("/", (req, res) => {
    res.send("Hello, World!");
});


app.get("/students", (req, res) => {
    res.json(arr);
});

app.get("/student", (req, res) => {
    const id = req.query.id;
    console.log(id);
    const student = arr.find(s => s.id === parseInt(id));
    if (student) {
        res.json(student);
    } else {
        res.status(404).send("Student not found");
    }
});


app.post("/addstudent", (req, res) => {
    let newStudents = req.body;
    // If it's not an array, convert to array for easy merging
    if (!Array.isArray(newStudents)) {
        newStudents = [newStudents];
    }
    arr.push(...newStudents);
    res.status(201).json(newStudents);
});


app.put("/updatestudent/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const studentIndex = arr.findIndex(s => s.id === id);
    if (studentIndex === -1) {
        return res.status(404).send("Student not found");
    }
    // Update the properties of the student
    arr[studentIndex] = { ...arr[studentIndex], ...req.body };
    res.json(arr[studentIndex]);
});


app.delete("/deletestudent/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const studentIndex = arr.findIndex(s => s.id === id);
    if (studentIndex === -1) {
        return res.status(404).send("Student not found");
    }
    // Remove the student from the array
    const deletedStudent = arr.splice(studentIndex, 1);
    res.json(deletedStudent[0]);
});




app.listen(3000, () => {
    console.log("Server is running on port 3000");
});