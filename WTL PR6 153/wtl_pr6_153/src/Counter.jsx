import React, {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement () { 
    if (count === 0) {
      return;
    }
    
    setCount (count - 1 );
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      
      <h2> Current Counter is {count} </h2>

      <button onClick = {increment}>Increment</button>
      <button onClick = {decrement}> Decrement</button>
      <button onClick = {reset} >Reset</button>
    </div>
  );


}
export default Counter;