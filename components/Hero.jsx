import Image from 'next/image'
import React from 'react'
import cube from '../assets/cube.gif'
import Partcles from './Particles'


const Header = () => {
 
  return (
<>
  <div id="home" className=' overflow-hidden max-w-screen w-full h-screen bg-[#131A26] relative z-[-1] flex justify-center text-white ss:pt-[0px] md:h-full lg:h-screen '>
    <div className='container'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
   <Image layout="responsive" className='w-[410px] lg:w-[500px] mx-auto lg:my-[80px] md:my-[40px] z-[-1]' src={cube} alt='/' />
   <div className='flex flex-col justify-center mx-auto px-6 '>
     <h1 className='font-bold md:text-6xl sm:text-5xl float-left text-3xl text-[#ffffff] u'>We Make Reality</h1>
      <p className='font-bold text-2xl mt-2 sm:text-xl text-[#00DF9A] '>Join our hands to scale your bussiness with latest augmented reality technologies</p>
</div>
<Partcles/>
  </div>
  </div>  
  </div>
</>
  )
}

export default Header