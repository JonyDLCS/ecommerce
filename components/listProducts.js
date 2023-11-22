import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import React from 'react';
import Link from 'next/link';

export default async function ListProducts() {
    const products = await getData();

  return (
    <>
      {Array.isArray(products)? products?.length > 4
        ? products.slice(0, 4).map(product => (
            <Link key={product.slug.current} href={`/product/${product.slug.current}`} className='productPreview max-w-[12rem] cursor-pointer'>
              <div className='imagePreview w-48 h-48 rounded-md overflow-hidden'><img className='object-cover w-full h-full' src={urlForImage(product.image[0]).url} alt={product.name} /></div>
              <span className='pricePreview text-center block font-bold mt-4 mb-2'>${product.price}</span>
              <p className='productName text-center font-semibold text-sm'>{product.name}</p>
            </Link>
          ))
        : products.map(product => (
            <Link key={product.slug.current}  href={`/product/${product.slug.current}`} className=' self-center productPreview max-w-[12rem] cursor-pointer'>
              <div className='imagePreview w-48 h-48 rounded-md overflow-hidden'><img className='object-cover w-full h-full' src={urlForImage(product.image[0]).url()} alt={product.name} /></div>
              <span className='pricePreview text-center block font-bold mt-4 mb-2'>${product.price}</span>
              <p className='productName text-center font-semibold text-sm'>{product.name}</p>
            </Link>
          ))

      :
      <></>
      }
    </>
  );
}

export async function getData() {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    return JSON.parse(JSON.stringify(products));
}
