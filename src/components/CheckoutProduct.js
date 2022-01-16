import React from "react";
import "../Product.css";
import { useStateValue } from "./StateProvider";
import Button from "./Button";

export default function CheckoutProduct({ id, title, image, price, rating }) {
    const [{cart},dispatch]= useStateValue();
  const removeFromCart = () => {
    dispatch({
        type:"removeFromCart",
        id:id
    })
  };
  return (
    <div className="checkout_product">
      <div className="checkout_image">
        <img src={image} alt="this is product pic"></img>
      </div>
      <div>
        <p>{title}</p>
        <p className="product_description">
          <strong>₹</strong>
          <strong>{price}</strong>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <span>⭐</span>
              ))}
          </div>
          <p>
            <strong>Discription : </strong> Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Nobis nulla quisquam magni.
            Repudiandae quia et libero dolor eligendi veritatis, repellendus
            aliquam culpa nobis porro unde, autem velit, ipsa suscipit minima.
            Labore eveniet vero molestiae saepe aperiam id ipsum exercitationem
            recusandae! Maiores delectus assumenda odit placeat. Temporibus
            magnam sit quasi facilis porro consectetur id, voluptatum laudantium
            necessitatibus voluptatem reiciendis voluptate labore? Vel molestiae
            fuga velit ducimus laboriosam sint voluptates distinctio dolorem
            veniam aliquam earum accusantium eos in sit tenetur, neque obcaecati
            molestias non beatae officiis architecto perspiciatis dolor. Eos,
            autem tempora.
          </p>
          <Button  title="Click to remove from cart" name=" Remove from Cart" click={removeFromCart}/>
           
          
        </p>
      </div>
    </div>
  );
}
