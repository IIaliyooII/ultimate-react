/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Button = ({ children, disabled, to, onClick }) => {
  const className =
    "inline-block rounded-lg bg-yellow-500 px-4 py-2 font-semibold uppercase tracking-wide text-stone-800 outline-none duration-150 hover:bg-stone-800 hover:text-yellow-500 active:text-yellow-300";
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button disabled={disabled} onClick={onClick} className={className}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
