import React, { useEffect, useState } from 'react';

import './style.css';

const Plans = () => {
  const { images, setImages } = useState([
    'src/assets/img/1.png',
    'src/assets/img/2.png',
  ]);
  const [item, setItem] = useState([]);

  const handleOnDrag = (e, itemType) => {
    e.dataTransfer.setData('itemType', itemType);
  };

  const handleOnDrop = (e) => {
    const itemType = e.dataTransfer.getData('itemType');
    console.log(itemType);
    setItem([...item, itemType]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div className="main">
      <div className="items">
        <div
          className="item"
          draggable="true"
          onDragStart={(e) => handleOnDrag(e, 'item a')}
        >
          item a
        </div>
        <div
          className="item"
          draggable="true"
          onDragStart={(e) => handleOnDrag(e, 'item b')}
        >
          item b
        </div>
        <div
          className="item"
          draggable="true"
          onDragStart={(e) => handleOnDrag(e, 'item c')}
        >
          item c
        </div>
      </div>
      <div
        className="page"
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
      >
        {item.map((i, index) => (
          <div key={index}>{i}</div>
        ))}
      </div>
      <div
        className="page"
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
      >
        {item.map((i, index) => (
          <div key={index}>{i}</div>
        ))}
      </div>
      <div
        className="page"
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
      >
        {item.map((i, index) => (
          <div key={index}>{i}</div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
