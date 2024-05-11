import React from 'react';
import Link from 'next/link';
import {Cart} from './'
import { useStateContext } from '@/context/StateContext';


function Navbar() {
  const{showCart,setShowCart,totalQuantities}=useStateContext();
  return (
    <>
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">Navod I-Shop</Link>
      </p>
      

      <button type='button' 
      className='cart-icon' onClick={()=>setShowCart(true)}>
        <img src="/cart.svg" alt="cart"width={40}height={30}/>

      <span className='cart-item-qty'>{totalQuantities}</span>

      </button>
     {showCart && <Cart/>}
    
    </div>
    <div>
      <hr />
    </div>
    </>
    
  )
}

export default Navbar