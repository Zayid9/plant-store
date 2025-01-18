import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="header">
      <h1>Plant Paradise</h1>
      <nav>
        <a href="/products">Products</a>
        <a href="/cart">Cart ({totalQuantity})</a>
      </nav>
    </header>
  );
};

export default Header;
