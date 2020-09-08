import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useHistory,useParams} from 'react-router-dom'
const Edituser =()=>{
    let history=useHistory();
    const {id}=useParams();
  const [users,setUsers]=useState({
      name:"",
      username:"",
      email:"",
      phone:"",
      website:""
  })
  const{name,username,email,phone,website}=users;
  const onInputchange =(e)=>{
      setUsers({...users,[e.target.name]:e.target.value});
      

  }
  const onSubmitchange= async e=>{
      e.preventDefault();
     await axios.put(`http://localhost:3003/users/${id}`,users);
     history.push('/userlist')
  }
  useEffect(()=>{
      loadUser()
  },[])
  const loadUser = async ()=>{
      const result =await axios.get(`http://localhost:3003/users/${id}`);
      setUsers(result.data);
     // console.log(result)
  }
    return(
        <div className="container">
           
            <div className="container w-75 mx-auto shadow p-5">
            <h1 className="text-center mb-4">Edituser</h1>
             <form onSubmit={e=>onSubmitchange(e)}>
             <div class="form-group">
                   
                   <input type="text" name="name" class="form-control form-control-lg" value={name} onChange={e=>onInputchange(e)} placeholder="Enter your name" />
                  
               </div>
                <div class="form-group">
                    
                    <input type="text" name="username" class="form-control form-control-lg" value={username} onChange={e=>onInputchange(e)} placeholder="enter username" />
                </div>
                <div class="form-group">
                   
                   <input type="email" name="email" class="form-control form-control-lg" value={email} onChange={e=>onInputchange(e)} placeholder="Enter email" />
                  
               </div>
                <div class="form-group">
                   
                    <input type="text" name="phone" class="form-control form-control-lg" value={phone} onChange={e=>onInputchange(e)} placeholder="enter phone number" />
                  
                </div>
                <div class="form-group">
                   
                    <input type="text" name="website" class="form-control form-control-lg" value={website} onChange={e=>onInputchange(e)} placeholder="enter website name" />
                </div>
                
                <button type="submit" class="btn btn-primary btn-block mb-4">Edit user</button>
            </form>
        </div>
        </div>
      
    )
}
export default Edituser;