import React, { useState } from "react";

function Form() {
    const [Form,setForm] = useState({
      fname: " ",
      lname: " ",
      mobile_no:" ",
      email:" "

    });

    const submit_handler = () => {
        if(Form.fname===" " || Form.lname===" " || Form.mobile_no===" " || Form.email===" ")
        {
            alert("Please Fill All The Fileds");
        }

        else if(isNaN(Form.mobile_no)) 
        {
            alert("Enter Valid Phone Number");
        }

        else if(!Form.email.includes("@") || !Form.email.includes("gmail.com"))
        {
            alert("Enter Valid Email ID");
        }
        else {
            alert("Form Submitted Succesfully");
            console.log(Form.fname);
            console.log(Form.lname);
            console.log(Form.mobile_no);
            console.log(Form.email);
        }
    }

    return (
        <div>
            <label> Enter First Name </label>
            <input type="text" value={Form.fname} onChange={(e)=>setForm({...Form,fname:e.target.value})}/> <br/>

            <label> Enter Last Name </label>
            <input type="text" value={Form.lname} onChange={(e)=>setForm({...Form,lname:e.target.value})}/> <br/>

            <label> Enter Mobile Number </label>
            <input type="text" value={Form.mobile_no} onChange={(e)=>setForm({...Form,mobile_no:e.target.value})}/>  <br/>

            <label> Enter Email ID </label>
            <input type="text" value={Form.email} onChange={(e)=>setForm({...Form,email:e.target.value})}/> <br/>

            <p> First Name:  {Form.fname} <br/>
                Last Name:  {Form.lname}<br/>
                Email:  {Form.email} <br/>
                Mobile Number:  {Form.mobile_no}</p>

            <button type="button" onClick={submit_handler}>Submit</button>

        </div>

    );
}
export default Form;