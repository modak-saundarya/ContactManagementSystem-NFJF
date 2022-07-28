import { useState } from 'react';
import './styles.css';


function AddContact(){

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [date,setDate] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [city,setCity] = useState("");
    const [pincode,setPincode] = useState("");
    const [mobileNo,setMobileNo] = useState("");
  
    let submit = async(e) => {
      e.preventDefault();
      let data = {firstName,lastName,date,email,address,mobileNo,city,pincode,mobileNo};
      console.warn(data);
      setFirstName("");
      setLastName("");
      setDate("");
      setEmail("");
      setAddress("");
      setCity("");
      setPincode("");
      setMobileNo("");

      
      let result= await fetch("http://localhost:4000/create",{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(data) 
      });
      result= await result.json();
  
      
    }

    return(
    <>
        <header>ADD CONTACT FORM</header>
        <form onSubmit={submit}>
        <div class="form-data">
        <section class="left-side">
          First Name: <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/><br/>
          Last Name: <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/><br/>
          DOB: <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/><br/>
          Email ID: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
        </section>
        <section class="right-side">
          Address: <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/><br/>
          City: <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/><br/>
          Pincode: <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)}/><br/>
          Mobile No.: <input type="text" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)}/><br/>
        </section>
        </div>
        <div class="btn">
          <input class="create_btn" type="submit" value="Create User"/>
        </div>
        </form>
    </>

    )
  

    

}

export default AddContact;