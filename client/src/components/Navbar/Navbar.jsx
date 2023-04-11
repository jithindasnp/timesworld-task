import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container ">
                <a className="navbar-brand ms-4" href="#" >Countries</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li className="nav-item px-5">
                            <Link to='/home' className="nav-link active"  >All</Link>
                        </li>
                        <li className="nav-item px-5">
                            <Link to='/asia' className="nav-link active"  >Asia</Link>
                        </li>
                        <li className="nav-item px-5">
                            <Link to='/europe' className="nav-link active"  >Europe</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
