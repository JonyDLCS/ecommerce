'use client';
import React, { useState } from 'react'
import { urlForImage } from '@/sanity/lib/image';

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useStateContext } from '@/context/StateContext';


const ProductInformation = ({product}) => {
    const [index, setIndex] = useState(0);
    const {decQty, incQty, qty, onAdd} = useStateContext();
    
    const {price,name,image,details} = product;

  return (
    <>
        <div className='flex flex-col sm:flex-row mx-auto   mt-10'>
            <div className='w-full sm:w-1/2 sm:pr-8   overflow-hidden '>
                <div className=' ' >
                    <img className=' object-cover aspect-square' src={urlForImage(image && image[index]).url()}/>
                </div>
                <div className='flex gap-4 flex-wrap pt-6 w-full'>
                    {image?.map((item,i) =>(
                        <img key={i}
                        src={urlForImage(item).url()}
                        className={i=== index? 'smallImage selectedImage' : 'smallImage'}
                        onMouseEnter={()=> setIndex(i)}
                        />
                    ))}
                </div>
                </div>

                <div className='w-full sm:w-1/2 product-details-desc '>
                    <h1 className=' mt-8 text-5xl font-bold pb-4'>{name}</h1>
                    <h4 className=' text-xl  font-semibold'>Detalles: </h4>
                    <p className=' py-2'>{details}</p>
                    <p className='price text-4xl font-black text-orange-900 py-8'>${price}</p>
                    <div className='quantity flex  items-center my-6'>
                        <h3 className='text-xl font-semibold'>Cantidad:</h3>
                        <div className='quantity-desc flex justify-center items-center  rounded-md border-2 overflow-hidden border-orange-300 bg-orange-200 w-fit ml-8 h-12'>

                            <button className='minus px-4 py-1 relative w-14 h-full   cursor-pointer hover:bg-orange-300' onClick={decQty}>
                                <AiOutlineMinus className='w-6 h-6 absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2  fill-orange-900'/>
                            </button>
                            <span className='num text-2xl relative  font-semibold px-6 py-1 border-solid border-orange-300 border-l-2 border-r-2 h-full' onClick=''>
                                <span className='absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2'>{qty}</span>
                            </span>
                            <button className='plus px-4 py-1 w-14 relative h-full cursor-pointer hover:bg-orange-300' onClick={incQty}>
                                <AiOutlinePlus className='w-6 h-6 absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 fill-orange-900'/>
                            </button>
                        </div>


                    </div>
                    <div className='buttons'>
                        <button type='button' className='add-to-cart w-full bg-orange-200 hover:bg-orange-300 border-2 rounded-md border-orange-300 text-larger font-bold tracking-widest py-2 my-2' onClick={()=> onAdd(product, qty)}>
                            Agregar al Carrito
                        </button>
                        <button type='button' className='add-to-cart w-full bg-orange-900 hover:bg-orange-950 border-2 text-white rounded-md border-orange-950 text-larger font-bold tracking-widest py-2 my-2' onClick=''>
                            Comprar Ahora
                        </button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ProductInformation