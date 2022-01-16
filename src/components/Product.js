import React from "react";
import "../Product.css";
import {useStateValue} from './StateProvider';
import Button from './Button'



export default function Product({ id, title, image, price, rating }) {

  const [{},dispatch]= useStateValue();

  const addToCart=()=>{
    dispatch({
      type: 'addToCart',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating  
      }
    })
  }

  return (
    <div className="product">
      <p>{title}</p>
      <div className="product_description">
        <strong>₹</strong>
        <strong>{price}</strong>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>⭐</span>
            ))}
        </div>
        <img src={image} alt="this is product pic"></img>
        <Button name="Add to Cart" title="Click to Buy this Product" click={addToCart}/>
      </div>
    </div>
  );
}
