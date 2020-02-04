import React from 'react';
import Link from 'next/link';

// import components
import AuthForm from '../components/Authentication/AuthForm';
import {
  Section,
  InnerContainer,
  AppHeading,
  PageHeader
} from '../components/Authentication/PageInformation';

const Login = () => {
  const submitHandler = (e, form) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Section>
      <InnerContainer>
        <AppHeading>Nextagram95</AppHeading>
        <PageHeader>Login</PageHeader>
        <AuthForm submitHandler={submitHandler} AuthPage='Login' />
        <p>
          Need an accoumt?{' '}
          <Link href='/signup'>
            <a>Sign Up</a>
          </Link>
        </p>
      </InnerContainer>
    </Section>
  );
};

export default Login;
