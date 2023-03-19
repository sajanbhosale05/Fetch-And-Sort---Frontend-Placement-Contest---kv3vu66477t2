import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortAscending, setSortAscending] = useState(true);  

  return (
    <div id="main">
      <h2>User List</h2>
      <button className="fetch-data-btn">Fetch User Data</button>
      <button className="sort-btn">
        "Sort by name length (ascending)"
        "Sort by name length (descending)"
      </button>
      <p>Loading...</p>
      <div className='users-section'>
          <li>
            <section className='id-section'></section>
            <section className='name-email-section'>
              <p className='name'>Name: </p>
              <p className='email'>Email: </p>
            </section>
          </li>
      </div>
    </div>
  )
}


export default App;
