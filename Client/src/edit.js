import React from 'react';

const Edit=()=>{
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [date, setDate] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [city, setCity] = React.useState('');
    const [pincode, setPincode] = React.useState('');
    const [mobileNo, setMobileNo] = React.useState('');

    const Edit=async()=>{
        console.warn(firstName, lastName, date, email, address, city, pincode, mobileNo)
    
    }

    return (
        <div className= 'table'>
            <h1>Edit Page</h1>
            <input type="text" placeholder= 'enter first name here' className='inputBox'
                value={firstName} onChange={(e)=>{setName(e.target.value)}}
            />

            <input type="text" placeholder= 'enter last name here' className='inputBox'
                value={lastName} onChange={(e)=>{setName(e.target.value)}}
            />
            
            <input type="text" placeholder= 'enter date of birth here' className='inputBox'
                value={date} onChange={(e)=>{setName(e.target.value)}}
            />
            
            <input type="text" placeholder= 'enter email here' className='inputBox'
                value={email} onChange={(e)=>{setName(e.target.value)}}
            />
            
            <input type="text" placeholder= 'enter address here' className='inputBox'
                value={address} onChange={(e)=>{setName(e.target.value)}}
            />

            <input type="text" placeholder= 'enter city here' className='inputBox'
                value={city} onChange={(e)=>{setName(e.target.value)}}
            />

            <input type="text" placeholder= 'enter pincode here' className='inputBox'
                value={pincode} onChange={(e)=>{setName(e.target.value)}}
            />

            <input type="text" placeholder= 'enter mobile number here' className='inputBox'
                value={mobileNo} onChange={(e)=>{setName(e.target.value)}}
            />
            
            <button onClick={Edit} className='appButton'>Edit</button>
        </div>
    )
}

export default Edit
