import React from 'react';
import { NavWrapper } from './style';

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li><a href="/">Início</a></li>
        <li><a href="/">Sobre</a></li>
        <li><a href="/">HQs</a></li>
        <li><a href="/">Mangás</a></li>
        <li><a href="/">Contato</a></li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
