import React, {useState, useEffect} from 'react'
import {motion} from "framer-motion"
import '../css/Cart.css'
import Mclaren from "/Users/cesarsantana/repos/Shop/shop/src/components/img/McLaren765Lt.png"


export let cartList = [
  {
    name:"765 LT",
    brand:"McLaren",
    price:"382500",
    img: `${Mclaren}`,
}
]
function Cart() {


  let [newCartList, setNewCartList] = useState([])
  const [total, setTotal] = useState(0)
  const [reRender, setReRender] = useState(null)
  

  const createCartRender = () => {
    if(newCartList.length === 0){
      return <div>Nothing to see here</div>
    }else{
      return (
      newCartList.map(item => (
        
        <div key={item.name}>
        <div className='cart-imgcontainer'>
          <img className='cart-img' src={item.img} alt='' />
        </div>
        <div className='cart-item-desc'>
          <div>
            <div style={{fontSize: "3vh"}}>{item.name}</div>
            <div style={{fontSize: "2vh"}}>{item.brand}</div>
            <div style={{fontSize: "2vh", display: "flex", alignItems: "center"}}>
              Quantity
              <button style={{paddingBottom:"5px", fontSize: "5vh", color: 'white'}}
              onClick={() => {
              
                setNewCartList(newCartList)
                
                item['quantity'] = item['quantity'] - 1
             
                setReRender(reRender => reRender-1)
              if(item.quantity<1){
                setTotal(0)
                setReRender(reRender => reRender-1)
                newCartList.forEach(e => {
                  if(e["quantity"]<1){
                    let index = e
                    let findex = newCartList.findIndex(el => el == index)
                    console.log(` ${findex}`)
                    newCartList.splice(findex,1)
                    cartList.splice(findex,1)
                    console.log(cartList)
                  }
                })
              }
              }}>-</button>
              {item.quantity}
              <button style={{color:'white', fontSize: "3vh"}} onClick={() => {
                setNewCartList(newCartList)
                item['quantity'] = item['quantity'] + 1 || 1
                setReRender(reRender => reRender+1)
            }}>+</button>
              </div>
            <div style={{marginLeft: "auto", marginTop: "auto", fontSize: "2vh"}}>${numberWithCommas(getTotal(item.quantity, item.price))}</div>
          </div>
        </div>
       </div>
      ))
      )
   }
  }  

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  const getTotal = (quantity, price) =>{
    return quantity*price
  }
  

  useEffect(() => {
   
    setNewCartList(
      Object.values(cartList.reduce((r, o) => {
        if (r[o.name]) r[o.name].quantity++;
        else r[o.name] = { ...o, quantity: 1};
        return (r);
    }, {})))
    
   },[])

   useEffect(() => {
    console.log(newCartList)
   })


 useEffect(() => {

  let arr = []
  newCartList.forEach(e => {
    arr.push(e.price*e.quantity)
    

    let sum = arr.reduce((acc, value) => {
      return acc + value
    })
    setTotal(sum)
  })
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
      <div className='cart-item-list'>{createCartRender()}
        <div className='cart-cost'>
          <div style={{marginLeft: "auto", paddingRight: "1vh", marginTop: "1vh"}}>Total:$ {numberWithCommas(total)}</div>
        </div>
      </div>

      <div className='login'>
        <p>disclaimer: nothing on this page will be saved</p>

        <label style={{marginBottom: '2vh', fontSize: '3vh'}}>Personal Information</label>
        <section className='checkout-contact'>
          <div style={{display: 'flex'}} >
            <input style={{width:'50%'}} type="text" placeholder='First Name' />
            <input style={{width:'50%'}} type="text" placeholder='Last Name'/>
          </div>
          <input type="email" placeholder='Email' required/>
        </section>
        <label style={{marginBottom: '2vh', fontSize: '3vh'}}>Shipping Address</label>
        <section>
          <div style={{display: 'flex', flexDirection: 'column', gap:'.2vh', marginTop: '2vh'}}>
            <input type="text"  placeholder='Address' required/>
            <div style={{display: 'flex'}}>
              <input style={{width:'50%'}} type="text" placeholder='City' required/>
              <input style={{width:'50%'}} type="zipcode" placeholder='Zip-Code' required/>
            </div>
            <div style={{display: 'flex'}}>
              <input style={{width:'49%'}} type="text" placeholder='Country' required/>
              <div style={{display: 'flex',alignItems: 'center',gap: '10px', width:'50%'}}>
                <label>billing same as shipping?</label>
                <input type="checkbox" />
              </div>
            </div>
            <input type="text" placeholder='Phone Number' required/>
          </div>
        </section>
        <div
        style={{display: 'flex', justifyContent: 'center', marginTop: '1.5vh'}}
        >
          <button type='reset' className='cart-submit'>Submit</button>
        </div>
      </div>
    </div>
      
    </motion.div>
  )
}

export default Cart
