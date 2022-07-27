import { useState, useEffect } from 'react';

// function TableData({name,location,id})

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

    return(
        <>
            <h1>Table Data</h1>
            <tbody>
                <tr>
                    <th>User Id</th>
                    <th>First Name</th>
                    <th>DOB</th>
                    <th>Mobile No.</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.id}</td>
                    <td>{data.created_at}</td>
                    <td>{data.login}</td>

                </tr>
                
                {/* {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                    </tr>
                ))} */}
                

            </tbody>
 
        </>
    );
}

export default Table;