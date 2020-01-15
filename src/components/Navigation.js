import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  width: 99%;
`;

const UnorderedList = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  text-aling: center;
`;

const NaviLink = styled(NavLink)`
  font-size: 1.2rem;
`;

const Navigation = () => {
  return (
    <Nav>
      <UnorderedList>
        <ListItem>
          <NaviLink to='/'>Home</NaviLink>
        </ListItem>
        <ListItem>
          <NaviLink to='/register'>Register</NaviLink>
        </ListItem>
        <ListItem>
          <NaviLink to='/login'>Login</NaviLink>
        </ListItem>
      </UnorderedList>
    </Nav>
  );
};

export default Navigation;
