"use client";
import React, { useState } from "react";

const UpdateItemShop = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => Math.min(15, prev + 1));
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= 15) {
      setQuantity(value);
    }
  };

  const addToCart = () => {
    alert(`Added ${quantity} item(s) to cart!`);
  };

  return (
    <div className="item-inputs">
      <button className="btn-1 btn-3" onClick={decreaseQuantity}>
        <i className="fas fa-minus"></i>
      </button>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        max="5"
        value={quantity}
        onChange={handleInputChange}
      />
      <button className="btn-1 btn-3" onClick={increaseQuantity}>
        <i className="fas fa-plus"></i>
      </button>
      <button className="btn-1 btn-3" onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default UpdateItemShop;
