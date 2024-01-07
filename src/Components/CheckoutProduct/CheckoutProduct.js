import React from 'react'
import { useStateValue } from '../../StateProvider'
import './CheckoutProduct.css'

function CheckoutProduct({ id, image, title, price, rating }) {
      const [{ }, dispatch] = useStateValue()
    
      async function  removeFromBasket() {
          dispatch({
              type: "REMOVE_FROM_BASKET",
              id:id 
          })
         
     }
    

  return (
    
      <div className='checkoutProduct'>
          <img src={image} alt="" className='checkoutProduct_image' />

          <div  className='checkoutProduct_info'>
              <p className='checkoutProduct_title'>{title}</p>
              <p className='checkoutProduct_price'>
              <small>$</small>
                  <strong>{price}</strong>
              </p>
              <div className="checkoutProduct_rating">
                  {Array(rating).fill().map((_, i) => {
                      return <p key={i}>⭐</p>
                  })}
              </div>
              <button onClick={removeFromBasket}>Remove product</button>
          </div>
      </div>
  )
}

export default CheckoutProduct