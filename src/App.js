import React from 'react';
import styled from 'styled-components';
import Routes from './components/routes';

const AppWrapper = styled.div`
  font-size: 62.5%;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: gray;
  border: 3px outset lightgray;
`;

const AppTitle = styled.h1`
  background: blue;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 1rem;
  padding: 4px 0px;
`;

function App() {
  return (
    <AppWrapper>
      <AppTitle>Instagram-1995.exe</AppTitle>
      
      <Routes />
    </AppWrapper>
  );
}

export default App;
