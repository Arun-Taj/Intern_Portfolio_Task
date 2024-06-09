import React from 'react'
import './Contact.css'
import { FaFacebook, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

const Contact = () => {
  const links = [
    
    {
      id: 1,
      child: <>Facebook <FaFacebook size={25} /></>,
      href: 'https://www.facebook.com/arun.tajpuriya.526?mibextid=ZbWKwL'
    },
    {
      id: 2,
      child: <>LinkedIn <FaLinkedinIn size={25} /></>,
      href: 'https://linkedin.com/arun-tajpuriya-78923b286'
    },
    {
      id: 3,
      child: <>GitHub <FaGithub size={25} /></>,
      href: 'https://github.com/arun-taj'
    },
    {
      id:4,
      child:(
        <>Mail <HiOutlineMail size={25}/></>
      ),
      href:'mailto:aruntajpuriya1@gmail.com',
      
    },
    
  ];

  return (
    <div className='contact'>
       
      <div className='title'>
         <h1>Contact</h1>
         <div className='social'>
        <p>Get in touch</p>
        <ul className='links'>
          {links.map(({ id, child, href }) => (
            
            <li key={id}><a href={href}>{child}</a></li>
          ))}
        </ul>
        </div>
      </div>

      <div className='form-cont'>
        <p>Feel free to talk</p>
        <form action="https://formspree.io/f/mnqeeare" method='post'>
          <input type="text" placeholder='Enter your name' required autoComplete='off'/>
          <input type="email" placeholder='Enter your email' required autoComplete='off'/>
          <section className='section'>
          <textarea name="message" cols="50" rows="10"  autoComplete='off' required placeholder='Enter your message' minLength={10}></textarea>
          </section>
          <button className='btn'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
