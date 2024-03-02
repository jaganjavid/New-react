import React, { useState } from 'react'

const Registerpage = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {

     e.preventDefault();

     const response = await fetch("http://localhost:8000/register",{
      method:"POST",
      body:JSON.stringify({userName, password}),
      headers:{"Content-Type":"application/json"}
     })

   

     if(response.ok){
       alert("User Register Succesfully");
       return;
     }

     if(response.status === 400){
       response.json().then(e => alert(e.error));
     }
    
  }

  return (
    <div>
      <h2 className='display-5 my-5'>Register</h2>
      <form onSubmit={register}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Enter Your username</label>
          <input type="text" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Enter Your Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-outline-dark">Submit</button>
      </form>
    </div>
  )
}

export default Registerpage