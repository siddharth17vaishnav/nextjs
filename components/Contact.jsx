import React,{useState,useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [form,setForm]=useState({}); 
  const email ={
    email:'bro2gmail.com'
  }

  const config={
    Host:'smtp.elasticemail.com',
    Username:'siddharth17vaishnav@gmail.com',
    Password:'48E371036745D4357B311270EBECC39BFBF1',
    To : 'siddharth.vaishnav2gmail.com',
    From : "asdasd@gmail.com",
    Subject : "This is the subject",
    Body : `hello from ${form.email}`
  }

  const changeHandler=(event)=>{
    setForm({...form,[event.targnet.name]:[event.target.value]})
  }

  const handleForm=(event)=>{
    event.preventDefault();
    console.log(form)
    if(window.Email){
      window.Email.send(config).then((res)=>{console.log("RESPONSE====>>>>>",res)});
    }
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
              onChange={changeHandler}
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