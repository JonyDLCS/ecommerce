
import './globals.css';
import { SnsLogo } from '@/public/snsLogo';
import { HiShoppingBag } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GiDoubleNecklace } from "react-icons/gi";
import { FaHands } from "react-icons/fa";
import { GiNecklaceDisplay } from "react-icons/gi";

export default function Home() {


  const products = [
    { id: 1, image: 'mainNecklace.jpg', name: 'Cadena con dijes circulares', price: 0 },
    { id: 2, image: 'hanmade.jpg', name: 'Collar de bisutería', price: 100 },
    { id: 3, image: 'mainNecklace.jpg', name: 'Collar BOO, temática de Halloween', price: 200 },
    { id: 4, image: 'hanmade.jpg', name: 'Collar BOO, temática de Halloween', price: 200 },
  ];

  return (
    <main className="bg-slate-00 mb-12 max-w-[920px] mx-auto">
      <div className="  bg-white z-20  pt-8 pb-6 px-6 text-center flex justify-between items-center gap-4 w-full">
        <SnsLogo/>
        <ul className=' flex flex-row gap-16 font-semibold list-none items-center'>
          <li className=' cursor-pointer hover:text-orange-800'><p>Inicio</p></li>
          <li className=' cursor-pointer hover:text-orange-800' ><p>Productos</p></li>
          <li className=' cursor-pointer hover:text-orange-800'><HiShoppingBag className='w-8 h-8'/></li>
        </ul>  
      </div>


      <div id='mainBanner' className=' cursor-pointer bg-orange-200 mx-auto h-56 min-w-[706px] max-w-[706px] rounded-md relative mt-24 mb-16'>
        <p className='relative z-10 text-black font-bold uppercase text-4xl p-8 pr-[248px] text-justify leading-snug tracking-wider'>Creado a mano <br/> llevado con estilo</p>
        <div id='tagBanner' className='pl-8 pr-[248px] flex justify-end  items-center '>
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
        {products.map(product=>(
          <div key={product.id}  className=' productPreview  max-w-[12rem] cursor-pointer'>
            <div  className='imagePreview w-48 h-48 rounded-md overflow-hidden'><img className=' object-cover  w-full h-full ' src={product.image}/></div>
            <span className='pricePreview text-center block font-bold mt-4 mb-2'>${product.price}</span>
            <p  className=' productName text-center font-semibold text-sm'>{product.name}</p>
          </div>
        ))}
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
