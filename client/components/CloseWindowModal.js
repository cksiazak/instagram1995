import React from 'react';
import styled from 'styled-components';

const ErrorWindow = styled.div`
  position: fixed;
  width: 100%;
  text-align: center;
  z-index: 600;
  left: 0;
  top: 50%;
`;

const Modal = () => {
  return <ErrorWindow>TEST</ErrorWindow>;
};


export default Modal;