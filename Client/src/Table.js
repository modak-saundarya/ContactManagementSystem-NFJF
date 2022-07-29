import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { useState, useEffect } from 'react';
import './tableStyles.css'
import { Link } from 'react-router-dom';

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

  
   

    let searchHandler = async (e) =>{
        console.warn(e.target.value);
        let searchName = e.target.value;
        if(searchName){
            let result = await fetch(`http://localhost:4000/search/${searchName}`);
            result = await result.json();
            if(result){
             setData(result);
            } 
        }else{
            getContacts();
        }

    }
    const deleteContact = async (id) => {
        console.warn(id);
        let result= await fetch(`http://localhost:4000/contact/${id}`,{
                        method: 'Delete'
                    });
                result= await result.json();
                if(result){
                    alert("Contact is Deleted");
                    getContacts();
        }
    }
    

    // let DeleteHandler = (id) => {


    //     confirmAlert({
    //         title: 'Confirmation Box',
    //         message: 'Are you sure you want to do this.',
    //         buttons: [
    //           {
    //             label: 'Yes',
    //             onClick: (id) => {
    //                 deleteContact(id);

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
            <input type="text" class="search-box" placeholder='Search By First Name' onChange={searchHandler}/>
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
                        <tr key={item._id}>
                            <td>{i+1}</td>
                            <td>{item.FirstName}</td>
                            <td>{item.LastName}</td>
                            <td>{item.DOB}</td>
                            <td>{item.ContactNo}</td>
                            <td><button class="btn"><Link to={'/edit/'+item._id}><i class="fa fa-edit"></i></Link></button></td>
                            <td><button class="btn" onClick={()=>deleteContact(item._id)}><i class="fa fa-trash"></i></button></td>
                        </tr>
                    ))}
                    

                </tbody>
    
            </table>
        </>
    );
}

export default Table;
