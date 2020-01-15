import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageHeading = styled.h2`
  font-size: 2rem;
  padding-bottom: 25px;
`;

export const Form = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  font-size: 1.2rem;
  width: 100%;
  text-align: left;
`;

export const InputField = styled.input`
  width: 100%;
  margin: 2px 0px 10px;
  padding: 2px;
  font-size: 1rem;
`;

export const UnderForm = styled.span`
  display: flex;
  padding-top: 15px;
  font-size: 1rem;
`;

export const SubmitButton = styled.button`
  font-size: 1.2rem;
  cursor: pointer;
  margin: 10px 0px 0px;
`;

export const AuthLink = styled(Link)`
  color: blue;
  margin-left: 5px;
`;
