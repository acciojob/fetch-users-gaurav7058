import React, { useState } from "react";
import axios from "axios";
import './../styles/App.css'; // Ensure to import your CSS file

const App = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true); // Set loading state to true
    setError(null); // Reset any previous error
    axios.get('https://reqres.in/api/users')
      .then(response => {
        setUserData(response.data.data); // Update state with user data
      })
      .catch(error => {
        setError("Failed to fetch user data."); // Set error message
      })
      .finally(() => {
        setLoading(false); // Set loading state to false
      });
  };

  return (
    <div>
      <button className="btn" onClick={fetchData}>Get User List</button>
      {loading && <p>Loading...</p>} {/* Loading state feedback */}
      {error && <p>{error}</p>} {/* Display error message */}
      {userData.length === 0 && !loading && !error && <p>No users found.</p>} {/* Empty user list message */}
      {userData.length > 0 && (
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
            {userData.map(user => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td><img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} width="50" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
