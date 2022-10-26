import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import {AiOutlineYoutube} from 'react-icons/ai'
import {Link as LinkScroller} from 'react-scroll'
import Link from 'next/link';



const Footer = () => {
  return (
    <div className='bg-black '>
      
    <div className='max-w-[1240px] mx-auto py-6 px-4 grid lg:grid-cols-2 gap-8 text-gray-300 '>
    <p>
          <p className='lg:text-xl'> Do you want to be a partner or want to scale your AR business across 
          India.</p>
          <p>Drop a mail at <span className='text-[#00df9a] '><a href="mailto:partner@vamverse.com">partner@vamverse.com</a></span></p>
          </p>
      <div className='lg:col-span-2 flex justify-around mt-6 w-full'>
    <div>
    <h1 className='w-full text-3xl font-bold text-[#00df9a]'>VAMVERSE</h1>
        <ul>
            <li className='py-2 text-sm'>Office No. 18,</li>
            <li className='py-2 text-sm'>Ashirwad Shopping,</li>
            <li className='py-2 text-sm'>Ashirwad TownShip-1,</li>
            <li className='py-2 text-sm'>Udhna, Surat-394210</li>
        </ul>
    </div>
    <div>
       
        <ul className="cursor-pointer">
            <li className='py-2 text-sm  hover:underline'><LinkScroller to="home" smooth={true} duration={500}>Home</LinkScroller></li>
            <li className='py-2 text-sm  hover:underline'><LinkScroller to="webar" smooth={true} duration={500}>WebAR</LinkScroller></li>
            <li className='py-2 text-sm  hover:underline'><LinkScroller to="services" smooth={true} duration={500}>Services</LinkScroller></li>
            <li className='py-2 text-sm  hover:underline'><Link href="/about">About</Link></li>
        </ul>
    </div>
    <div>
   
    <ul>
        <li className='py-2 text-sm cursor-pointer'><a href="https://www.facebook.com/people/Vamverse/100086556952988/" target="_blank" rel="noreferrer"><FaFacebookSquare size={30} /></a></li>
        <li className='py-2 text-sm cursor-pointer'><a href="https://www.instagram.com/vamverse" target="_blank" rel="noreferrer"><FaInstagram size={30} /></a></li>
        <li className='py-2 text-sm cursor-pointer'><a href="https://twitter.com/vamverse" target="_blank" rel="noreferrer"><FaTwitterSquare size={30} /></a></li>
        <li className='py-2 text-sm cursor-pointer'><a href="https://www.youtube.com/channel/UCULWXOwErviOPCbfaoOqd7w" target="_blank" rel="noreferrer"><AiOutlineYoutube size={30} /></a></li>
    </ul>
</div>
   
   
      </div>
    </div>
    </div>
  );
};

export default Footer;
