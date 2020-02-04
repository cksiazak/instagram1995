import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2.5rem;
  padding-top: 15px;
`;
const InputLabel = styled.label`
  padding-bottom: 10px;
`;
const InputField = styled.input`
  font-size: 2.5rem;
  padding: 5px 0px;
  margin-bottom: 10px;
`;
const SubmitButton = styled.button`
  border: outset lightgray;
  background: #c0c0c0;
  cursor: pointer;
  font-size: 2.5rem;
  padding: 5px;

  &:active {
    border: inset lightgray;
  }
`;

const AuthForm = ({ submitHandler }) => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const changeHandler = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form onSubmit={e => submitHandler(e, form)}>
      <InputContainer>
        <InputLabel htmlFor='username'>Username:</InputLabel>
        <InputField type='text' name='username' onChange={changeHandler} />
        <InputLabel htmlFor='password'>Password:</InputLabel>
        <InputField type='password' name='password' onChange={changeHandler} />
      </InputContainer>
      <SubmitButton type='submit'>Submit</SubmitButton>
    </Form>
  );
};

export default AuthForm;
