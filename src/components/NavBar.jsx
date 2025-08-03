import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
  padding: 1rem 0;
  gap: 2rem;
`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 8px;

  &.active {
    background-color: ${({ theme }) => theme.secondary};
  }

  &:hover {
    opacity: 0.9;
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <StyledLink to="/editor">עריכת קורות חיים</StyledLink>
      <StyledLink to="/preview">תצוגה</StyledLink>
      <StyledLink to="/settings">הגדרות</StyledLink>
    </Nav>
  );
}
