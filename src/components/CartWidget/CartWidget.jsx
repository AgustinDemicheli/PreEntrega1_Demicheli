import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      <span className="badge badge-primary">2</span>
    </div>
  );
};

export default CartWidget;
