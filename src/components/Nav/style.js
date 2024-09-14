import styled from 'styled-components';

export const NavWrapper = styled.nav`
  background-color: #f8f9fa; /* Cinza claro */
  padding: 1em;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin: 0.5em 0;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #007bff; /* Azul para links */
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
