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

const SignUp = () => {
  const submitHandler = (e, form) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Section>
      <InnerContainer>
        <AppHeading>Nextagram95</AppHeading>
        <PageHeader>Sign Up</PageHeader>
        <AuthForm submitHandler={submitHandler} AuthPage='Sign Up' />
        <p>
          Already have an accoumt?{' '}
          <Link href='/login'>
            <a>Sign In</a>
          </Link>
        </p>
      </InnerContainer>
    </Section>
  );
};

export default SignUp;
