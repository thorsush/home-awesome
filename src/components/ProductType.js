import React from 'react';
import Button from'./Button';


export default function ProductType({type,image,discription}) {
    return (
        <div className='product_type'>
           <h1>{type}</h1>
          <img height={250} width={250} src={image} alt='This is a product type'></img>
           <h3>{discription}</h3>
           <Button title={`Click to explore ${type}`} name='Explore' />
        </div>
    )
}
