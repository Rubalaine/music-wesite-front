import React from "react";
import styled from "styled-components";
import IconWrapper from "../Wrappers/IconWrapper";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import SearchBar from "../Generic/SearchBar";
const Nav = styled.nav`
  color: var(--color-white);
  background-color: var(--color-grey-dark);
`;
const NavBar = styled.div`
  max-width: 980px;
  margin: 0 auto;
  font-weight: 100;
  padding: 1.8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavUl = styled.ul`
  display: flex;
  color: var(--color-white);
  font-size: 1.7rem;
  font-weight: 300;
  list-style-type: none;
`;
const NavLi = styled.li`
  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;
const Navigation = () => {
  return (
    <Nav>
      <NavBar>
        <IconWrapper>
          <BsFillMusicPlayerFill />
          Musica
        </IconWrapper>

        <SearchBar />

        <NavUl>
          <NavLi>musicas</NavLi>
          <NavLi>albuns</NavLi>
          <NavLi>mixtapes</NavLi>
          <NavLi>eps</NavLi>
          <NavLi>gêneros</NavLi>
        </NavUl>
      </NavBar>
    </Nav>
  );
};

export default Navigation;
