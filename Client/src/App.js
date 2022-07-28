import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Table from './Table';
import AddContact from './AddContact';




function App() {

  return (
    <div className="App">
      {/* Heading of the project........................................ */}
      <header>Contact Management System</header>
      <div>
        <ul class="nav-ul">
          <li><Link to="/add">Add Contact</Link> </li>
          <li><Link to="/edit">Edit Contact</Link> </li>
          <li><Link to="/table">Contact List </Link> </li>


        </ul>
      </div>

      
      

      {/* Create Form.................................................... */}
    </div>
  );
}

// export function App() {
//   return <Login/>
// return <Edit/>
// }
export default App;
