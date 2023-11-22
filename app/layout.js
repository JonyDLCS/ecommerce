import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import {StateContext}  from '@/context/StateContext';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'S&S',
  description: 'Tienda en linea de collares hechos a mano',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
        <StateContext>
        <Toaster/>
        <NavBar/>
        {children}
        <Footer/>
        </StateContext>
      </body>
      
    </html>
    
  )
}
