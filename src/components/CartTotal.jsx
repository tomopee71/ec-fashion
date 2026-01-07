import React from 'react'
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {

const {currency, delivery_fee, getCartAmount} = React.useContext(ShopContext);

  return (
    <div>

        
    </div>
  )
}

export default CartTotal