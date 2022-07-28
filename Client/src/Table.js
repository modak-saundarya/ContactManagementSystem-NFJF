import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { useState, useEffect } from 'react';
import './tableStyles.css'

function Table(){
    const [data,setData] = useState([]);

    const getContacts = async() =>{
        let result = await fetch('http://localhost:4000/contacts',
        {method:'GET'});
        result = await result.json();
        setData(result); 
        console.warn(result);         
   
    }
    

    useEffect(() => {
        getContacts();
    }, []);  

  
   
    // ------------------------Search------------------------------
    // const [searchName,setSearchName] = useState("");

    // let searchSubmit = async (e) =>{
    //     e.preventDefault();
    //     console.warn({searchName});
    //     let result = await fetch("http://localhost:4000/search/${searchName}");
    //     result = await result.json();
    //     // if(result){
    //     // Table(result);
    //     // }
    //     setSearchName("");
    // }

    // let DeleteContact = async(id) => {

    //     confirmAlert({
    //         title: 'Confirmation Box',
    //         message: 'Are you sure you want to do this.',
    //         buttons: [
    //           {
    //             label: 'Yes',
    //             onClick: async(id) => {
    //                 let result= await fetch("http://localhost:4000/delete/${id}",{
    //                     method: 'DELETE'
    //                 });
    //                 result= await result.json();
    //                 if(result){
    //                     alert("Contact is Deleted");
    //                     //getContacts();
    //                 }

    //             }
    //           },
    //           {
    //             label: 'No',
    //             onClick: () => {
    //                 return false;
    //             }
    //           }
    //         ]
    //       });

    // }


    return(
        <>
            <header>Contact List</header>
            <table>
                
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>DOB</th>
                        <th>Mobile No.</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>                

                    {data.map((item, i) => (
                        <tr key={i}>
                            <td>{item.i}</td>
                            <td>{item.FirstName}</td>
                            <td>{item.LastName}</td>
                            <td>{item.DOB}</td>
                            <td>{item.ContactNo}</td>
                            <td><button class="btn"><i class="fa fa-edit"></i></button></td>
                            {/* <td><button class="btn" onClick={DeleteContact(id)}><i class="fa fa-trash"></i></button></td> */}
                        </tr>
                    ))}
                    

                </tbody>
    
            </table>
        </>
    );
}

export default Table;
