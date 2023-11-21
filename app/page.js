
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

export default function Home() {


  const productx = [
    { id: 1, image: 'mainNecklace.jpg', name: 'Cadena con dijes circulares', price: 0 },
    { id: 2, image: 'hanmade.jpg', name: 'Collar de bisutería', price: 100 },
    { id: 3, image: 'mainNecklace.jpg', name: 'Collar BOO, temática de Halloween', price: 200 },
    { id: 4, image: 'hanmade.jpg', name: 'Collar BOO, temática de Halloween', price: 200 },
  ];

  return (
    <main className="bg-slate-00 max-w-[920px] mx-auto ">
      


      <div id='mainBanner' className='  cursor-pointer bg-orange-200 mx-auto h-56  rounded-md relative mt-24 mb-16 '>
        <p className='absolute z-10 text-black font-bold uppercase text-5xl p-6 pr-[248px] text-justify leading-snug tracking-wider'>Creado a mano <br/> llevado con estilo</p>
        <div id='tagBanner' className='pl-8 pr-[248px] pb-4 flex justify-end absolute bottom-0 right-0  items-center '>
          <p  className=' font-bold tracking-wide '>Echar un vistazo</p>
          <div className='w-10 h-10 translate-y-[1px] '>
          <MdOutlineKeyboardArrowRight className='w-full h-full'/>
          </div>
        </div>
        <div id='imgContainerBanner' className=' rounded-br-md overflow-hidden rounded-t-md  absolute right-0 bottom-0'>
          <img className=' object-cover w-auto h-72' src='mainNecklace.jpg'/>
        </div>
      </div>

      <div className='flex justify-between gap-6 my-24 mx-6 pb-4 overflow-auto'>
        <ListProducts/>
      </div>


      <section className='mx-6'>
        <div className='w-full grid grid-cols-3 '>
          <span className='aboutSquares  bg-orange-200 h-[250px] w-full flex justify-center items-center font-bold uppercase text-center text-xl'>Productos<br/>de Calidad</span>
          <span className=' aboutSquare  h-[250px] w-full flex justify-center items-center'><FaHands className='w-24 h-24 fill-orange-800'/></span>
          <span className='aboutSquares  bg-orange-200 h-[250px] w-full flex justify-center items-center font-bold uppercase text-center text-xl'>Diseños<br/>Personalizados</span>
          <span className='aboutSquares  h-[250px] w-full flex justify-center items-center'><GiNecklaceDisplay className='w-24 h-24 fill-orange-800'/></span>
          <span className=' aboutSquares bg-orange-200 h-[250px] w-full flex justify-center items-center font-bold uppercase text-center text-xl'> Hechos<br/>a Mano</span>
          <span className='aboutSquares  h-[250px] w-full flex justify-center items-center '><GiDoubleNecklace className='w-24 h-24 fill-orange-800'/></span>
        
        </div>
      </section>

      <section className='mb-24 mt-72'>
        <div id='hermosilloBanner' className='bg-orange-200 relative h-48 rounded-md mx-auto '>
          <img id='hermosilloImage' className='rounded-b-md absolute left-0 bottom-0 right-0 object-cover    brightness-110 mix-blend-darken ' src='hermosillo.jpg'/>
          <div className=' bg-gradient-to-t rounded-b-md from-orange-900 w-full h-full'><p className='absolute pb-3 bottom-0 right-0 left-0 text-center  text-white text-7xl tracking-widest  uppercase font-black '>Entregas en hermosillo</p>
          </div>
       
        </div>
      </section>

    </main>
  )
}



