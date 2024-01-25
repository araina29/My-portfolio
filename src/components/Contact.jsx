import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submit action.
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('raina.aryaman25@gmail.com')}&su=${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`From: ${formData.email}\n\nMessage: ${formData.message}`)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Send me a message on </p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange} />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' value={formData.message} onChange={handleChange}></textarea>
        <button type='submit' className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact;
