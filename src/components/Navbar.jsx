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
    
    function mobilePreviousBackground(e) {
        e.target.style.background = 'none';
        e.target.style.color = '#fff';
    };
      

  return (
    <>
        <div className='w-full mt-3 ml-4 flex flex-row xs:justify-between sm:justify-start item-center'>
            <div className="sm:w-1/12 md:w-2/12"> 
                <img src={Logo} alt='logo' className='mt-2' />
            </div>
            <div className='sm:hidden cursor-pointer mr-7' onClick={handleToggle}>
                {navbarOpen ? 
                    <GrClose style={{ color: "#7b7b7b", width: "40px", height: "30px" }} /> 
                    : 
                    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                }
            </div>
        
            <div className="md:w-9/12 hidden sm:flex flex-row justify-between items-center">
                <ul className='md:w-6/12 lg:w-4/12 flex flex-row justify-between'>
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
            <div className="w-10/12 mt-5 mx-auto rounded-md p-5 h-full z-10 bg-PRIMARY_DARK_VIOLET flex flex-col">
                <ul className='w-12/12 flex flex-col items-center text-white content-between'>
                    <li className=''><a href='#' className='text-xl font-bold'>Features</a></li>
                    <li className='my-5'><a href='#features' className='text-xl font-bold'>Pricing</a></li>
                    <li className=''><a href='#works' className='text-xl font-bold'>Resources</a></li>
                    <div className='bg-white w-full h-0.5 mt-5'></div>
                    <button onMouseOver={changeBackground} onMouseOut={mobilePreviousBackground} className='outline-black w-full rounded-xl my-4 p-2 text-base font-normal' href='#'>Login</button>
                    <button onMouseOver={changeBackground} onMouseOut={mobilePreviousBackground} className='border-white w-full rounded-xl mb-4 border-2 p-2 text-base font-normal' href='#'>Sign Up</button>
                </ul>
            </div>}
    </>
  )
}

export default Navbar;