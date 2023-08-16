import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { styled } from "styled-components";

const SAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;
`;
const Main = styled.main`
  background-color: var(--color-grey-0);
  padding: 5rem;
`;

const AppLayout = () => {
  return (
    <SAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </SAppLayout>
  );
};

export default AppLayout;
