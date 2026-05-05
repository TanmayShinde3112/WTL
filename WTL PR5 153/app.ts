
const form = document.getElementById('studentForm') as HTMLFormElement;
const displayArea = document.getElementById('displayArea') as HTMLDivElement;


const nameInput = document.getElementById('name') as HTMLInputElement;
const rollNoInput = document.getElementById('rollNo') as HTMLInputElement;
const prnInput = document.getElementById('prn') as HTMLInputElement;
const deptInput = document.getElementById('department') as HTMLInputElement;

const nameError = document.getElementById('nameError') as HTMLSpanElement;
const rollNoError = document.getElementById('rollNoError') as HTMLSpanElement;
const prnError = document.getElementById('prnError') as HTMLSpanElement;
const deptError = document.getElementById('departmentError') as HTMLSpanElement;

function validateInput(): boolean {
    let isValid = true;

    
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

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    if (validateInput()) {
        
        displayArea.innerHTML = `
            <h2>Student Details:</h2>
            <p><strong>Name:</strong> ${nameInput.value.trim()}</p>
            <p><strong>Roll No:</strong> ${rollNoInput.value.trim()}</p>
            <p><strong>PRN:</strong> ${prnInput.value.trim()}</p>
            <p><strong>Department:</strong> ${deptInput.value.trim()}</p>
        `;

        
        form.reset();
    } else {
        displayArea.innerHTML = '';
    }
});
