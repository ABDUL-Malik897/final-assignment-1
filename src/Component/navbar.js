import React from 'react'
import { Link } from "react-router-dom"
import "../index.css"

const Navbar = () => {
    return (
    <header>
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <h2>Logo</h2>
                </div>
                <div className='links'>
                    <Link to= '/'>Home</Link>
                    <Link to= '/how'>How It Works</Link>
                    <Link to= '/features'>Features</Link>
                    <Link to= '/price'>Pricing</Link>
                    <button className='btn'>Create Account</button>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Navbar