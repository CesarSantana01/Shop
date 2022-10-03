import React, {useState, useEffect} from 'react'
import "../../css/Car.css"
import g90_1 from "../../img/g90_1.jpeg"
import g90_1blur from "../../img/g90_1blur.jpg"


function G90() {

    const [btcPrice, setBtcPrice] = useState(0)
    const [ethPrice, setEthPrice] = useState(0)
    const carPrice = 88400

    useEffect(() => {

        const fetchPrice = async (price) => {
            const data = await fetch(
                `https://coinlib.io/api/v1/coin?key=c6845e79da4ef274&pref=USD&symbol=BTC`
            )
                const response = await data.json()
                const final = await response.price
                const finalPrice = Math.round((price/final)*1000)/1000
            
            return setBtcPrice(finalPrice)
        }
    fetchPrice(carPrice)
    }, [])

    useEffect(() => {

        const fetchPrice = async (price) => {
            const data = await fetch(
                `https://coinlib.io/api/v1/coin?key=96ae49b17f0af5d6&pref=USD&symbol=ETH`
            )
                const response = await data.json()
                const final = await response.price
                let finalPrice = Math.round((price/final)*1000)/1000
                
            
            return setEthPrice(finalPrice)
        }
    fetchPrice(carPrice)
    }, [])
 
  return (
    <div className='mainContainer'>
      <div className='imgContainer'
      style={{backgroundImage: `url(${g90_1blur})`}}
      ><img src={g90_1} className="img2"/>
      </div>

    <div className='car-info'>
      <div className='car-facts'>
        <div className='cell'><div>Drivetrain</div><div style={{marginTop:"-1vh", fontSize:"1.5vh"}}>____________</div><div>All wheel drive</div></div>
        <div className='cell'><div>Transmission</div><div style={{marginTop:"-1vh", fontSize:"1.5vh"}}>____________</div><div>8-speed auto</div></div>
        <div className='cell'><div>Engine</div><div style={{marginTop:"-1vh", fontSize:"1.5vh"}}>____________</div><div>3.5L V6TT</div></div>
        <div className='cell'><div>Fuel type</div><div style={{marginTop:"-1vh", fontSize:"1.5vh"}}>____________</div><div>Gasoline</div></div>
        <div className='cell'><div>MPG</div><div style={{marginTop:"-1vh", fontSize:"1.5vh"}}>____________</div><div>18/26</div></div>
        <div className='cell'><div>Exterior color</div><div style={{marginTop:"-1vh", fontSize:"1.5vh"}}>____________</div><div>Uyuni white</div></div>
        <div className='cell'><div>{"Interior \n \n color"}</div><div style={{marginTop:"-1vh", fontSize:"1.5vh"}}>____________</div><div>Nappa black</div></div>
        <div className='cell'><div>{"Rating(KBB)"}</div><div style={{marginTop:"-1vh", fontSize:"1.5vh"}}>____________</div>3/5</div>
        </div>
      <div className='payment'>
        <div className='payment-container'>
            <button style={{marginBottom:"3vh"}} className='payment-button'>
                <div>Add to  <span style={{fontStyle:"italic", fontWeight:"bold"}}>Cart</span></div>
                <div className='button-text'></div>
            </button>
            <div style={{fontSize: "2vh", borderBottom:"2px solid white", padding:"1vh"}}>BUY NOW</div>
            <button className='payment-button'>
                <div>Pay with <span style={{fontStyle:"italic", fontWeight:"bold"}}>card</span></div>
            <div className='button-text'>{`$88,400`}</div>
            </button>
            <button className='payment-button'>
                <div>Pay with <span style={{fontStyle:"italic", fontWeight:"bold", color:"rgb(214, 132, 0)"}}>bitcoin</span></div>
                <div className='button-text'>{`${btcPrice} btc`}</div>
            </button>
            <button className='payment-button'>
                <div>Pay with <span style={{fontStyle:"italic", fontWeight:"bold", color:"rgb(94, 169, 255)"}}>Ethereum</span></div>
                <div className='button-text'>{`${ethPrice} eth`}</div>
            </button>
            
        </div>
      </div>
      </div>
    </div>
  )
}

export default G90