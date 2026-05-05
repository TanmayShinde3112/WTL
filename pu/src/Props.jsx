import React from 'react';

function Props(props) {
    return (
        <div>
            <h1> Name: {props.name} </h1>
            <h2>City:{props.city}</h2>
            <h2>Roll No:{props.rollno}</h2>
            <h2>Dep:{props.dep}</h2>
            
        </div>
    );
}
export default Props;