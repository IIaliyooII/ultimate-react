import { Link, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();
  const className =
    "text-sm text-blue-500 duration-150 hover:text-blue-600 hover:underline";

  if (to === "-1") {
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default LinkButton;
