import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 100px;
`;

export const Section = props => (
  <SectionContainer>{props.children}</SectionContainer>
);

const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 35%;
`;

export const InnerContainer = props => (
  <InnerWrapper>{props.children}</InnerWrapper>
);

const AppHeader = styled.h1`
  font-size: 8rem;
  padding-bottom: 25px;
  border-bottom: 3px dashed black;
  margin-bottom: 50px;
`;

export const AppHeading = props => <AppHeader>{props.children}</AppHeader>;

const AuthHeading = styled.h2`
  font-size: 5rem;
  padding: 30px 0px 15px;
`;

export const PageHeader = props => <AuthHeading>{props.children}</AuthHeading>;

const AskText = styled.p`
  font-size: 2.5rem;
  text-align: right;
  width: 100%;
  padding-top: 15px;
`;

export const UserAsk = props => <AskText>{props.children}</AskText>;
