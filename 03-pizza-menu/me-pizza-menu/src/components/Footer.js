import React from "react";

const Footer = () => {
  const time = new Date().getHours();
  const openTime = 12;
  const closeTime = 23;
  const isOpen = time >= openTime && time <= closeTime;
  return (
    <footer className='footer'>
      <p>
        {new Date().toLocaleTimeString()}.{isOpen ? "We're currently open!" : "Sorry we're closed"}
      </p>
    </footer>
  );
};

export default Footer;
