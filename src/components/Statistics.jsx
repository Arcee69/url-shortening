import React from 'react';
import Brand from "../assets/icon-brand-recognition.svg";
import Detailed from "../assets/icon-detailed-records.svg";
import Customizable from "../assets/icon-fully-customizable.svg";


const Statistics = () => {
  return (
        <div className='w-full bg-NEUTRAL-_100'>
            <div className='w-6/6 flex flex-col text-center items-center'>
                <div className='sm:w-2/6 xs:w-5/6 mx-auto mt-24'>
                    <div className='font-bold text-2xl text-NEUTRAL-_400'>Advanced Statistics</div>
                    <div className='text-NEUTRAL-_300 text-base mt-2'>
                        Track how your links are performing across the web with our advanced statistics dashboard
                    </div>
                </div>  
            </div>
            <div className='w-12/12 flex sm:flex-row xs:flex-col sm:mt-10 xs:mt-14'>
                <div className="flex sm:flex-row xs:flex-col justify-center items-center mb-20">
                    <div className='bg-white sm:w-3/12 xs:w-10/12'>
                        <div className='bg-PRIMARY_DARK_VIOLET sm:ml-4 xs:mx-auto sm:mx-0 relative -top-8 w-16 h-16 items-center p-3' style={{ borderRadius: "100%"}}>
                            <img src={Brand} alt="brand" className='mx-auto h-8 w-8' />
                        </div>
                        <div className='w-6/6 flex flex-col xs:p-3 xs:text-center xs:mb-4 sm:mb-0 sm:text-left sm:p-6'>
                            <div className='text-NEUTRAL-_300 font-bold text-xl'>Brand Recognition</div>
                            <div className='mt-3 text-NEUTRAL-_200 text-sm'>
                                Boost your brand recognition with each click. Generic links don't
                                mean a thing. Branded links help instil confidence in your content
                            </div>
                        </div>
                    </div>
                    <div className='bg-PRIMARY_CYAN xs:w-4 xs:h-14 sm:w-14 sm:h-4'></div>
                    <div className='bg-white sm:w-3/12 xs:w-10/12 sm:mt-8'>
                        <div className='bg-PRIMARY_DARK_VIOLET sm:ml-4 xs:mx-auto sm:mx-0 relative -top-8  w-16 h-16 items-center p-3' style={{ borderRadius: "100%"}}>
                            <img src={Detailed} alt="detail" className='mx-auto h-10 w-10' />
                        </div>
                        <div className='w-6/6 flex flex-col xs:p-3 xs:text-center xs:mb-4 sm:mb-0 sm:text-left sm:p-6'>
                            <div className='text-NEUTRAL-_300 font-bold text-xl'>Detailed Records</div>
                            <div className='mt-3 text-NEUTRAL-_200 text-sm'>
                                Gain insights into who is clicking your links. Knowing when and where people engage
                                with your content helps inform better decisions.
                            </div>
                        </div>   
                    </div>
                    <div className='bg-PRIMARY_CYAN xs:w-4 xs:h-14 sm:w-14 sm:h-4'></div>
                    <div className='bg-white sm:w-3/12 xs:w-10/12 sm:mt-16'>
                        <div className='bg-PRIMARY_DARK_VIOLET relative sm:ml-4 xs:mx-auto sm:mx-0 -top-8  w-16 h-16 items-center p-3' style={{ borderRadius: "100%"}}>
                            <img src={Customizable} alt="customizable" className='mx-auto h-10 w-10' />
                        </div>
                        <div className='w-6/6 flex flex-col xs:p-3 xs:text-center xs:mb-4 sm:mb-0 sm:text-left sm:p-6'>
                            <div className='text-NEUTRAL-_300 font-bold text-xl'>Fully Customizable</div>
                            <div className='mt-3 text-NEUTRAL-_200 text-sm'>
                                Improve brand awareness and content discoverability through customizable links, 
                                supercharging audience engagement.
                            </div>
                        </div>  
                    </div>
                </div>    
            </div>
        </div>
  )
}

export default Statistics