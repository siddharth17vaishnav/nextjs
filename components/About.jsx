import Navbar from './Navbar'
import Footer from './Footer'
import Contact from './Contact'
import logo from '../assets/about-logo.jpeg'
import profileCEO from '../assets/ceo.jpg'
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import {AiOutlineYoutube} from 'react-icons/ai'
import Link from 'next/link'
import {useState} from 'react'
import LOGO from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from 'next/future/image'

const Index = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
   <div id="about">

    {/* navbar */}
    <div className="bg-[#131A26]">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className=" ">
         <Image width={200} height={100} objectFit="cover" src={LOGO} alt="vamverse logo"  />
        </h1>

        <ul className="hidden md:flex ">
          <li className="p-4 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 cursor-pointer">
            <Link href="/about" smooth={true} duration={500}>
              About
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden mr-4 ">
          {nav ? (
            <AiOutlineClose className="fixed bg-[#131A26]" size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className=" ">
            <Image layout="responsive" src={LOGO} alt="vamverse logo" className="w-[220px]" />
          </h1>
          <li className="p-4 cursor-pointer border-b border-gray-600">
            <Link href="/">
             
                Home
             
            </Link>
          </li>
         
          <li className="p-4 cursor-pointer border-b border-gray-600">
            <Link href="/about" smooth={true} duration={500}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
<div className='w-full h-[230px] flex justify-center mt-12 '>
<Image width={230} height={300} objectFit="cover"   src={logo} alt="logo" className=' rounded-full '/>
</div>
 <div className='mt-12 '>
  <h3 className='text-2xl font-bold flex justify-center px-12 '>SCALING THE POWER OF AR IN RETAIL AND ONLINE SHOPPING INDUSTRY
</h3>
<p className='mt-[92px]  text-xl md:text-2xl px-12 lg:px-[150px] text-justify'>Augmented reality (AR) is an enhanced version of what you see or experience in the real world. It is one of the most exciting new technologies to come on the scene in a long time. Our daily lives will be transformed by this new technology, allowing us to pull up overlays of information on anything we are curious about. Developing AR-enabled applications can be very costly. So, to overcome this we offer affordable AR services to small and medium companies.</p>
 <p className='mt-[42px] text-xl md:text-2xl px-12 lg:px-[150px] text-justify'>Vamverse is a stealth mode start-up, discovering the AR capabilities in retail and online shopping industry with deep learning based solutions. It is located in India’s one of the fastest and cleanest city Surat. It is a subsidiary company of <span className="text-[#00DF9A] font-bold">Uprising Tradex LLP</span>, established in 2022. Vamverse is a augmented reality software services company, providing outsourced WebAR development and managed services. Our outsourcing services cover all phases of WebAR development, integration, deployment, and maintenance. Our current offering includes 3D modelling, website development, and AR filters for brand promotions.</p>
 <p className='mt-[42px]  text-xl md:text-2xl  px-12 lg:px-[150px] text-justify'>We are diverse team of hard-working young developers. Our team has well experienced professionals working in different technologies including Web Development, Machine Learning, Artificial intelligence, UI/UX, AR and much more. We are working together to bring the best e-commerce solutions for organisations to build brand, values and trust with their customers. We also provide best support to our customers to outline their competitors.</p>
<p className='mt-[42px]  text-xl md:text-2xl  px-12 lg:px-[150px] text-justify'>And we are only just getting started.</p>
 </div>

 <div className='mt-[70px]'>
  <h5 className=' text-xl md:text-2xl px-12 md:px-[50px] lg:px-[150px] text-justify font-bold underline '>LEADERSHIP</h5>
  <div className='flex px-12 md:px-[20px] lg:px-[100px] mt-[50px] lg:flex-row flex-col '>
    <Image src={profileCEO} alt="profile" className='w-[200px] rounded-full mx-auto' />
    <div className='lg:ml-12 mt-4 '>
      <h2 className='text-2xl font-bold'>Saurabh Upadhyay</h2>
      <h5 className='text-xl '>Founder & CEO</h5>
      <br/>
      <p className='text-justify  '>As the Chief Executive Officer at Vamverse, Saurabh is responsible for definition and execution of Vamverse’s strategy, creating and implementing on the company’s vision and mission and shaping a unique and effective solutions for small and medium companies. 
Prior to Vamverse, he worked as a Machine Learning and DevOps Engineer in two different start-up companies. His deep interest lies in developing deep learning-based computer vision models mainly using tensorflow. He holds a bachelor’s degree in Computer Science from Gujarat Technological University. He also has multiple cloud certifications including Google, Microsoft and AWS. 
</p>
    
    </div>
  </div>
 </div>
 <br/><br/>
<hr/>
  <Contact/>
  {/* FOOTER */}
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

    </div>
 
  )
}

export default Index