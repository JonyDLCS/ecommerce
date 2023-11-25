import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import React from 'react';
import Link from 'next/link';

const  ProductsPage = async () => {
    const products = await getData();
  return (
    <div className='minViewWithFooter mx-auto px-6'>
    <div className=' max-w-[920px]  flex justify-center  items-start gap-4 my-12 pb-6 mx-auto  flex-wrap'>
         {Array.isArray(products)? 
        
         products.reverse().map(product => (
            <Link key={product.slug.current}  href={`/product/${product.slug.current}`} className=' self-center productPreview max-w-[12rem] cursor-pointer'>
              <div className='imagePreview w-48 h-48 rounded-md overflow-hidden'><img className='object-cover w-full h-full' src={urlForImage(product.image[0]).url()} alt={product.name} /></div>
              <span className='pricePreview text-center block font-bold mt-4 mb-2'>${product.price}</span>
              <p className='productName text-center font-semibold text-sm'>{product.name}</p>
            </Link>
          ))

      :
      <></>
      }
    </div>
    </div>
  )
}

export async function getData() {
    const revalidate = 60;
    const query = '*[_type == "product"]';
    const products = await client.fetch(query, {next:{revalidate}});
    return JSON.parse(JSON.stringify(products));
}


export default ProductsPage