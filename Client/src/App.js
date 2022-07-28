import { useState } from 'react';
import './App.css';
import './styles.css';
import { Link } from 'react-router-dom';
import Table from './Table';
import AddContact from './AddContact';




function App() {

  return (
    <div className="App">
      {/* Heading of the project........................................ */}
      <header>Contact Management System</header>
      <div>
        <ul>
          <li><Link to="/">Add Contact</Link> </li>
          <li><Link to="/edit">Edit Contact</Link> </li>
          <li><Link to="/table">Search Contact </Link> </li>


        </ul>
      </div>

      
      <AddContact/>

      {/* Create Form.................................................... */}
    </div>
  );
}

// export function App() {
//   return <Login/>
// return <Edit/>
// }
export default App;
