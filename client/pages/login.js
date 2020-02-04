import React from 'react';
import Link from 'next/link';

// import components
import AuthForm from '../components/Authentication/AuthForm';
import {
  Section,
  InnerContainer,
  AppHeading,
  PageHeader,
  UserAsk
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
        <AuthForm submitHandler={submitHandler} />
        <UserAsk>
          Need an account?{' '}
          <Link href='/signup'>
            <a>Register</a>
          </Link>
        </UserAsk>
      </InnerContainer>
    </Section>
  );
};

export default Login;
