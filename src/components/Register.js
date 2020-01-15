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

const Signup = () => {
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
      <PageHeading>Register</PageHeading>
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
        Did you need to Login?<AuthLink to='/login'>Click Here</AuthLink>
      </UnderForm>
    </SectionWrapper>
  );
};

export default Signup;
