import React from 'react';
import Illustration from "../assets/illustration-working.svg";
import InputUrl from './Input';

const Content = () => {

    function changeBackground(e) {
        e.target.style.background = '#2acfcf';
        e.target.style.color = '#fff';
        e.target.style.border = "1px solid #fff";
    };

    function previousBackground(e) {
        e.target.style.background = 'none';
        e.target.style.color = 'black';
        e.target.style.border = '1px solid #000';
    }; 

  return (
    <>
        <div className='w-full sm:ml-4 flex xs:flex-col sm:flex-row sm:justify-between items-center mt-4'>
        <div className='w-12/12 sm:hidden'>
                <img src={Illustration} alt="Illustration" className='' />
            </div>
            <div className='sm:w-6/12 xs:w-12/12 flex flex-col xs: xs:mt-3 xs:items-center sm:items-start sm:mt-0 sm:text-left sm:content-center'>
                <div className='font-extrabold xs:text-2xl sm:text-6xl text-NEUTRAL-_300 xs:w-12/12 sm:w-6/6'>More than just shorter links</div>
                <div className='xs:w-12/12 xs:mt-2 xs:mr-2 sm:mr-0 xs:text-center sm:w-4/6 sm:text-left sm:mt-0 font-normal text-NEUTRAL-_200'>
                    Build your brand's recognition and get detailed insights on how your links are performing
                </div>
                <button onMouseOver={changeBackground} onMouseOut={previousBackground} className='w-28 mt-5 outline-none border rounded-xl text-black text-sm p-2 font-normal'>Get Started</button>
            </div>
            <div className='w-6/12 xs:hidden sm:block'>
                <img src={Illustration} alt="Illustration" />
            </div>
        </div>
        <InputUrl />
    </> 
  )
}

export default Content