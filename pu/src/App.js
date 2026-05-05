import './App.css';
import Counter from './Counter';
import Props from './Props';
import Form from './Form';



function App() {
  const user = [{
    name: "John",
    city: "New York",
    rollno: 153,
    dep:"Computer Engineering"
  },{
    name: "Alice",
    city: "Los Angeles",
    rollno: 162,
    dep:"Information Technology"
  }
];

  return (
    <div className="App">
     <h1> Counter App Example </h1>
     <Counter />

     <h1>Props Example </h1>
     <Props name = {user[0].name} city={user[0].city} rollno={user[0].rollno} dep={user[0].dep}>
      </Props>

      <h1> Form Validation Example Using React </h1>
      <Form/>
    </div>
  );
}

export default App;
