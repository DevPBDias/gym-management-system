"use client";

import styled from "styled-components";

export const ContainerForm = styled.form`
  color: #bf4f74;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const ContainerField = styled.fieldset`
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
`;

export const LoginLabel = styled.label`
  color: #582436;
  font-size: 1em;
  padding: 0.25em 1em;
`;

export const LoginBtn = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  &:hover {
    scale: 1.2;
    background-color: #bf4f74;
    color: white;
    box-shadow: 0 0 10px #719ece;
  }
`;

export const LoginInput = styled.input`
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  width: 300px;
  &:focus {
    outline: none !important;
    box-shadow: 0 0 10px #719ece;
    border-color: #7ea522;
  }
`;
