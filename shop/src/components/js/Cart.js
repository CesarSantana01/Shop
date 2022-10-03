import React from 'react'
import {motion} from "framer-motion"
import '../css/Cart.css'

function Cart() {
  return (
    <motion.div
    className='Cart' 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={1}

    >
      Cart
    </motion.div>
  )
}

export default Cart
