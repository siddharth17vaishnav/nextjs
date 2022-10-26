import Image from 'next/image'
import React from 'react'
import AR from '../assets/ar.gif'


const FirstQoute = () => {
  return (
    <div className='w-full items-center  '>
    <div className='h-full bg-[#00df9a] text-4xl  italic '>
     <h5  className='text-center pt-8 pb-8 max-w-[80%] mx-auto text-white'> Grab the best <span className='text-[#000000]'>WebAR</span> solution for your Business. </h5>
      
      </div>
      <div className='w-full bg-white px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2' id="webar">
        <Image layout="responsive" className='w-[500px] mx-auto my-4' src={AR} alt='/' />
        <div className='flex flex-col justify-center' >
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4  place-items-start'>What is WebAR?</h1>
          <p className="text-justify">
          Web-based Augmented reality (AR) is a simulated interactive experience of a real-world environment, viewable on any standard iOS or Android device camera. Vamverse creates interactive 3D models of your products and integrate them in your website and allow user to view the contents in their own space with a brand-related experience. It give customers the ability to view products from every angle, zoom in and out, and even try on different outfits with a 360-degree view.
          </p>
        
        </div>
      </div>
     </div>
</div>

  )
}

export default FirstQoute