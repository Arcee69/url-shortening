import React from 'react';
import Illustration from "../assets/illustration-working.svg";
import InputUrl from './Input';

const Content = () => {

    function changeBackground(e) {
        e.target.style.background = '#2acfcf';
        e.target.style.color = '#fff';
    };

    function previousBackground(e) {
        e.target.style.background = 'none';
        e.target.style.color = 'black';
        e.target.style.border = '1px solid #000';
    }; 

  return (
    <>
        <div className='w-full ml-4 flex flex-row justify-between items-center mt-4'>
            <div className='w-6/12 flex flex-col content-center'>
                <div className='font-extrabold text-6xl text-NEUTRAL-_300 w-4/6'>More than just shorter links</div>
                <div className='w-4/6 font-normal text-NEUTRAL-_200'>
                    Build your brand's recognition and get detailed insights on how your links are performing
                </div>
                <button onMouseOver={changeBackground} onMouseOut={previousBackground} className='w-28 mt-5 outline-none border rounded-xl text-black text-sm p-2 font-normal'>Get Started</button>
            </div>
            <div className='w-6/12'>
                <img src={Illustration} alt="Illustration" />
            </div>
        </div>
        <InputUrl />
    </> 
  )
}

export default Content