import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=''>
        <div className='py-4 flex items-center flex-col absolute left-0 right-0  bg-orange-950 h-36'>
    
          <a target='_blank' href='https://www.instagram.com/cely_sys/' className='flex flex-col items-center justify-center'> 
            <p className='text-white text-sm pt-4 pb-2'>¡Visítanos en Instagram!</p>
              <FaInstagram className='w-10 h-10  fill-white'/>
            <p className='text-white text-xs pt-2'>@cely_sys</p>
          </a>
        </div>
      </footer>
  )
}

export default Footer