import React, { useState } from 'react';
import { ReactComponent as Facebook } from "../assets/icon-facebook.svg";
import { ReactComponent as Instagram } from "../assets/icon-instagram.svg";
import { ReactComponent as Pinterest } from "../assets/icon-pinterest.svg";
import { ReactComponent as Twitter } from "../assets/icon-twitter.svg";

const Footer = () => {
    const [facebook, setFacebook] = useState(false);
    const [instagram, setInstagram] = useState(false);
    const [pinterest, setPinterest] = useState(false);
    const [twitter, setTwitter] = useState(false);

    // Facebook Icon Hover Effect
    const handleFacebookHover = () => {
        setFacebook(true);
    };
    const handleFacebookLeave = () => {
        setFacebook(false);
    };

    // Instagram Icon Hover Effect
    const handleInstagramHover = () => {
        setInstagram(true);
    };
    const handleInstagramLeave = () => {
        setInstagram(false);
    };

    // Pinterest Icon Hover Effect
    const handlePinterestHover = () => {
        setPinterest(true);
    };
    const handlePinterestLeave = () => {
        setPinterest(false);
    };

    // Twitter Icon Hover Effect
    const handleTwitterHover = () => {
        setTwitter(true);
    };
    const handleTwitterLeave = () => {
        setTwitter(false);
    };


    const handleMouseOver = (e) => {
        e.target.style.color = "#2acfcf";
    };

    const handleMouseLeave = (e) => {
        e.target.style.color = "#fff";
    };

  return (
    <div className='w-full  bg-NEUTRAL-_400 text-white xs:p-6 sm:p-16' id='footer'>
        <div className='xs:mx-0 sm:mx-10 sm:w-12/12 flex sm:flex-row xs:flex-col sm:justify-between'>
            <div className=' xs:w-6/6 sm:w-3/12'>
                <div className='text-3xl font-bold'>Shortly</div>
            </div>
            <div className='xs:w-6/6 xs:mt-5 sm:w-2/12 sm:mt-0 flex flex-col content-between'>
                <div className='text-2xl font-medium'>Features</div>
                <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className='mt-2 text-sm cursor-pointer font-light'>Link Shortening</div>
                <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className='mt-2 text-sm font-light cursor-pointer'>Branded Links</div>
                <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className='mt-2 text-sm font-light cursor-pointer'>Analytics</div>
            </div>
            <div className='xs:w-6/6 xs:mt-5 sm:w-2/12 sm:mt-0 flex flex-col content-between'>
                <div className='text-2xl font-medium'>Resources</div>
                <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className='mt-2 text-sm cursor-pointer font-light'>Blog</div>
                <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className='mt-2 text-sm cursor-pointer font-light'>Developers</div>
                <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className='mt-2 text-sm cursor-pointer font-light'>Support</div>
            </div>
            <div className='xs:w-6/6 xs:mt-5 sm:w-2/12 sm:mt-0 flex flex-col content-between'>
                <div className='text-2xl font-medium'>Company</div>
                <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className='mt-2 text-sm cursor-pointer font-light'>About</div>
                <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className='mt-2 text-sm cursor-pointer font-light'>Our Team</div>
                <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className='mt-2 text-sm cursor-pointer font-light'>Careers</div>
                <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className='mt-2 text-sm cursor-pointer font-light'>Contact</div>
            </div>
            <div className='xs:w-6/6 xs:mt-5 sm:mt-1 sm:w-2/12 flex flex-row justify-between'>
                {/* <div className="sm:w-6/12 flex flex-row justify-between"> */}
                    <Facebook fill={facebook ? "#2acfcf" : "#fff"} onMouseOver={handleFacebookHover} onMouseLeave={handleFacebookLeave} />
                    <Instagram fill={instagram ? "#2acfcf" : "#fff"} onMouseOver={handleInstagramHover} onMouseLeave={handleInstagramLeave} />
                    <Pinterest fill={pinterest ? "#2acfcf" : "#fff"} onMouseOver={handlePinterestHover} onMouseLeave={handlePinterestLeave} />
                    <Twitter fill={twitter ? "#2acfcf" : "#fff"} onMouseOver={handleTwitterHover} onMouseLeave={handleTwitterLeave} />
                {/* </div> */}
            </div>
        </div>
    </div>
  )
}

export default Footer