'use client'
import React from 'react';
import Image from 'next/image';

function Navbar() {
  return (
    <div className='flex  justify-between w-full bg-red-50'>
      <div>
        <Image 
        src={'/logo.png'}
        alt='Logo'
        width={150}
        height={40}/>
      </div>
      <div>
        <ul className='list-none'>
            <li>Home</li>
            <li>Portfolio</li>
            <li>About Me</li>
            <li>Testimonials</li>
        </ul>
      </div>
      <div>
        <button className='border-primary p-3 rounded-sm bg-black font-[jost]'>Contact Me</button>
      </div>
    </div>
  )
}

export default Navbar
