import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SectionWrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  width: 40%;
  background: #6c6c6c;
  padding: 50px;
`;

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
  }
`;

const Home = () => {
  return (
    <SectionWrapper>
      <InnerWrapper>
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
      </InnerWrapper>
    </SectionWrapper>
  );
};

export default Home;
