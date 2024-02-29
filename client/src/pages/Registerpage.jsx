import React, { useState } from 'react'

const Registerpage = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
     e.preventDefault();

     fetch("http://localhost:8000/register",{
      method:"POST",
      body:JSON.stringify({userName, password}),
      headers:{"Content-Type":"application/json"}
     })
    
  }

  return (
    <div>
      <h2 className='display-5 my-5'>Register</h2>
      <form onSubmit={register}>
        <div class="mb-3">
          <label htmlFor="username" className="form-label">Enter Your username</label>
          <input type="text" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label htmlFor="password" className="form-label">Enter Your Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-outline-dark">Submit</button>
      </form>
    </div>
  )
}

export default Registerpage