var form = document.getElementById('studentForm');
var displayArea = document.getElementById('displayArea');
var nameInput = document.getElementById('name');
var rollNoInput = document.getElementById('rollNo');
var prnInput = document.getElementById('prn');
var deptInput = document.getElementById('department');
var nameError = document.getElementById('nameError');
var rollNoError = document.getElementById('rollNoError');
var prnError = document.getElementById('prnError');
var deptError = document.getElementById('departmentError');
function validateInput() {
    var isValid = true;
    nameError.textContent = '';
    rollNoError.textContent = '';
    prnError.textContent = '';
    deptError.textContent = '';
    if (!/^[A-Za-z\s]{2,}$/.test(nameInput.value.trim())) {
        nameError.textContent = 'Please enter a valid name (at least 2 letters).';
        isValid = false;
    }
    if (!/^[A-Za-z0-9]+$/.test(rollNoInput.value.trim())) {
        rollNoError.textContent = 'Please enter a valid roll number (alphanumeric).';
        isValid = false;
    }
    if (!/^\d{10}$/.test(prnInput.value.trim())) {
        prnError.textContent = 'PRN must be exactly 10 digits.';
        isValid = false;
    }
    if (!/^[A-Za-z\s]{2,}$/.test(deptInput.value.trim())) {
        deptError.textContent = 'Please enter a valid department name.';
        isValid = false;
    }
    return isValid;
}
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateInput()) {
        displayArea.innerHTML = "\n            <h2>Student Details:</h2>\n            <p><strong>Name:</strong> ".concat(nameInput.value.trim(), "</p>\n            <p><strong>Roll No:</strong> ").concat(rollNoInput.value.trim(), "</p>\n            <p><strong>PRN:</strong> ").concat(prnInput.value.trim(), "</p>\n            <p><strong>Department:</strong> ").concat(deptInput.value.trim(), "</p>\n        ");
        form.reset();
    }
    else {
        displayArea.innerHTML = '';
    }
});
