import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementItem, decrementItem, removeItem } from '../redux/cartSlice';
import './styles.css';

const ShoppingCartPage = () => {
  const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Cost: ${totalPrice.toFixed(2)}</p>
      <button onClick={() => alert('Coming Soon!')}>Checkout</button>
      <button onClick={() => window.location.href = '/products'}>Continue Shopping</button>
      <div className="cart-items">
        {items.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
            <button onClick={() => dispatch(decrementItem(item.id))}>-</button>
            <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCartPage;
