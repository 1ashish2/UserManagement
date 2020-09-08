import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Userlist=()=>{
    const [user, setUser] = useState([]);
    useEffect(() => {
        loadusers();
    }, [])
    const loadusers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse())
        //console.log(result.data);
    }
    const deletUser= async id=>{
        await axios.delete(`http://localhost:3003/users/${id}`)
        loadusers();
    }

    return(
       <div className="container py-4">
          <table class="table border shadow">
        <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">User name</th>
                <th scope="col">Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
           {
               user.map((user,index)=>(
                   <tr>
                    <td scope="row">{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link className="btn  mr-1" to={`/users/view/${user.id}`}><i class="fa fa-eye fa-2x faa"></i></Link>
                        <Link className="btn  mr-1" to={`/users/edit/${user.id}`}><i class="fa fa-edit fa-2x faa"></i></Link>
                        <Link className="btn " onClick={()=>deletUser(user.id)}><i class="fa fa-trash fa-2x faa"></i></Link>
                    </td>
                   </tr>
              
               ))
           }
        </tbody>
    </table>
       </div>
    )
}

export default Userlist;