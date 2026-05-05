import React from 'react';
import './App.css';
import DisplayUsers from './DisplayUsers';
import Counter from './Counter';
import Form1 from './Form1';


function App() {
    const users = [
    { id: 1, name: 'Alice', age: 22 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 21 }
  ];
  return (
    <div>
      
      <h1>Form Example with useState</h1>
      <Form1 />
      <h1> Counter Example</h1>
      <Counter />
      <h1> Display Users Example</h1>
      <DisplayUsers users={users} />
    </div>
  );
}

export default App;
