import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import Logo from "../assets/logo.svg";

const Navbar = () => {
    // const [active, setActive] = useState("Home");
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
      }

    function changeBackground(e) {
        e.target.style.background = '#2acfcf';
        e.target.style.color = '#fff';
    };

    function previousBackground(e) {
        e.target.style.background = 'none';
        e.target.style.color = 'black';
    }; 
      

  return (
    <>
        <div className='w-full mt-3 ml-4 flex flex-row item-center'>
            <div className="w-2/12"> 
                <img src={Logo} alt='logo' className='mt-2' />
            </div>
            <div className='md:hidden cursor-pointer' onClick={handleToggle}>
                {navbarOpen ? 
                    <GrClose style={{ color: "#7b7b7b", width: "40px", height: "30px" }} /> 
                    : 
                    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                }
            </div>
        
            <div className="w-9/12 hidden md:flex flex-row justify-between items-center">
                <ul className='w-4/12 flex flex-row justify-between'>
                    <li className=''><a href='#' className='text-xl font-medium'>Features</a></li>
                    <li><a href='#' className='text-xl text-opacity-30'>Pricing</a></li>
                    <li><a href='#' className='text-xl'>Resources</a></li>
                </ul>
                <div className='w-3/12 flex flex-row justify-between'>
                    <button onMouseOver={changeBackground} onMouseOut={previousBackground} className='w-28 outline-none rounded-xl p-2 text-sm font-normal' href='#footer'>Login</button>
                    <button onMouseOver={changeBackground} onMouseOut={previousBackground} className='w-28 outline-none rounded-xl text-black text-sm p-2 font-normal'>Sign Up</button>
                </div>
            </div>
        </div>
            {navbarOpen && 
            <div className="w-12/12 mt-5 h-full z-10 bg-gray-400 flex flex-col">
                <ul className='w-12/12 flex flex-col content-between'>
                    <li className='border-b-2'><a href='#' className='text-xl font-bold'>Features</a></li>
                    <li className='border-b-2'><a href='#features' className='text-xl text-opacity-30'>Pricing</a></li>
                    <li className='border-b-2'><a href='#works' className='text-xl'>Resources</a></li>
                    <hr />
                    <button onMouseOver={changeBackground} onMouseOut={previousBackground} className='outline-black rounded-md border-black border-2 p-2 text-base font-normal' href='#'>Login</button>
                    <button onMouseOver={changeBackground} onMouseOut={previousBackground} className='outline-black rounded-md border-black border-2 p-2 text-base font-normal' href='#'>Sign Up</button>
                </ul>
            </div>}
    </>
  )
}

export default Navbar;