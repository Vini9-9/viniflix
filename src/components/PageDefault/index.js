import React from 'react';
// import Button from '../../../components/Button';
// import { Link } from 'react-router-dom';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Button';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;


function PageDefault({ children }) {
  return (
    <>
      <Menu />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
  );
}

export default PageDefault;