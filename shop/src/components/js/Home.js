import React from 'react'
import {motion} from "framer-motion"
import '../css/Home.css'

function Home() {
  return (
    <motion.div 
    className='Home' 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={1}

    >
      
    </motion.div>
  )
}

export default Home
