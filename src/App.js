import React, { useState } from 'react';
import './app.scss';
import Header from './Components/Header';
import Leftelements from './Components/Leftelements';
import data from './data';
import data2 from './data2';
import data3 from './data3';

export default function App() {
  const [newData, setNewData] = useState(data);
  const [kartItems, setKartItems] = useState([]);
  const handleCategoryChange = (e) => {
    let value = e.target.id;
    if (value == 1) {
      setNewData(data);
    } else if (value == 2) {
      setNewData(data2);
    } else {
      setNewData(data3);
    }
  };

  const onAdd = (product) => {
    const exist = kartItems.find((x) => x.id === product.id);
    if (exist) {
      setKartItems(
        kartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setKartItems([...kartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = kartItems.find((item) => item.id === product.id);
    if (exist.qty == 1) {
      setKartItems(kartItems.filter((x) => x.id !== product.id));
    } else {
      setKartItems(
        kartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const cartDeleteItem = (id) => {
    setKartItems(kartItems.filter((k) => k.id !== id));
  };

  const removeItems = (id) => {
    setNewData(newData.filter((d) => d.id !== id));
  };
  return (
    <div>
      <Header
        kartItems={kartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        cartDeleteItem={cartDeleteItem}
      />
      <Leftelements
        data={newData}
        handleCategoryChange={handleCategoryChange}
        onAdd={onAdd}
        removeItems={removeItems}
      />
    </div>
  );
}
