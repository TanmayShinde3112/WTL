import React, { useState } from "react";

function Form1() {

    function handleSubmit(event) {
    event.preventDefault();
    setSubmittedName(`First Name: ${form1.fName} Last Name: ${form1.lName} Email: ${form1.email}`);
    if (validateForm()) {
      setForm1({ fName: "", lName: "", email: "" });
    }
  }

  function validateForm() {
    return form1.fName.length > 0 && form1.lName.length > 0 && form1.email.length > 0;
  }

  const[form1,setForm1] = useState({ fName:"", lName:"", email:"" });
  const[submittedName,setSubmittedName] = useState("");

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Enter first name:
            <input
              type="text"
              value={form1.fName}
              onChange={(e) => setForm1({ ...form1, fName: e.target.value })}
              placeholder="First Name"
            />
          </label>
        </div>
        <div>
          <label>
            Enter last name:
            <input
              type="text"
              value={form1.lName}
              onChange={(e) => setForm1({ ...form1, lName: e.target.value })}
              placeholder="Last Name"
            />
          </label>
        </div>
        <div>
            <label>
                Enter email:
                <input
                    type="email"
                    value={form1.email}
                    onChange={(e) => setForm1({ ...form1, email: e.target.value })}
                    placeholder="Email"
                />
            </label>
        </div>
        <div>
          <button type="submit">Submit</button>
            <button type="reset" onClick={() => { setForm1({ fName: "", lName: "", email: "" }); setSubmittedName(""); }}>Reset</button>

        </div>

      </form>
      
      {submittedName && (
        <div style={{ marginTop: "15px", fontWeight: "bold" }}>
          {submittedName}

        </div>
      )}
    </>
  );
}

export default Form1;
