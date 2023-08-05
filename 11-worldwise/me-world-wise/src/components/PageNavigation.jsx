import { NavLink } from "react-router-dom";

const PageNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/product'>Product</NavLink>
        </li>
        <li>
          <NavLink to='/pricing'>Pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNavigation;
