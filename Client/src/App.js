import { useState } from 'react';
import './App.css';
import './styles.css'
import Table from './Table';
import AddContact from './AddContact';




function App() {
  
  // Form Values............................................................
  // Search Values.......................................
  const [searchName,setSearchName] = useState("");

  let searchSubmit = async (e) =>{
    e.preventDefault();
    console.warn({searchName});
    let result = await fetch("http://localhost:4000/search/${searchName}");
    result = await result.json();
    // if(result){
      // Table(result);
    // }

    setSearchName("");


  }


  return (
    <div className="App">
      {/* Heading of the project........................................ */}
      <header>Contact Management System</header>
      {/* Search Bar..................................................... */}
      <div class="search">
        <input class="search bar" type="text"  value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder="Search by FirstName"/>
        <button onClick={searchSubmit} type="submit"><i class="fa fa-search"></i></button>
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
