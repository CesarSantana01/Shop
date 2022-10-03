import React from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import '../css/Shop.css'
import G70 from "../img/G70.png"
import Maybach from "../img/Maybach.png"
import G90 from "../img/G90.png"
import Amggt from "../img/Amggt.png"
import I8 from "../img/I8.png"
import Porsche911 from "../img/Porsche911.png"
import Gtr from "../img/Gtr.png"
import Mclaren from "../img/McLaren765Lt.png"



function Shop() {
  return (

    <div className='main-shop-container'>
      <motion.div
      className='Shop'
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={1}
      >
      <div className='main-text'> Select your Beast</div>
      <div className='item-list'>
        <div className='item-container'>
          <Link
          to={"/shop/G70"}
          className={"item"}
          style={{backgroundImage: `url(${G70})` }}>
            <div>
              <p className='year'>2023</p>
              <p className='model'>G70</p>
            </div>
            <div className='end'>
              <p className='msrp'>MSRP</p>
              <p className='price'>$39,150</p>
            </div>
          </Link>
        </div>
      
        <div className='item-container'>
        <Link
         to={"/shop/G90"}
         className={"item"}
         style={{backgroundImage: `url(${G90})`,  }}>
            <div>
              <p className='year'>2023</p>
              <p className='model'>G90</p>
            </div>
            <div className='end'>
              <p className='msrp'>MSRP</p>
              <p className='price'>$88,400</p>
            </div>
          </Link>
        </div>
      
        <div className='item-container'>
        <Link
         to={"/shop/maybach"}
         className={"item"}
         style={{backgroundImage: `url(${Maybach})`,  }}>
            <div>
              <p className='year'>2022</p>
              <p className='model'>Maybach</p>
            </div>
            <div className='end'>
              <p className='msrp'>MSRP</p>
              <p className='price'>$185,000</p>
            </div>
          </Link>
        </div>
        <div className='item-container'>
        <Link
         to={"/shop/amggt"}
         className={"item"}
         style={{backgroundImage: `url(${Amggt})`,  }}>
            <div>
              <p className='year'>2023</p>
              <p className='model'>Amg GT</p>
            </div>
            <div className='end'>
              <p className='msrp'>MSRP</p>
              <p className='price'>$95,900</p>
            </div>
          </Link>
        </div>
        <div className='item-container'>
        <Link
         to={"/shop/i8"}
         className={"item"}
         style={{backgroundImage: `url(${I8})`,  }}>
            <div>
              <p className='year'>2020</p>
              <p className='model'>I8</p>
            </div>
            <div className='end'>
              <p className='msrp'>MSRP</p>
              <p className='price'>$147,500</p>
            </div>
          </Link>
        </div>

        <div className='item-container'>
        <Link
         to={"/shop/911"}
         className={"item"}
         style={{backgroundImage: `url(${Porsche911})`,  }}>
            <div>
              <p className='year'>2023</p>
              <p className='model'>911</p>
            </div>
            <div className='end'>
              <p className='msrp'>MSRP</p>
              <p className='price'>$106,100</p>
            </div>
          </Link>
        </div>

        <div className='item-container'>
        <Link
         to={"/shop/gtr"}
         className={"item"}
         style={{backgroundImage: `url(${Gtr})`,  }}>
            <div>
              <p className='year'>2023</p>
              <p className='model'>GTR</p>
            </div>
            <div className='end'>
              <p className='msrp'>MSRP</p>
              <p className='price'>$113,540</p>
            </div>
          </Link>
        </div>

        <div className='item-container'>
        <Link
         to={"/shop/765lt"}
         className={"item"}
         style={{backgroundImage: `url(${Mclaren})`,  }}>
            <div>
              <p className='year'>2023</p>
              <p className='model'>765 LT</p>
            </div>
            <div className='end'>
              <p className='msrp'>MSRP</p>
              <p className='price'>$382,500</p>
            </div>
          </Link>
        </div>

      </div>
      </motion.div>
    </div>
  )
}

export default Shop
