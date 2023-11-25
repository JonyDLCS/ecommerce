
import React from 'react'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import '@/app/globals.css'
import Link from 'next/link';
import ProductInformation from '@/components/productInformation';
import { useParams } from 'next/navigation';

export const dynamicParams = true;
 


export async function generateStaticParams() {
    const revalidate=60;
    const query = `*[_type == "product"]{
        slug{
            current
        }
    }`;
    const products = await client.fetch(query, {next:{revalidate}});
    return products.map((product) => ({
      slug: product.slug.current,
    }))
  }

export async function getProducts(slug) {
    const revalidate = 60;
    const productsQuery = '*[_type == "product"]';
    const query = `*[_type == "product" && slug.current =='${slug}'][0]`;
    const product = await client.fetch(query, {next:{revalidate}});
    const products = await client.fetch(productsQuery, {next:{revalidate}});
    return JSON.parse(JSON.stringify({product: product,products: products}));
}

const ProductDetails = async ({params}) => {
    const res = await getProducts(params.slug);
    const item = res.product;
    const products = res.products;
  return (
    
    <div className='max-w-[920px] mx-auto px-6 min-h-screen ' >
       
        <div className='product-detail-container pb-24'>
            <ProductInformation product={item}/>

            <div className='maylike'>
                <Link href='/product' className='hover:text-orange-900 '>
                    <h2 className='text-3xl  font-bold mt-16 mb-8 '>Catálogo</h2>
                </Link>
                <div className='marquee'>
                    <div className='maylike-products-container flex overflow-auto justify-start gap-4 '>
                        {products.length > 8
                        ? 
                        products.slice(0,8).map((product) =>{
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