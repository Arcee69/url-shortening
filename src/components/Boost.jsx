import React from 'react';

const Boost = () => {

    function changeBackground(e) {
        e.target.style.background = '#2acfcf';
        e.target.style.color = '#fff';
    }

    function previousBackground(e) {
        e.target.style.background = 'none';
        e.target.style.border = '1px solid #fff';
    }
    
  return (
    <div className='boost bg-PRIMARY_DARK_VIOLET' >
        <div className='flex flex-col content-center items-center'>
            <div className='flex flex-col content-center items-center my-10'>
                <div className='text-white sm:text-4xl xs:text-2xl font-semibold'>Boost your links today</div>
                <button onMouseOver={changeBackground} onMouseOut={previousBackground} className='w-32 mt-5 outline-none rounded-xl border text-white text-sm p-3 font-normal'>Get Started</button>
            </div>
            
        </div>
    </div>
    
  )
}

export default Boost