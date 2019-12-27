import React from "react";
import styled from "styled-components";

const StyledNavBar = styled.nav`
  font-size: 1.75rem;
  display: flex;
  justify-content: flex-end;
  padding: 0 16px;
  ul {
    li {
      user-select: none;
      display: inline-block;
      padding: 16px;
      cursor: pointer;
      transition: background-color 0.75s;
      &:hover {
        background-color: rgba(0, 0, 0, 0.03);
      }
    }
  }
`;

const NavBar: React.FC = () => (
  <StyledNavBar>
    <ul>
      <li>UPLOAD YOUR CAT</li>
      <li>MORE CATS</li>
    </ul>
  </StyledNavBar>
);

export default NavBar;
