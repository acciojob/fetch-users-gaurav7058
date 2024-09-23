
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import axios from 'axios';
const url=`https://reqres.in/api/users`
const App = () => {
  const[userData,setUserData]=useState([]);
   function fetchData() {
    axios.get('https://reqres.in/api/users')
    .then(response => {
      console.log(response.data); // Check the structure here
      setUserData(response.data.data); // Adjust if necessary
    })
    .catch(error => {
       // Set error message
    })
  }
  return (
    <div>
      <button onClick={fetchData} className="btn">Get User Data</button>
      <table>   
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Avatar</th>
              </tr>
            </thead>
          <tbody>
            {userData==0 &&<p>No Data found to display</p>}
          {     
           userData.length>0 &&  userData.map(item => (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td><img src={item.avatar} alt={item.first_name} /></td>
              </tr>
          ))
          }
          </tbody>
        </table>
    </div>
  )
}

export default App
