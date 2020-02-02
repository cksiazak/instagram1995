import React from 'react';
import AuthForm from '../components/AuthForm';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const InnerContianer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const SignUp = () => {
  const submitHandler = (e, form) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Section>
      <InnerContianer>
        <h1>Sign Up</h1>
        <AuthForm submitHandler={submitHandler} AuthPage='Sign Up' />
      </InnerContianer>
    </Section>
  );
};

export default SignUp;
