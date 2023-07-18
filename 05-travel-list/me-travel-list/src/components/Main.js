import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import List from "./List";
import States from "./States";

const Main = () => {
  const [items, setItems] = useState([]);

  const addItems = (item) => {
    setItems((items) => [...items, item]);
  };
  const handelDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleCheckItems = (id) => {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
  };
  const handleClearList = () => {
    const confirmed = window.confirm("Are you sure want to delete all items?");
    if (confirmed) {
      setItems([]);
    }
  };
  return (
    <main className='app'>
      <Logo />
      <Form onAddItems={addItems} />
      <List
        items={items}
        onDeleteItem={handelDeleteItem}
        onCheckedItem={handleCheckItems}
        clearList={handleClearList}
      />
      <States items={items} />
    </main>
  );
};

export default Main;
