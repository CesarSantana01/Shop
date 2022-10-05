import React, {useState, useEffect} from 'react'
import {motion} from "framer-motion"
import '../css/Cart.css'
import g70 from '../img/G70.png'

export const cartList = [
  {
    name:"G70",
    brand:"Genesis",
    price:"37000",
    quantity:1,
}
]

 

function Cart() {

  useEffect(() => {
    console.log(cartList)
   })

  return (
    <motion.div
    className='Cart' 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={1}>
      <div className='cart-intro'>Checkout</div>

    <div className='cart-flex'>
      <div className='cart-item-list'>

       {cartList.map(item => (
           <div>
           <div className='cart-imgcontainer'><img className='cart-img' src={g70} alt="" /></div>
           <div className='cart-item-desc'>
             <div>
               <div style={{fontSize: "3vh"}}>{item.name}</div>
               <div style={{fontSize: "2vh"}}>{item.brand}</div>
               <div style={{fontSize: "1.3vh"}}>Quantity {item.quantity}</div>
               <div style={{marginLeft: "auto", marginTop: "auto"}}>{item.price}</div>
             </div>
           </div>
          </div>
       ))}


        <div className='cart-cost'>
          <div style={{marginLeft: "auto", paddingRight: "1vh"}}>Total:</div>
        </div>
      </div>
      <div className='login'>
        <div>1</div>
      </div>
    </div>
      
    </motion.div>
  )
}

export default Cart
