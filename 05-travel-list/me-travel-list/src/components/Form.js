import React, { useState } from "react";

const Form = ({ onAddItems }) => {
  const [inputDesc, setInputDesc] = useState("");
  const [quantity, setQuantitiy] = useState(1);

  const formHandler = (el) => {
    el.preventDefault();

    if (!inputDesc) return;

    const newItem = {
      inputDesc,
      quantity,
      packed: false,
      id: Date.now(),
    };
    onAddItems(newItem);

    setInputDesc("");
    setQuantitiy(1);
  };
  return (
    <form className='add-form' onSubmit={formHandler}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(el) => setQuantitiy(Number(el.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input type='text' placeholder='item...' value={inputDesc} onChange={(el) => setInputDesc(el.target.value)} />
      <button>Add</button>
    </form>
  );
};

export default Form;
