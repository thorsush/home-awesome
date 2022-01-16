import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

export default function Checkout() {
    const [{cart}] = useStateValue();
    return (
        <div className='checkout'>
            {cart.length===0
            ?<>
            <h1>  OOPS!   Your cart is empty      </h1>
            <h3>You have no items in your cart ,To buy one or more items click on the Add to Cart button next to the product</h3>
            </>
            :<>{cart.map(item => {
                return <CheckoutProduct
                title={item.title}
                id={item.id}
                image={item.image}
                rating={item.rating}
                price={item.price}
                key={item.id}
                />
            })}
            </>
        }
        </div>
    )
}
