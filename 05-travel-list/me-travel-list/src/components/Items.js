import React from "react";

const Items = ({ item, onDeleteItem, onCheckedItem }) => {
  return (
    <li>
      <input type='checkbox' value={item.packed} onChange={() => onCheckedItem(item.id)} />
      <span className={item.packed ? "item-active" : ""}>
        {item.quantity} {item.inputDesc}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Items;
