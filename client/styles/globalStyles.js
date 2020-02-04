import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%
  }

  body {
    background: #008080
  }
`;

export const WindowWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const InnerWindow = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #c0c0c0;
  border: 3px outset lightgray;
  padding-bottom: 100px;
  margin-top: 50px;
  max-width: 1200px;
`;

export const WindowBar = styled.div`
  background: #000080;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 2rem;
    color: white;
    padding: 3px 5px;
  }

  button {
    background: #c0c0c0;
    border: 2px outset lightgray;
    display: flex;
    align-items: center;
    padding: 0px 2px;
    margin: 2px;
    margin-right: 3px;
    font-size: 1.25rem;

    &:hover {
      cursor: pointer;
    }

    &:active {
      border: 2px inset lightgray;
    }

    span {
      display: block;
    }
  }
`;
