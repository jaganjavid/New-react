import React from 'react'

const Loginpage = () => {
  return (

    <div>
      <h2 className='display-5 my-5'>Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Enter Your username</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Enter Your Password</label>
          <input type="email" className="form-control" />
        </div>
        <button type="submit" className="btn btn-outline-dark">Submit</button>
      </form>
    </div>

  )
}

export default Loginpage