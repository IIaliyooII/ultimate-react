import React from "react";

const States = ({ items }) => {
  if (!items.length)
    return (
      <p className='stats'>
        <em>Start adding some items in your packing list.</em>
      </p>
    );

  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentageItems = Math.round((numPacked / numItem) * 100);
  return (
    <footer className='stats'>
      {percentageItems === 100 ? (
        <em>You got everything! Ready to go :)</em>
      ) : (
        <em>
          💼 You have {numItem} items on your list, and you already packed {numPacked} ({percentageItems}%)
        </em>
      )}
    </footer>
  );
};

export default States;
