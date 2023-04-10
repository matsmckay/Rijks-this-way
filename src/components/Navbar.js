import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaintBrush } from 'react-icons/fa';
import { BsEasel } from 'react-icons/bs'


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="nav-title">
                    <h1>N<FaPaintBrush />ght at the R<FaPaintBrush/>jks Museum</h1>
            </div>
            <div className="nav-center">
                <div className="nav-center">
                    <Link to="/">
                        <BsEasel/>Home
                    </Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/about">
                        About
                        </Link>
                    </li>
                </ul>
                {/* END .wrapper */}
            </div>
            {/* END .nav-center */}
        </nav>
    )
}

export default Navbar;