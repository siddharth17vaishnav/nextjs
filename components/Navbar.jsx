import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link as LinkScroller } from 'react-scroll';
import LOGO from '../assets/logo.png';
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="bg-[#131A26]">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className=" ">
          {/* <Link to="/"> */}{' '}
          <Image
            width={200}
            height={100}
            objectFit="fit"
            src={LOGO}
            alt="vamverse logo"
            className="w-[220px]"
          />
          {/* </Link> */}
        </h1>

        <ul className="hidden md:flex ">
          <li className="p-4 cursor-pointer">
            {/* <Link to="/">Home</Link> */}
          </li>
          <li className="p-4 cursor-pointer">
            <LinkScroller to="webar" smooth={true} duration={500}>
              WebAR
            </LinkScroller>
          </li>
          <li className="p-4 cursor-pointer">
            <LinkScroller to="services" smooth={true} duration={500}>
              Services
            </LinkScroller>
          </li>
          <li className="p-4 cursor-pointer">
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden mr-4 ">
          {nav ? (
            <AiOutlineClose
              className="fixed bg-[#131A26] cursor-pointer"
              size={30}
            />
          ) : (
            <AiOutlineMenu size={30} className="cursor-pointer" />
          )}
        </div>
        <ul
          className={
            nav
              ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
              : 'ease-in-out duration-500 fixed left-[-100%]'
          }
        >
          <h1 className=" ">
            <Image
              width={200}
              height={100}
              objectFit="fit"
              src={LOGO}
              alt="vamverse logo"
              className="w-[220px]"
            />
          </h1>
          <li className="p-4 cursor-pointer border-b border-gray-600">
            {/* <Link to="/"> */}
            <LinkScroller to="home" smooth={true} duration={500}>
              Home
            </LinkScroller>
            {/* </Link> */}
          </li>
          <li className="p-4 cursor-pointer border-b border-gray-600">
            <LinkScroller to="webar" smooth={true} duration={500}>
              WebAR
            </LinkScroller>
          </li>
          <li className="p-4 cursor-pointer border-b border-gray-600">
            <LinkScroller to="services" smooth={true} duration={500}>
              Services
            </LinkScroller>
          </li>
          <li className="p-4 cursor-pointer border-b border-gray-600">
            <Link href="/about" >
            About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
