import React, { useState } from 'react';
import '../styles/header.scss';
import Cart from './Cart';

export default function Header({ kartItems, onAdd, onRemove, cartDeleteItem }) {
  const [kart, setKart] = useState(false);
  console.log(kart);
  return (
    <div className="header-container">
      <div className="title">
        <h1>My Cart</h1>
      </div>

      <div className="header-elements-1">
        <small
          style={{ fontSize: '35px', cursor: 'pointer' }}
          onClick={() => setKart(kart ? false : true)}
          className="fa fa-shopping-cart"
        >
          <span style={{ fontSize: '20px', color: 'red' }}>
            {kartItems ? kartItems.length : ''}
          </span>
        </small>
        <Cart
          clicked={kart}
          kartItems={kartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          cartDeleteItem={cartDeleteItem}
        />

        <span
          style={{ fontSize: '40px' }}
          className="far fa-user-circle"
        ></span>
      </div>
    </div>
  );
}
