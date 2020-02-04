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
        <AuthForm submitHandler={submitHandler} />
        <UserAsk>
          Already have an account?{' '}
          <Link href='/login'>
            <a>Login</a>
          </Link>
        </UserAsk>
      </InnerContainer>
    </Section>
  );
};

export default SignUp;
