import React from 'react';
import '../styles/cards.scss';

export default function Cards({ laptop, onAdd, removeItems }) {
  return (
    <div className="cards-container">
      <img className="images" src={laptop.img} alt="" />
      <h3 className="laptop-title">{laptop.title}</h3>
      <h5 className="laptop-brand">
        <small>Brand : </small> {laptop.brand}
      </h5>
      <div className="button-container">
        <button className="btn btn-primary" onClick={() => onAdd(laptop)}>
          Add to cart
        </button>
        <button
          className="btn btn-danger"
          onClick={() => removeItems(laptop.id)}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
}
