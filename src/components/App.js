import React, { useState, useEffect } from "react";
import "../styles/App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ascending, setAscending] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://content.newtonschool.co/v1/pr/main/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const fetchData = () => {
    useEffect();
  };

  const handleSort = () => {
    setUsers(
      [...users].sort((a, b) => {
        if (ascending) {
          return a.name.length - b.name.length;
        } else {
          return b.name.length - a.name.length;
        }
      })
    );
    setAscending(!ascending);
  };

  return (
    <div className="App">
      <h1>Users</h1>
      <button className="fetch-data-btn" onClick={fetchData}>
        Fetch User Data
      </button>
      <button onClick={handleSort} className="sort-btn">
        Sort by name length ({ascending ? "ascending" : "descending"})
      </button>
      <button onClick={() => setUsers([])}>Clear</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="users">
          {users.map((user) => (
            <div key={user.id} className="user">
              <div className="id-section">{user.id}</div>
              <p className="name">{user.name}</p>
              <p className="email">{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
