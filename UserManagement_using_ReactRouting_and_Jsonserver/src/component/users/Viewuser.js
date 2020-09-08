import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Viewuser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [users, setUsers] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })
    useEffect(() => {
        loadUser()
    }, [])
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUsers(result.data);
        // console.log(result)
    }

    return (
        <div className="container">
            <div className="container mx-auto p-5 viewuserlist">
                <Link className="btn " to="/userlist"><i class="fa fa-arrow-circle-left fa-3x faa"></i></Link>
                <h1 className="display-4">User Id:{id}</h1>
                <ul class="list-group w-50">
                    <li class="list-group-item"><span className="viewlist">Name:</span> {users.name}</li>
                    <li class="list-group-item"><span className="viewlist">UserName:</span> {users.username}</li>
                    <li class="list-group-item"><span className="viewlist">Email:</span> {users.email}</li>
                    <li class="list-group-item"><span className="viewlist">Mobile No:</span> {users.phone}</li>
                    <li class="list-group-item"><span className="viewlist">Website:</span> {users.website}</li>
                </ul>
            </div>
        </div>
    )
}
export default Viewuser