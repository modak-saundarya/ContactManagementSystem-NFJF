import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './styles.css';
import {parse, stringify, toJSON, fromJSON} from 'flatted';
// const stringify = require('json-stringify-safe');
// import stringify from 'json-stringify-safe';

function Edit(){

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [date,setDate] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [city,setCity] = useState("");
    const [pincode,setPincode] = useState("");
    const [mobileNo,setMobileNo] = useState("");
    const [isDeleted,setIsDeleted] = useState(false);

    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
       getContact();
    },[])

    const getContact = async() =>{
        console.warn(params);
        let result = await fetch(`http://localhost:4000/contact/${params.id}`);
        result = await result.json();
        console.warn(result);
        setFirstName(result.FirstName);
        setLastName(result.LastName);
        
        // setDate(JSON.stringify(result.DOB));
        setEmail(result.Email);
        setAddress(result.Address);
        setCity(result.City);
        setPincode(result.Pincode);
        setMobileNo(result.ContactNo);
  


    }

  
    let editContact = async(e) => {
      // e.preventDefault();
    //   const userId = JSON.parse(localStorage.getItem('user'))._id;
      let data = {firstName,lastName,date,email,address,mobileNo,city,pincode,mobileNo,isDeleted}; //userId
      console.warn(data);
      setFirstName("");
      setLastName("");
      setDate("");
      setEmail("");
      setAddress("");
      setCity("");
      setPincode("");
      setMobileNo("");


      let result= await fetch(`http://localhost:4000/contact/${params.id}`,{
        method:'Put',
        headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json'
        },
         body:data
        // body:Flatted.parse(Flatted.stringify(data))
      });
      result= await result.json();
      // result = await JSON.parse(result)
      console.warn(result);
      navigate('/')
  
      
    }

    return(
    <>
        <header>EDIT CONTACT FORM</header>
        <form onSubmit={editContact}>
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
          <input class="create_btn" type="submit" value="SAVE"/>
        </div>
        </form>
    </>

    )
  

    

}

export default Edit;