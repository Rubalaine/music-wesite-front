import React from "react";
import styled from "styled-components";
import IconWrapper from "../Wrappers/IconWrapper";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import SearchBar from "../Generic/SearchBar";
import {  NavLink } from "react-router-dom";
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
const Lnk = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  transition: all 0.4s;
  padding: 0.6rem 0.9rem;
  border-radius: 5px;
  &.active {
    background-color: var(--color-red);
    &:hover {
      color: var(--color-white);
    }
  }
  &:hover {
    color: var(--color-red-light);
  }
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
          <NavLi>
            <Lnk to="/musics">Musicas</Lnk>
          </NavLi>
          <NavLi>
            <Lnk to="/albuns">Albuns</Lnk>
          </NavLi>
          <NavLi>
            <Lnk to="/mixtapes">Mixtapes</Lnk>
          </NavLi>
          <NavLi>
            <Lnk exact to="/">eps</Lnk>
          </NavLi>
          <NavLi>generos</NavLi>
        </NavUl>
      </NavBar>
    </Nav>
  );
};

export default Navigation;
