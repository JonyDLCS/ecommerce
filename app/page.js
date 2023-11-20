import Image from 'next/image';
import snsLogo from '@/public/snsLogo.svg';
import './globals.css';
import { SnsLogo } from '@/public/snsLogo';

export default function Home() {
  return (
    <main className="bg-slate-00">
      <div className=" pt-8 text-center flex flex-col justify-center items-center gap-4">
        <ul className=' flex flex-row gap-16 font-semibold list-none items-center'>
          <li className=' cursor-pointer hover:text-fuchsia-700' ><p>Tienda</p></li>
          <li className=' cursor-pointer '>
            <SnsLogo />
          </li>
          <li className=' cursor-pointer hover:text-fuchsia-700'><p>Acerca De</p></li>
          
        </ul>
      </div>
    </main>
  )
}
