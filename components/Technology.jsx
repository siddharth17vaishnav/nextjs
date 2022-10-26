import React from 'react'
import aws from '../assets/aws.png'
import adobe from '../assets/adobe.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import python from '../assets/python.png'
import tensor from '../assets/tensor.png'
import unity from '../assets/unity.png'
import unreal from '../assets/unreal.png'
import blender from '../assets/blender.png'
import figma from '../assets/figma.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination,Autoplay  } from "swiper";
import Image from 'next/image'



 const Technology = () => {
  return (
    <div className='justify-center text-center py-20 w-full'>
    <h5 className='text-[#40BA77] lg:text-3xl mt-[50px] font-semibold md:text-2xl sm:text-xl'>TECHNOLOGY</h5>

    <p className='lg:text-xl text-[12px] mx-4 pt-4 lg:mt-4'>AWS, GOOGLE CLOUD, REACT, NODE.JS, PYTHON, TENSORFLOW, UNITY, UNREAL, BLENDER</p>
    <div className='max-w-[80%] m-auto mt-16'>
    <Swiper
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
        slidesPerView={5}
        spaceBetween={5}
        freeMode={true}
        pagination={false}
        loop={true}
        modules={[FreeMode, Pagination,Autoplay]}
        className="mySwiper"
      >
 
        <SwiperSlide>  <Image width={100} height={100} src={aws} alt="logo" className='lg:w-[140px] lg:h-[140px] w-[50px] h-[50px]'/></SwiperSlide>
        <SwiperSlide>  <Image width={100} height={100} src={figma} alt="logo" className='lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]'/></SwiperSlide>
        <SwiperSlide>  <Image width={100} height={100} src={react} alt="logo" className='lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]'/></SwiperSlide>
        <SwiperSlide>  <Image width={100} height={100} src={node} alt="logo" className='lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] '/></SwiperSlide>
        <SwiperSlide> <Image width={100} height={100} src={blender} alt="logo" className='lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] '/></SwiperSlide>
        <SwiperSlide>  <Image width={100} height={100} src={unity} alt="logo" className='lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]'/></SwiperSlide>
        <SwiperSlide>   <Image width={100} height={100} src={unreal} alt="logo" className='lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]'/></SwiperSlide>
        <SwiperSlide>  <Image width={100} height={100} src={tensor} alt="logo" className='lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]'/></SwiperSlide>
        <SwiperSlide>  <Image width={100} height={100} src={adobe} alt="logo" className='lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]'/></SwiperSlide>
        <SwiperSlide>   <Image width={100} height={100} src={python} alt="logo" className='lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]'/></SwiperSlide>

      </Swiper>
      </div>
    </div>
  )
}

export default Technology
