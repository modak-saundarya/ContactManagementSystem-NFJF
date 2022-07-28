import { useState } from 'react';
import './App.css';
import './styles.css'
import Table from './Table';
import AddContact from './AddContact';




function App() {

  return (
    <div className="App">
      {/* Heading of the project........................................ */}
      <header>Contact Management System</header>
      
      
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
