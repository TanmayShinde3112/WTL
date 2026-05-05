import React,{ useState } from "react";
import axios from "axios";


function App(){

  const [data,setData] = useState([]);

  const getdata = async() => {
    const res = await axios.get("movies.json");
    setData(res.data);
  }

  return(
    <div>
      <h1> FETCHING DATA WITH AXIOS </h1>
      <button type="button" onClick={getdata}>Fetch Data</button>

      <table border="1">
        <thead>
            <tr>
          <th>ID</th>
          <th> TITLE</th>
          <th> TASK </th>
        </tr>
        </thead>
        <tbody>
          {data.map((item)=>(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed ? "Completed" : "Not Completed"}</td>
            </tr>
          ))}
        </tbody>

      </table>
      </div>
  );

}
export default App;