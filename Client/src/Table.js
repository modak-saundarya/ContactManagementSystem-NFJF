import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { useState, useEffect } from 'react';
import './tableStyles.css'

function Table(){
    const [data,setData] = useState(null);

    useEffect(() => {
        fetch(
             'https://api.github.com/users/modak-saundarya'
            // 'https://jsonplaceholder.typicode.com/posts'
        ).then((response) => response.json())
        .then(setData);
    }, []);  
    // empty [] to make api request only once when the page renders.6.1
    // if(data)
    //     return(
    //         <pre>{JSON.stringify(data,null,2)}</pre>
    //     );
    // ------------------------Search------------------------------
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

    let DeleteContact = async(id) => {

        confirmAlert({
            title: 'Confirmation Box',
            message: 'Are you sure you want to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: async(id) => {
                    let result= await fetch("http://localhost:4000/delete/${id}",{
                        method: 'DELETE'
                    });
                    result= await result.json();
                    if(result){
                        alert("Contact is Deleted");
                        //getContacts();
                    }

                }
              },
              {
                label: 'No',
                onClick: () => {
                    return false;
                }
              }
            ]
          });

    }


    return(
        <>
            {/* Search Bar..................................................... */}
            <div class="search">
                <input class="search bar" type="text"  value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder="Search by FirstName"/>
                <button onClick={searchSubmit} type="submit"><i class="fa fa-search"></i></button>
            </div>
            <h3>Search Results.....</h3>
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
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.dob}</td>
                            <td>{item.mobileNo}</td>
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
