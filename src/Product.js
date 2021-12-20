import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch]= useStateValue()
    // console.log('This is the basket');
    const addToBasket = () =>{
      dispatch({
          type: 'ADD_TO_BASKET',
          item: {
              id:id,
              title:title,
              image:image,
              price:price,
              rating:rating
          }
      })
    }
    return (
        <div className="product" >
            <div className="product_info" >
                <p>{title}</p>
                <p className='product_price' >
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating" >
                    {Array(rating).fill().map((_, i)=>(
                        <p>⭐</p>   ))}
                </div>
               
                <img src={image} alt="" height="400px" width="300px" />
            </div>
                <button onClick={addToBasket} >Add to Basket</button>  
        </div>
    )
}

export default Product
