"use client";

import styled from "styled-components";

export const ContainerForm = styled.form`
  color: #eeeced;
  width: 40%;
  padding: 1em;
  border: 2px solid #eeeced;
  border-radius: 3px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 1;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
`;

export const ContainerField = styled.fieldset`
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`;

export const LoginLabel = styled.label`
  color: #faf9f9;
  font-size: 1em;
  padding: 0.25em 1em;
`;

export const LoginBtn = styled.button`
  color: #faf9f9;
  background-color: #0b0e13;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #eeeced;
  border-radius: 3px;
  &:hover {
    scale: 1.2;
    box-shadow: 0 0 10px #719ece;
  }
`;

export const LoginInput = styled.input`
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #eeeced;
  background-color: #657694;
  border-radius: 3px;
  width: 300px;
  &:focus {
    outline: transparent;
    box-shadow: 0 0 10px #719ece;
    border-color: #153a61;
  }
`;
