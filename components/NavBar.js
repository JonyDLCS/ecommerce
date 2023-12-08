'use client'
import { SnsLogo } from '@/public/snsLogo'
import React from 'react'
import { IoBag } from "react-icons/io5";
import { HiShoppingBag } from 'react-icons/hi'
import Link from 'next/link'
import Cart  from './Cart';
import { useStateContext } from '@/context/StateContext';


const NavBar = () => {
  const {showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <nav className="  bg-white z-20  pt-8 pb-6 px-6 h-[108px] text-center flex justify-between items-center gap-4 w-full">
        <Link href='/'><SnsLogo /></Link>
        <ul className=' flex flex-row gap-16 font-semibold list-none items-center'>
          <li className='hidden sm:block cursor-pointer text-black hover:text-orange-800'><Link href='/' className= 'w-full h-full'>Inicio</Link></li>
          <li className='hidden sm:block cursor-pointer text-black hover:text-orange-800' ><Link href='/product' className= 'w-full h-full '>Productos</Link></li>
          <li className=' cursor-pointer text-black hover:text-orange-800 relative'><button type='button' onClick={() => {setShowCart(true)}}><IoBag className='w-8 h-8'/><span className=' text-white  text-xs absolute left-1/2 top-1/2 -translate-y-[6px] -translate-x-1/2'>{totalQuantities}</span></button></li>
        </ul>  
        {showCart && <Cart/>}
    </nav>
  )
}

export default NavBar