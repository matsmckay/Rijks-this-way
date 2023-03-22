import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaintBrush } from 'react-icons/fa';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="App">
                <div className="wrapper">
                    <h1>Let's view some priceless works of art!</h1>
                    <p>(Guaranteed to leave you 5% more cultured after every search! Results may vary)</p>
                    <div className="nav-center">
                        <Link to="/">
                            <FaPaintBrush />
                        </Link>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                            About
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* END .wrapper */}
            </div>
            {/* END .app */}
        </nav>
    )
}

export default Navbar;