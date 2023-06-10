import React, { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext';

const CheckOut = () => {
  const { orderId } = useContext(CartContext);
  return (
    <div className='container'>
      <h1 className='text-info'>Compra Realizada!</h1>
      <h2 className='text-success'>Orden: {orderId}</h2>
    </div>
  )
}

export default CheckOut;