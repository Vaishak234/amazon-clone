import React, { useEffect,useState } from 'react'
import './Checkout.css'
import Subtotal from '../Subtotal/Subtotal'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../../StateProvider'
import { CircularProgress } from '@mui/material'



function Checkout() {

  const [{ user,basket }, dispatch] = useStateValue()
     
  return (
      <div className='checkout'>
          <div className="checkout_left">
              <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
               alt="" className="checkout_ad" />
          
        <div>
          <h3>Hello, {user ? user.email : ""}</h3>
          <br />
          <h2 className="checkout_title">Your Basket </h2>
      
          <div className="checkout__products">
             { user ? (
            basket.map((item,i) => {
              return (
              
                <CheckoutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
              
              )
                })
              ) : (
                 <div className="checkout__loader">
                    <CircularProgress />
                  </div>
              )
                }
             
           </div>
           
              </div>
            </div>
          <div className="checkout_right">
              <Subtotal />
           </div>
      </div>
  )
}

export default Checkout