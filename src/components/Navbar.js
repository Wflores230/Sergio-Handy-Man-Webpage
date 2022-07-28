import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const  handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() =>{
        showButton()
    }, [])

    window.addEventListener('resize', showButton);
  return (
    <div>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    Sergio HM <i class="fa-solid fa-screwdriver-wrench"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={ click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/reviews' className='nav-links' onClick={closeMobileMenu}>
                            Reviews
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                </ul>
                {/*button && <Button buttonStyle='btn--outline'>EMAIL US</Button>*/}
            </div>
        </nav>
    </div>
  )
}

export default Navbar