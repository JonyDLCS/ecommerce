
import './globals.css';
import { SnsLogo } from '@/public/snsLogo';
import { HiShoppingBag } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GiDoubleNecklace } from "react-icons/gi";
import { FaHands } from "react-icons/fa";
import { GiNecklaceDisplay } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import ListProducts from '@/components/listProducts';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import ToastBuySuccess from '@/components/toastBuySuccess';

export default function Home() {
  
    


  return (
    
    <main className="bg-slate-00 max-w-[920px] min-h-screen mx-auto ">
      
      <ToastBuySuccess/>
      <Link href='/product'>
      <div id='mainBanner' className=' mt-48 sm:mt-64  cursor-pointer bg-orange-200 mx-auto h-fit sm:h-52 md:h-72 lg:h-56 pt-8 sm:pt-16 lg:pt-0  rounded-md relative lg:mt-24 mb-16 '>
        <p className='sm:absolute z-10 text-black font-bold uppercase text-2xl sm:text-4xl md:text-5xl p-6 lg:pr-[248px] text-center sm:text-left leading-snug tracking-wider'>Creado a mano llevado con estilo</p>
        <div id='tagBanner' className='pl-8 pr-6 sm:pr-8 lg:pr-[248px] pb-4 flex justify-end absolute bottom-0 right-0  items-center '>
          <p  className=' font-bold tracking-wide text-sm sm:text-base hidden sm:block'>Echar un vistazo</p>
          <div className='w-10 h-10  translate-y-[1px]  hidden sm:block'>
          <MdOutlineKeyboardArrowRight className='w-full h-full'/>
          </div>
        </div>
        <div id='imgContainerBanner' className=' rounded-br-md overflow-hidden rounded-t-md  absolute top-0 left-1/2 -translate-y-3/4 -translate-x-1/2 lg:top-auto lg:left-auto lg:translate-x-0 lg:translate-y-0 lg:right-0 lg:bottom-0'>
          <img className=' object-cover aspect-square  lg:aspect-auto w-auto h-44 sm:h-72' src='mainNecklace.jpg'/>
        </div>
      </div>
      </Link>

      <div className='flex justify-between gap-6 my-24 mx-6 pb-4 overflow-auto'>
        <ListProducts/>
      </div>


      <section className='mx-6'>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 '>
          <span className=' order-4  sm:order-none aboutSquares  bg-orange-200 h-[250px] w-full flex justify-center items-center font-bold uppercase text-center sm:text-xl text-sm'>Productos<br/>de Calidad</span>
          <span className='order-2 sm:order-none aboutSquare   h-[250px] w-full flex justify-center items-center'><FaHands className='w-16 h-16 sm:w-24 sm:h-24 fill-orange-800'/></span>
          <span className=' order-5 aboutSquares sm:order-none  bg-orange-200 h-[250px] w-full flex justify-center items-center font-bold uppercase text-center sm:text-xl text-sm'>Diseños<br/>Personalizados</span>
          <span className=' order-3 aboutSquares sm:order-none  h-[250px] w-full flex justify-center items-center'><GiNecklaceDisplay className='w-16 h-16 sm:w-24 sm:h-24 fill-orange-800'/></span>
          <span className=' order-1 sm:order-none aboutSquares bg-orange-200 h-[250px] w-full flex justify-center items-center font-bold uppercase text-center sm:text-xl text-sm'> Hechos<br/>a Mano</span>
          <span className=' order-6 aboutSquares sm:order-none  h-[250px] w-full flex justify-center items-center '><GiDoubleNecklace className=' w-16 h-16 sm:w-24 sm:h-24 fill-orange-800'/></span>
        
        </div>
      </section>

      <section className='mb-32 mt-56 sm:mt-72'>
        <div id='hermosilloBanner' className='bg-orange-200 relative h-24 sm:h-48 rounded-md mx-auto '>
          <img id='hermosilloImage' className='rounded-b-md absolute left-0 bottom-0 right-0 object-cover    brightness-110 mix-blend-darken ' src='hermosillo.jpg'/>
          <div className=' bg-gradient-to-t rounded-b-md from-orange-900 w-full h-full '><p className='absolute pb-3 bottom-0 right-0 left-0 text-center  text-white text-2xl sm:text-6xl  md:text-7xl tracking-widest  uppercase font-black '>Entregas en hermosillo</p>
          </div>
       
        </div>
      </section>

    </main>
  )
}



