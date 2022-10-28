import React from 'react'
import {Route,Routes,useLocation} from "react-router-dom"
import Home from './Home'
// import Shop from './Shop'
import Cart from './Cart' 
import '../css/Cart.css'
import '../css/Shop.css'
import '../css/Home.css'
import {AnimatePresence} from 'framer-motion'

import G70 from './cars/G70'
import G90 from './cars/G90'
import Maybach from './cars/Maybach'
import Amggt from './cars/Amggt'
import I8 from './cars/I8'
import Porche911 from './cars/Porsche911'
import GTR from './cars/GTR'
import LT from './cars/765lt'

const LazyShop = React.lazy(() => import('./Shop'))

function RoutesAnimation() {
    const location = useLocation();


  return (
    
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>}/>
         
            <Route path='/shop' element={<React.Suspense fallback={"Loading..."}><LazyShop/></React.Suspense>}/>
          
          <Route path='/cart' element={<Cart/>}/>

          <Route path='/shop/g70' element={<G70/>}/>
          <Route path='/shop/g90' element={<G90/>}/>
          <Route path='/shop/maybach' element={<Maybach/>}/>
          <Route path='/shop/amggt' element={<Amggt/>}/>
          <Route path='/shop/i8' element={<I8/>}/>
          <Route path='/shop/911' element={<Porche911/>}/>
          <Route path='/shop/gtr' element={<GTR/>}/>
          <Route path='/shop/765lt' element={<LT/>}/>

        </Routes>
    </AnimatePresence>
    
  )
}

export default RoutesAnimation
