import React from "react";
import ProductType from './ProductType';
import furniture_image from './images/couch1.jfif';
import decoration_image from './images/decoration5.jfif';


export default function AllProducts() {
  return (
    <div className="all_products">
      <div className="paint"><ProductType key={1} type="Paint" image='https://5.imimg.com/data5/SELLER/Default/2021/8/IH/LQ/GT/10512665/asian-paints-ace-exterior-emulsion-500x500.jpg'  discription='Take a glance over all the Paints' /></div>
      <div className="furniture"><ProductType key={2} type="Furniture" image={furniture_image}  discription='Take a glance over all the furnitures' /></div>
      <div className="decoration"><ProductType key={3} type="Decoration" image={decoration_image}  discription='Take a glance over all the Decorations' /></div>
    </div>
  );
}
