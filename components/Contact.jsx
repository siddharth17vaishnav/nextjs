import React,{useState,useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const Contact = () => {
  const [email,setEmail]=useState(""); 
 

  const handleForm=(e)=>{
    e.preventDefault();
    axios.post('/api/contact',{email:email}).then((res)=>{
      console.log(res.data)
      if(res.data==='success'){
        toast.success("Great! we will get back to you soon",{
          position:"top-center"
        });
      }
      else{
        toast.error(res.data,{
          position:"top-center"
        });
      }
    });
   
  }
  
  return (
    <div id="contact" className='w-full pb-10  px-4 overflow-hien'>
    <ToastContainer/>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
          Are you looking to excel your business.
          </h1>
          <p className='text-[#00df9a] font-bold'> Contact us today.</p>
          <hr className='lg:hidden'/>
        
        </div>
        <div className='my-4'>
        <form onSubmit={handleForm} >
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black outline outline-2  outline-offset-2'
              type='email'
              placeholder='Enter Email'
              onChange={(e)=>setEmail(e.target.value)}
              name='email'
              id="email"
           
            />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3' type="submit">
              Contact Us
            </button>
          </div>
          </form>
         
        </div>
      </div>
    </div>
  )
}

export default Contact