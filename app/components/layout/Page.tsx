import React from "react";
import styled from "styled-components";
import NavBar from "./Navbar";

const StyledPage = styled.div`
  min-height: 100vh;
  background: ${(props): string => props.theme.colors.bgGradient};
  overflow: auto;
`;

const Content = styled.div`
  padding: 0 16px;
  padding-bottom: 16px;
`;

type PageProps = {
  render: () => React.ReactElement;
};

const Page: React.FC<PageProps> = ({ render }) => (
  <StyledPage>
    <NavBar />
    <Content>{render()}</Content>
  </StyledPage>
);

export default Page;
