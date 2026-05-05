<!DOCTYPE html>
<html>
<head>
    <title>Student Information</title>
    <style>
        /* Table border styling */
        #mytable, #mytable th, #mytable td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 8px;
        }
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
            color: #333;
            align-items: center;
            justify-content: center;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            justify-content: flex-start;

        }
    </style>
</head>
<body>
    <h1>STUDENT INFORMATION FORM</h1>

    <p>Enter Student ID (for Edit/Delete):</p>
    <input type="text" id="student_id" name="student_id" value="" placeholder="Enter Student ID for Edit/Delete" style="width: 15%;">

    <p>Enter Student Name:</p>
    <input type="text" id="student_name" name="student_name" value="" placeholder="Enter Student Name" style="width: 15%;">

    <p>Enter Student Marks:</p>
    <input type="text" id="student_marks" name="student_marks" value="" placeholder="Enter Student Marks" style="width: 15%;"><br><br>

    <input type="button" value="INSERT" id="submit_button" style="background-color: silver;"><br><br>
    <input type="button" value="DISPLAY" id="display_button" style="background-color: green;"><br><br>
    <input type="button" value="EDIT" id="edit_button" style="background-color: pink;"><br><br>
    <input type="button" value="DELETE" id="delete_button" style="background-color: red;"><br><br>

    <div id="display_area" style="margin-top: 20px;"></div>

    <script>
        function validateInsert() {
            const name = document.getElementById('student_name').value.trim();
            const marks = document.getElementById('student_marks').value.trim();

            if (name === "") {
                alert("Please enter Student Name.");
                return false;
            }
            if (marks === "") {
                alert("Please enter Student Marks.");
                return false;
            }
            if (isNaN(marks)) {
                alert("Marks must be a number.");
                return false;
            }
            return true;
        }

        function validateEditDelete() {
            const id = document.getElementById('student_id').value.trim();
            if (id === "") {
                alert("Please enter Student ID.");
                return false;
            }
            if (isNaN(id) || parseInt(id) <= 0) {
                alert("Student ID must be a valid positive number.");
                return false;
            }
            return true;
        }

        async function insertData() {
            if (!validateInsert()) return;

            let data = {
                action: "insert",
                student_name: document.getElementById('student_name').value.trim(),
                student_marks: document.getElementById('student_marks').value.trim()
            };
            let response = await fetch("http://localhost/php/test3.php", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            let result = await response.text();
            alert(result);
            clearInputs();
            clearDisplay();
        }

        async function getdata() {
            let res = await fetch("http://localhost/php/test3.php", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({action: "display"})
            });
            let data = await res.json();
            clearDisplay();

            let tableBody = document.querySelector("#tablebody");

            if (!tableBody) {
                let table = document.createElement("table");
                table.setAttribute("id", "mytable");

                let header = document.createElement("thead");
                let headerRow = document.createElement("tr");
                ["ID", "Name", "Marks"].forEach(text => {
                    let th = document.createElement("th");
                    th.textContent = text;
                    headerRow.appendChild(th);
                });
                header.appendChild(headerRow);
                table.appendChild(header);

                let body = document.createElement("tbody");
                body.setAttribute("id", "tablebody");
                table.appendChild(body);

                document.getElementById("display_area").appendChild(table);
                tableBody = document.querySelector("#tablebody");
            }

            let records = data.data;
            tableBody.innerHTML = "";

            for (let rec of records) {
                let row = document.createElement("tr");
                [rec.id, rec.name, rec.marks].forEach(value => {
                    let cell = document.createElement("td");
                    cell.textContent = value;
                    row.appendChild(cell);
                });
                tableBody.appendChild(row);
            }
        }

        async function editData() {
            if (!validateEditDelete()) return;

            const name = document.getElementById('student_name').value.trim();
            const marks = document.getElementById('student_marks').value.trim();

            if (name === "") {
                alert("Please enter Student Name for update.");
                return;
            }
            if (marks === "") {
                alert("Please enter Student Marks for update.");
                return;
            }
            if (isNaN(marks)) {
                alert("Marks must be a number.");
                return;
            }

            let data = {
                action: "edit",
                student_id: document.getElementById('student_id').value.trim(),
                student_name: name,
                student_marks: marks
            };
            let response = await fetch("http://localhost/php/test3.php", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            let result = await response.text();
            alert(result);
            clearInputs();
            clearDisplay();
        }

        async function deleteRecord() {
            if (!validateEditDelete()) return;

            let id = document.getElementById('student_id').value.trim();

            if (!confirm(`Are you sure you want to delete student with ID ${id}?`)) return;

            let data = {
                action: "delete",
                student_id: id
            };
            let response = await fetch("http://localhost/php/test3.php", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            let result = await response.text();
            alert(result);
            clearInputs();
            clearDisplay();
        }

        function clearInputs() {
            document.getElementById('student_id').value = "";
            document.getElementById('student_name').value = "";
            document.getElementById('student_marks').value = "";
        }

        function clearDisplay() {
            document.getElementById("display_area").innerHTML = "";
        }

        document.getElementById('submit_button').addEventListener('click', insertData);
        document.getElementById('display_button').addEventListener('click', getdata);
        document.getElementById('edit_button').addEventListener('click', editData);
        document.getElementById('delete_button').addEventListener('click', deleteRecord);

        // No display on load
    </script>
</body>
</html>
