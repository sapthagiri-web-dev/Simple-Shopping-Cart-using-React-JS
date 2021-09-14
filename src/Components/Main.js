import React from 'react';
import '../styles/main.scss';
import Cards from './Cards';

export default function Main({ data, onAdd = { onAdd }, removeItems }) {
  return (
    <div className="main-container">
      {data.map((laptop) => (
        <Cards
          key={laptop.id}
          laptop={laptop}
          onAdd={onAdd}
          removeItems={removeItems}
        />
      ))}
    </div>
  );
}
