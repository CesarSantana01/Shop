import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Nav.css'

function Nav() {
  return (
    <div>
      
            <nav>
              <Link className='link_container' to={'/'}></Link>
              <Link to={'/shop'}>Shop</Link>
              <Link to={'/cart'}>Cart</Link>
           </nav>
     

    </div>
  )
}

export default Nav
