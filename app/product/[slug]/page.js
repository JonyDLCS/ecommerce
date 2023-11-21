
import React from 'react'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import '@/app/globals.css'
import Link from 'next/link';

export const dynamicParams = true;
 
export async function generateStaticParams() {
    const query = `*[_type == "product"]{
        slug{
            current
        }
    }`;
    const products = await client.fetch(query);
    return products.map((product) => ({
      slug: product.slug.current,
    }))
  }

export async function getProducts(slug) {
    const productsQuery = '*[_type =="product"]';
    const query = `*[_type == "product" && slug.current =='${slug}'][0]`;
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
    return JSON.parse(JSON.stringify({product, products}));
}

const ProductDetails = async ({params}) => {
    const res = await getProducts(params.slug);
    const product = res.product;
    const products = res.products;
    const {price,name,image,details} = product;
    let index = 0;
  return (
    <div className='max-w-[920px] mx-auto min-h-screen' >
        <div className='product-detail-container '>
            <div className='flex   mt-10'>
                <div className=' w-1/2  pr-8 overflow-hidden' >
                    <img className=' object-cover aspect-square' src={urlForImage(image && image[index]).url()}/>
                </div>
                <div className='small-images-container'>
                    {/*image?.map((item,i) =>(
                        <img
                        src={urlForImage(item).url()}
                        className=''
                        onMouseEnter={}
                        />
                    ))*/}
                </div>

                <div className='w-1/2 product-details-desc'>
                    <h1 className=' mt-8 text-5xl font-bold pb-4'>{name}</h1>
                    <h4 className=' text-xl  font-semibold'>Details: </h4>
                    <p className=' py-2'>{details}</p>
                    <p className='price text-4xl font-black text-orange-900 py-8'>${price}</p>
                    <div className='quantity flex  items-center my-6'>
                        <h3 className='text-xl font-semibold'>Cantidad:</h3>
                        <div className='quantity-desc flex justify-center items-center  rounded-md border-2 overflow-hidden border-orange-300 bg-orange-200 w-fit ml-8 h-12'>

                            <span className='minus px-4 py-1 relative w-14 h-full   cursor-pointer hover:bg-orange-300' onClick=''>
                                <AiOutlineMinus className='w-6 h-6 absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2  fill-orange-900'/>
                            </span>
                            <span className='num text-2xl relative  font-semibold px-6 py-1 border-solid border-orange-300 border-l-2 border-r-2 h-full' onClick=''>
                                <span className='absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2'>0</span>
                            </span>
                            <span className='plus px-4 py-1 w-14 relative h-full cursor-pointer hover:bg-orange-300' onClick=''>
                                <AiOutlinePlus className='w-6 h-6 absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 fill-orange-900'/>
                            </span>
                        </div>


                    </div>
                    <div className='buttons'>
                        <button type='button' className='add-to-cart w-full bg-orange-200 hover:bg-orange-300 border-2 rounded-md border-orange-300 text-larger font-bold tracking-widest py-2 my-2' onClick=''>
                            Agregar al Carrito
                        </button>
                        <button type='button' className='add-to-cart w-full bg-orange-900 hover:bg-orange-950 border-2 text-white rounded-md border-orange-950 text-larger font-bold tracking-widest py-2 my-2' onClick=''>
                            Comprar Ahora
                        </button>
                    </div>
                </div>
            </div>

            <div className='maylike'>
                <h2 className='text-3xl font-bold mt-16'>Te podría interesar</h2>
                <div className='marquee'>
                    <div className='maylike-products-container flex justify-center gap-4 '>
                        {products.length > 4 
                        ? 
                        products.slice(0,4).map((product) =>{
                            if(product.slug.current !== params.slug)
                            return( 
                                <Link key={product.slug.current}  href={`/product/${product.slug.current}`} className=' self-center productPreview max-w-[12rem] cursor-pointer'>
                                    <div className='imagePreview w-48 h-48 rounded-md overflow-hidden'><img className='object-cover w-full h-full' src={urlForImage(product.image[0]).url()} alt={product.name} /></div>
                                    <span className='pricePreview text-center block font-bold mt-4 mb-2'>${product.price}</span>
                                    <p className='productName text-center font-semibold text-sm'>{product.name}</p>
                                </Link>
                            )})
                        :
                        products.map((product) =>{
                            if(product.slug.current !== params.slug)
                            return( 
                                <Link key={product.slug.current}  href={`/product/${product.slug.current}`} className=' self-center productPreview max-w-[12rem] cursor-pointer'>
                                    <div className='imagePreview w-48 h-48 rounded-md overflow-hidden'><img className='object-cover w-full h-full' src={urlForImage(product.image[0]).url()} alt={product.name} /></div>
                                    <span className='pricePreview text-center block font-bold mt-4 mb-2'>${product.price}</span>
                                    <p className='productName text-center font-semibold text-sm'>{product.name}</p>
                                </Link>
                            )})
                            
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default ProductDetails