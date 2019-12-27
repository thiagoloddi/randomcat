import React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h1`
  margin-top: 10px;
  margin-bottom: 25px;
  font-size: 5rem;
  text-align: center;
`;

const Gif = styled.div`
  img {
    @media (min-width: 550px) {
      max-height: 480px;
      max-width: 480px;
    }

    @media (max-width: 550px) {
      max-height: 100%;
      max-width: 100%;
    }
  }
`;

const Home: React.FC = () => (
  <StyledPage>
    <PageTitle>RANDOM CAT</PageTitle>
    <Gif>
      <img src="/cat-gif-1.gif" alt="cat gif" />
      <a href="http://google.com">Vai pro google</a>
    </Gif>
  </StyledPage>
);

export default Home;
