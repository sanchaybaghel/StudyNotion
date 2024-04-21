import React from 'react'
import ContactDetails from '../components/ContactPage/ContactDetails'

import ContactUsForm from '../components/ContactPage/ContactUsForm'
const Contact = () => {
  return (
    <div className='flex flex-row  mx-auto'>
    <div className=' mt-7 '>
    <ContactDetails/>
    </div>

    <div className='gap-2'>
    <div className='flex flex-col mt-7 border-blue-900 border-2 mx-3 p-6'>
     <div className='text-white text-2xl '>
      Got a Idea? We've got the skills Let's team up
      <p>
        Let's team Up
      </p>
     </div>
     <div className='text-slate-500'>
      Tell us more about yourself and whaat you're got in mind
     </div>
     
     <div className='text-white mt-6'>
     <ContactUsForm/>
      
     </div>

    </div>

    </div>
   
      
    </div>
  )
}

export default Contact
