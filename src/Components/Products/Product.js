import React, { useState } from 'react'
import { useStateValue } from '../../StateProvider'
import './Product.css'

function Product({ id, title, image, price, rating }) {
    const [{ user ,basket  }, dispatch] = useStateValue() 

    
  

      const  addToBasket = async () => {
          // dispatch the item into the data layer
          dispatch({
            type: "ADD_TO_BASKET",
            item: {
              id: id,
              title: title,
              image: image,
              price: price,
              rating: rating,
            },
          });
       
        
    
    }
 
    return (
        <>

      <div className='product'>
          <div className="product_info">
              <p>{ title}</p>
              <p className="product_price">
                  <small>$</small>
                  <strong>{ price }</strong>
              </p>
              <div className="product_rating">
                  {Array(rating).fill().map((_, i) => {
                      return <p key={i}>⭐</p>
                  })}
                  
              </div>
          </div>
          <img src={image} alt="" className="product_image" />
          <button onClick={addToBasket}>Add to basket</button>
          </div>
      </>
  )
}

export default Product