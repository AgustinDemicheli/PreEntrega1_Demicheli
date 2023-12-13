// ItemListContainer.jsx
import React from 'react';
import './ItemListContainer.css'
const ItemListContainer = ({ greeting, productList }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>{greeting}</h2>
          <ul  className='products'>
            {productList.map((product) => (
              <li key={product.id}>
                {product.nombre} - ${product.precio}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
