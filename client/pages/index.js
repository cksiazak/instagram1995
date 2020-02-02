import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const NextagramTitle = styled.h1`
  font-size: 8rem;
  padding: 25px 0px 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;

  a {
    text-decoration: none;
    font-size: 3rem;
    margin: 15px;
    border: 3px outset;
    user-select: none;

    &:hover {
      cursor: pointer;
    }

    &:active {
      border: 3px inset;
    }
  }
`;

const LoginAnchor = styled.a`
  padding: 10px 26px;
`;
const SignUpAnchor = styled.a`
  padding: 10px;
`;

const Home = () => {
  return (
    <SectionWrapper>
      <NextagramTitle>Nextagram95</NextagramTitle>
      <ButtonWrapper>
        <Link href='/login'>
          <LoginAnchor>Login</LoginAnchor>
        </Link>
        <Link href='/signup'>
          <SignUpAnchor>Sign Up</SignUpAnchor>
        </Link>
      </ButtonWrapper>
    </SectionWrapper>
  );
};

export default Home;
