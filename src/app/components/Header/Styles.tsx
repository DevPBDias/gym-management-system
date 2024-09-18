"use client";

import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: #eeeced;
  min-height: 100dvh;
  margin-right: auto;
  padding: 1.5em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  background: #3b24bb;

  section {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  picture {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 2em;
  }

  .iconContainer {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .navContent {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    gap: 0.5em;
  }

  .iconsBox {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  gap: 2.2em;

  .link {
    color: #eeeced;
    font-size: large;
    font-weight: bold;

    &:hover {
      color: #d5e217;
    }
  }
`;
