import { styled } from "styled-components";

const SHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 2rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

const Header = () => {
  return <SHeader>Header</SHeader>;
};

export default Header;
