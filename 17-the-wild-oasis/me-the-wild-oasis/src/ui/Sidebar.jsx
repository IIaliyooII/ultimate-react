import { styled } from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const SSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  background-color: var(--color-grey-0);
  padding: 2rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
`;

const Sidebar = () => {
  return (
    <SSidebar>
      <Logo />
      <MainNav />
    </SSidebar>
  );
};

export default Sidebar;
