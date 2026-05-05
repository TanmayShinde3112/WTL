import React from 'react';
import './App.css';
import DisplayUsers from './DisplayUsers';
import Counter from './Counter';
import Form1 from './Form1';


function App() {
  
  return (
    <div>
      
      <h1>Form Example with useState</h1>

      <Form1 />
      <h1> Counter Example</h1>
      <Counter />
    </div>
  );
}

export default App;
