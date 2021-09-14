import React from 'react';
import '../styles/cart.scss';

export default function Cart({
  clicked,
  kartItems,
  onAdd,
  onRemove,
  cartDeleteItem,
}) {
  return clicked ? (
    <div className="cart-container">
      <h3>Your Cart Items</h3>
      {kartItems.length == 0 && <h5>Cart is Empty</h5>}

      {kartItems.map((item) => (
        <div className="container" key={item.id}>
          <img src={item.img} alt="" />
          <div className="container-right">
            <div>
              <small> {item.title} </small>
            </div>
            <div>
              <button className="cart-btn" onClick={() => onAdd(item)}>
                +
              </button>
              <button className="cart-btn" onClick={() => onRemove(item)}>
                -
              </button>
            </div>

            <div>
              <small>
                {item.qty} x {item.price.toFixed(2)}
              </small>

              <span>
                <small>=</small>
              </span>
              <small> {item.qty * item.price}</small>
            </div>
          </div>
          <span
            className="deleteInCart"
            onClick={() => cartDeleteItem(item.id)}
          >
            &times;
          </span>
        </div>
      ))}
    </div>
  ) : (
    ''
  );
}
