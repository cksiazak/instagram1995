import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionWrapper } from '../styles/GlobalStyles';
import {
  PageHeading,
  Form,
  InputLabel,
  InputField,
  UnderForm,
  SubmitButton,
  AuthLink
} from '../styles/AuthStyles';

const Login = () => {
  const [formState, setFormState] = useState({
    username: '',
    password: ''
  });

  const changeHandler = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <SectionWrapper>
      <PageHeading>Login</PageHeading>
      <Form onSubmit={submitHandler}>
        <InputLabel htmlFor='username'>Username</InputLabel>
        <InputField
          type='text'
          name='username'
          value={formState.username}
          onChange={changeHandler}
        />
        <InputLabel htmlFor='password'>Password</InputLabel>
        <InputField
          type='password'
          name='password'
          value={formState.password}
          onChange={changeHandler}
        />
        <SubmitButton type='submit'>Submit</SubmitButton>
      </Form>
      <UnderForm>
        Did you need to Register? <AuthLink to='/register'>Click Here</AuthLink>
      </UnderForm>
    </SectionWrapper>
  );
};

export default Login;
