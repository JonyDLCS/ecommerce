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
    <div ref={cartRef}>
      <div>
        <button type='button' className="" onClick={()=>setShowCart(false)}>
          <AiOutlineLeft/>
          </button>
          <span>Tu Carrito</span>
          <span>{totalQuantities} productos</span>
          {cartItems.length <1 && (
            <div className="empty-cart">
              <IoBag/>
              <h3>Tu carrito está vacío</h3>
              <Link href='/products'>
                <button type="button" onClick={()=>setShowCart(false)}>
                  Ir a productos
                </button>
              </Link>
            </div>
          )}
        
        <div>
          {cartItems.length >=1 && cartItems.map((item, index)=>(
            <div className="" key={item._id}>
              <img src={urlForImage(item?.image[0]).url()}/>
              <div>
                <div>
                  <h5>{item.name}</h5>
                  <h4>{item.price}</h4>
                </div>
                <div >
                <div className='quantity-desc flex justify-center items-center  rounded-md border-2 overflow-hidden border-orange-300 bg-orange-200 w-fit ml-8 h-12'>

                  <button className='minus px-4 py-1 relative w-14 h-full   cursor-pointer hover:bg-orange-300' onClick={()=> toggleCartItemQuantity(item._id,'dec')}>
                      <AiOutlineMinus className='w-6 h-6 absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2  fill-orange-900'/>
                  </button>
                  <span className='num text-2xl relative  font-semibold px-6 py-1 border-solid border-orange-300 border-l-2 border-r-2 h-full' onClick=''>
                      <span className='absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2'>{item.quantity}</span>
                  </span>
                  <button className='plus px-4 py-1 w-14 relative h-full cursor-pointer hover:bg-orange-300' onClick={()=> toggleCartItemQuantity(item._id,'inc')}>
                      <AiOutlinePlus className='w-6 h-6 absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 fill-orange-900'/>
                  </button>
                </div>
                <button
                  type="button"
                  className="remove-item"
                  onClick={()=>onRemove(item)}
                >
                  <TiDeleteOutline/>
                </button>

                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >=1 && (
          <div >
            <button type="button">
              Pagar • ${totalPrice}
            </button>

          </div>
        )}
      </div>
    </div>
  )
}

export default Cart