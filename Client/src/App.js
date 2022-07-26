import { useState } from 'react';
import './App.css';
import './styles.css'
//import { Link } from 'react-router-dom'



function App() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [date,setDate] = useState("");
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  const [city,setCity] = useState("");
  const [pincode,setPincode] = useState("");
  const [mobileNo,setMobileNo] = useState("");

  let submit = (e) => {
    e.preventDefault();
    // alert(`${firstName},${date},${email},${pincode}`);
    console.warn({firstName,email,mobileNo});
    let data = {firstName,email,mobileNo}
    
    fetch("http://localhost:4000/create",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data) 
    }).then((result)=>{
      console.warn("result",result);
    })

    setFirstName("");
    setLastName("");
    setDate("");
    setEmail("");
    setAddress("");
    setCity("");
    setPincode("");
    setMobileNo("");
  }

  return (
    <div className="App">
      {/* Heading of the project........................................ */}
      <header>Contact Management System</header>
      {/* Search Bar..................................................... */}
      <div class="search">
        <input class="search bar" type="text" placeholder="Search by Name"/>
        <button type="submit"><img src=""/></button>
      </div>

      {/* Create Form.................................................... */}
      <form onSubmit={submit}>
        <section class="left-side">
          First Name: <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/><br/>
          Last Name: <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/><br/>
          DOB: <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/><br/>
          Email ID: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
        </section>
        <section class="right-side">
          Address: <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/><br/>
          City: <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/><br/>
          Pincode: <input type="number" value={pincode} onChange={(e) => setPincode(e.target.value)}/><br/>
          Mobile No.: <input type="number" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)}/><br/>
        </section>
          <input id="create_btn" type="submit" value="Create User"/>
      </form>
    </div>
  );
}

// export function App() {
//   return <Login/>
// return <Edit/>
// }
export default App;
