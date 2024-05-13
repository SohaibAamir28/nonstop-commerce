import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './components'
import { CartProvider } from './context/CartContext'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NonStop Commerce',
  description: 'Created by Sohaib Aamir',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="bg-black text-white">
        <CartProvider>
                 <div>{children}</div> 
                 <Footer/>
        </CartProvider>
        </div>
      </body>
    </html>
  )
}
