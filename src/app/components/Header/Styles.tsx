"use client";

import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: #eeeced;
  width: 100%;
  padding: 0.5em 2em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  background: #3b24bb;

  .iconContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  gap: 2em;

  .link {
    color: #eeeced;
    font-size: large;
    font-weight: bold;

    &:hover {
      color: #d5e217;
    }
  }
`;
