import { SnsLogo } from '@/public/snsLogo'
import React from 'react'
import { HiShoppingBag } from 'react-icons/hi'


const NavBar = () => {
  return (
    <nav className="  bg-white z-20  pt-8 pb-6 px-6 text-center flex justify-between items-center gap-4 w-full">
        <SnsLogo/>
        <ul className=' flex flex-row gap-16 font-semibold list-none items-center'>
          <li className=' cursor-pointer hover:text-orange-800'><p>Inicio</p></li>
          <li className=' cursor-pointer hover:text-orange-800' ><p>Productos</p></li>
          <li className=' cursor-pointer hover:text-orange-800'><HiShoppingBag className='w-8 h-8'/></li>
        </ul>  
      </nav>
  )
}

export default NavBar