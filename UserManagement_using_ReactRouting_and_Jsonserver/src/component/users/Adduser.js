import React,{useState} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom'
const Adduser =()=>{
    let history=useHistory()
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
      if(name=="" || username=="" || email=="" || phone=="" || website=="" )
      {
          alert("please enter data to add!!")
      }else{
        await axios.post("http://localhost:3003/users",users);
        history.push('/userlist')
      }
    
  }
    return(
        <div className="container">
           
            <div className="container w-75 mx-auto shadow p-5">
            <h1 className="text-center mb-4">Adduser</h1>
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
                
                <button type="submit" class="btn btn-primary btn-block mb-4">Add user</button>
            </form>
        </div>
        </div>
      
    )
}
export default Adduser;