import React from "react";
// import image from './images/homeawesomelogo.png';
import Product from "./Product";
import "../Home.css";
import { useStateValue } from "./StateProvider";

export default function Home() {
  const [{ products }] = useStateValue();
  return (
    <div className="home">
      {products.map((item) => {
        return (
          <Product
            title={item.title}
            id={item.id}
            image={item.image}
            rating={item.rating}
            price={item.price}
            key={item.id+Date.now()}
          />
        );
      })}
    </div>
  );
}
