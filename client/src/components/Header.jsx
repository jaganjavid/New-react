import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <div className="container">
            <div className='header-wrapper'>
               <Link to="/">
                <h4 className='logo'>My blog</h4>
               </Link>

                <nav>
                    <Link to="/login" className="btn btn-outline-dark">Login</Link>
                    <Link to="/register" className="btn btn-outline-dark">Register</Link>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header