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
  width: 90%;
  height: 95vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #c0c0c0;
  border: 3px outset;
`;

export const WindowBar = styled.div`
  background: #000080;
  width: 100%;

  p {
    font-size: 2rem;
    color: white;
    padding: 3px 5px;
  }
`;
