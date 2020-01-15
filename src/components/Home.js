import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SectionWrapper } from '../styles/GlobalStyles';

const HomeHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid black;
  padding-bottom: 25px;
  margin-bottom: 25px;
`;

const WelcomeMsg = styled.h2`
  font-size: 2rem;
  padding-bottom: 25px;
`;
const UnderHeading = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const AuthButton = styled(Link)`
  width: 48%;
  text-align: center;
  border: outset 2px darkgray;
  padding: 10px;
  font-size: 1.2rem;
  text-decoration: none;
  color: black;

  &:active {
    border: inset 2px darkgray;
    background: blue;
    color: white;
  }
`;

const Home = () => {
  return (
    <SectionWrapper>
      <HomeHeading>
        <WelcomeMsg>Welcome to Instagram1995!</WelcomeMsg>
        <UnderHeading>
          I thought it'd be fun to rebuild instagram in the style of 1995
          windows applications.
        </UnderHeading>
      </HomeHeading>
      <ButtonWrapper>
        <AuthButton to='/register'>Register</AuthButton>
        <AuthButton to='/login'>Login</AuthButton>
      </ButtonWrapper>
    </SectionWrapper>
  );
};

export default Home;
