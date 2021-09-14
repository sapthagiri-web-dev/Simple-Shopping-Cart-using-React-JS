import React from 'react';
import '../styles/leftelement.scss';
import Main from './Main';

export default function Leftelements({
  data,
  handleCategoryChange,
  onAdd,
  removeItems,
}) {
  return (
    <div className="leftelement-container">
      <div className="category-container">
        <h3 className="btn btn-category " id="1" onClick={handleCategoryChange}>
          Laptop
        </h3>
        <h3 className="btn btn-category " id="2" onClick={handleCategoryChange}>
          Mobiles
        </h3>
        <h3 className="btn btn-category " id="3" onClick={handleCategoryChange}>
          Monitors
        </h3>
      </div>

      <Main data={data} onAdd={onAdd} removeItems={removeItems} />
    </div>
  );
}
