import { useState, useEffect } from 'react';
import './tableStyles.css'
// function TableData({name,location,id})
const [data,setData] = useState(null);

function Table(setData){
    // const [data,setData] = useState(null);
    
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

    return(
        <>
            <header>Search Results.....</header>
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
                   
    {/* DUMMY DATA............................................................... */}
                    <tr>
                        <td>ID1</td>
                        <td>D_FName1</td>
                        <td>D_LName1</td>
                        <td>D_DOB1</td>
                        <td>D_Mobile1</td>
                        <td><button class="btn"><i class="fa fa-edit"></i></button></td>
                        <td><button class="btn"><i class="fa fa-trash"></i></button></td>
                    </tr>

                    <tr>
                        <td>ID2</td>
                        <td>D_FName2</td>
                        <td>D_LName2</td>
                        <td>D_DOB2</td>
                        <td>D_Mobile2</td>
                        <td><button class="btn"><i class="fa fa-edit"></i></button></td>
                        <td><button class="btn"><i class="fa fa-trash"></i></button></td>
                    </tr>

                    <tr>
                        <td>ID3</td>
                        <td>D_FName3</td>
                        <td>D_LName3</td>
                        <td>D_DOB3</td>
                        <td>D_Mobile3</td>
                        <td><button class="btn"><i class="fa fa-edit"></i></button></td>
                        <td><button class="btn"><i class="fa fa-trash"></i></button></td>
                    </tr>

                    <tr>
                        <td>ID4</td>
                        <td>D_FName4</td>
                        <td>D_LName4</td>
                        <td>D_DOB4</td>
                        <td>D_Mobile4</td>
                        <td><button class="btn"><i class="fa fa-edit"></i></button></td>
                        <td><button class="btn"><i class="fa fa-trash"></i></button></td>
                    </tr>


                    {/* <tr>
                        <td>{data.name}</td>
                        <td>{data.id}</td>
                        <td>{data.created_at}</td>
                        <td>{data.login}</td>

                    </tr> */}
                    
                    {/* {data.map((item, i) => (
                        <tr key={i}>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))} */}
                    

                </tbody>
    
            </table>
        </>
    );
}

export default Table;