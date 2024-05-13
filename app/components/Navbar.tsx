"use client"

import Link from 'next/link'
import React, { useContext } from 'react'
import {FiShoppingBag} from 'react-icons/fi'
import Cart from './Cart';
import { CartContext } from '../context/CartContext';

const Navbar = () => {

  const {totalQuantity, showCart, setShowCart}:any = useContext(CartContext);
  
  const handleCick = () => {
    setShowCart(!showCart)
  }
  return (
    <>
       <div className='w-full h-[80px] <div className="bg-black text-white"> '>
        <div className='container w-full h-full flex justify-between items-center'>
            <Link href='/' className='logo'>NonStop Commerce</Link>
            <button className='cart-icon' onClick={handleCick}>
                <FiShoppingBag />
                <span className='cart-item-qty'>{totalQuantity}</span>
            </button>
        </div>
      </div>

      {showCart && <Cart />}
      
    </>
  )
}

export default Navbar