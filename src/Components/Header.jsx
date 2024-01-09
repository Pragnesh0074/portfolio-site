import * as React from "react";
import { Link , Outlet } from "react-router-dom";
import './Header.css';
import logo from "../assets/logo_white.png"

function Header() {
    return (
        <div className='flex flex-col md:flex-row justify-evenly pt-8 pb-2 ml-10 md:ml-0'>
            <div className="text-white text-base font-bold font-['Fira Code'] flex flex-row">
                <img src={logo} alt="" height={50} width={50} />
                <span className="flex items-center justify-center ml-5">Code Demon</span>
            </div>
            <div className='navLinks flex flex-row mt-5 md:mt-0' >
                <Link to="/" className="mx-0 md:mx-2" style={{color:'white'}}>Home</Link>
                <Link to="/work" className="mx-2" style={{color:'white'}}>Work</Link>
                <Link to="/about" className="mx-2" style={{color:'white'}}>About</Link>
                <Link to="/contact" className="mx-2" style={{color:'white'}}>Contact</Link>
                <Outlet />
            </div>
        </div>
    );
}

export default Header;