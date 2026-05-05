import React from 'react';

function DisplayUsers(props) {
    const users = props.users;
    return ( 
        <div>

            <h2> User List </h2>
            {users.map((user)  => (
                <div key={user.id}>
                <p> id: {user.id} </p>
                <p> Name: {user.name} </p>
                <p> age: {user.age} </p>
                </div>
            ))}

         </div>   
           

    );
}

export default DisplayUsers;
