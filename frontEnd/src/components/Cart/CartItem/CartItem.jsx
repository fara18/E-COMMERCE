import React from "react";

export default function CartItem({ id, title, image, price, count }) {
  return (
    <div>
        <img src={`http://localhost:3333${image}`} alt={title} />
      <p>{title}</p>
      <p>{price * count}$</p>
      <p>{count}</p>

      <div>
        <button>-</button>
        <button>+</button>
      </div>

      <span>X</span>
    </div>
  );
}
