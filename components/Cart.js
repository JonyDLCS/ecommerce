import { useRef } from "react"
import React from 'react'
import Link from "next/link"
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft } from "react-icons/ai";
import {TiDeleteOutline} from 'react-icons/ti';
import toast from "react-hot-toast";
import { useStateContext } from "@/context/StateContext";
import { urlForImage } from "@/sanity/lib/image";


import { IoBag } from "react-icons/io5";

const Cart = () => {
  const cartRef = useRef();
  const {totalPrice, totalQuantities, onRemove,  cartItems, setShowCart, toggleCartItemQuantity} = useStateContext();
  return (
    <div className="fixed z-50" ref={cartRef}>
      <div onClick={()=>setShowCart(false)} className="bg-black opacity-50 fixed  top-0 left-0 bottom-0 right-0 z-30"></div>
      <div className="bg-white fixed right-0 top-0 bottom-0 z-50 max-w-sm w-full p-6">
          <div className="flex justify-start items-center">
            <button type='button' className="bg-orange-200 rounded-md p-1 hover:bg-orange-300" onClick={()=>setShowCart(false)}>
              <AiOutlineLeft className="w-6 h-6 "/>
            </button>
            <div>
              <span className="pl-5 font-semibold">Tu Carrito</span>
              <span className="pl-5 text-sm text-orange-950">({totalQuantities} productos)</span>
            </div>
          </div>
          {cartItems.length <1 && (
            <div className="empty-cart flex flex-col h-full items-center justify-center ">
              <IoBag className="w-12 h-12 fill-orange-950 mx-auto "/>
              <h3 className="text-lg font-semibold mt-2">Tu carrito está vacío</h3>
              <Link href='/product' className="">
                <button className="bg-orange-200 hover:bg-orange-300 mt-6 font-medium rounded-md py-1 px-4" type="button" onClick={()=>setShowCart(false)}>
                  Ir al Catalogo
                </button>
              </Link>
            </div>
          )}
        
        <div className="cartWhitespace mt-12 ">
          {cartItems.length >=1 && cartItems.map((item, index)=>(
            <div className=" w-full h-fit flex  rounded-md mt-4" key={item._id}>
              <img className=" object-cover aspect-square h-24 w-24 rounded-md" src={urlForImage(item?.image[0]).url()} alt={item?.details}/>
              <div className="flex flex-col justify-between w-full">
                <div className="flex justify-between items-start pl-6">
                  <Link href={`/product/${item?.slug?.current}`}><h5 className="cartProductName font-bold text-md hover:text-orange-800 text-left pr-2">{item.name}</h5></Link>
                  <h4 className="font-semibold text-orange-950">${item?.price}</h4>
                </div>
                <div  className="flex w-full justify-between  pl-6">
                <div className='quantity-desc flex justify-center items-center  rounded-md border-2 overflow-hidden border-orange-300 bg-orange-200 w-fit  '>

                  <button className='minus px-4 py-1 h-full relative w-8   cursor-pointer hover:bg-orange-300' onClick={()=> toggleCartItemQuantity(item._id,'dec')}>
                      <AiOutlineMinus className='w-4 h-4 absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2  fill-orange-900'/>
                  </button>
                  <span className='num text-sm relative  font-medium px-5 border-solid border-orange-300 border-l-2 border-r-2 h-fit py-3'>
                      <span className='absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2'>{item.quantity}</span>
                  </span>
                  <button className='plus px-4 py-1 w-8 h-full relative  cursor-pointer hover:bg-orange-300' onClick={()=> toggleCartItemQuantity(item._id,'inc')}>
                      <AiOutlinePlus className='w-4 h-4 absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 fill-orange-900'/>
                  </button>
                </div>
                <button
                  type="button"
                  className="remove-item"
                  onClick={()=>onRemove(item)}
                >
                  <TiDeleteOutline className='fill-red-500 hover:fill-red-700 w-5 h-5'/>
                </button>

                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >=1 && (
          <div  className="w-full">
            <button className="bg-black hover:bg-neutral-900 bg- text-white rounded-md text-xl font-medium py-3 w-full mt-2" type="button">
              Pagar • ${totalPrice}
            </button>

          </div>
        )}
      </div>
    </div>
  )
}

export default Cart