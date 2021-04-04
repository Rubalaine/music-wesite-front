import React from "react";
import styled from "styled-components";
import IconWrapper from "../Wrappers/IconWrapper";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
interface Props {
  visible: true | false;
  hide: () => void;
}
const Nav = styled.nav`
  color: var(--color-white);
  background-color: var(--color-grey-dark);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 69;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transform: ${({ visible }: { visible: boolean }) =>
    visible ? "translateX(0)" : "translateX(-100%)"};
  width: 30rem;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s;
`;
const Lnk = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  transition: all 0.4s;
  padding: 0.6rem 0.9rem;
  border-radius: 5px;
  @media screen and (max-width: 980px) {
    display: inline-block;
    width: 20rem;
  }
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
  flex-direction: column;
  color: var(--color-white);
  font-size: 1.7rem;
  font-weight: 300;
  list-style-type: none;
  align-items: center;
`;
const NavLi = styled.li`
  @media screen and (max-width: 980px) {
    margin-right: 0 !important;
    margin-top: 2rem;
    text-align: center;
  }
  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;
const Close = styled.button`
  background-color: inherit;
  font-family: inherit;
  color: var(--colo-white);
  border: none;
  padding: 1rem;
  display: flex;
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 3rem;
`;
const SideNav = ({ visible, hide }: Props) => {
  return (
    <Nav visible={visible}>
      <Close onClick={hide}>
        fechar&nbsp;&nbsp;&nbsp;&nbsp;
        <IconWrapper>
          <AiOutlineClose />
        </IconWrapper>
      </Close>

      <IconWrapper>
        <BsFillMusicPlayerFill />
        Musica
      </IconWrapper>

      <NavUl>
        <NavLi>
          <Lnk to="/musics" onClick={hide}>
            Musicas
          </Lnk>
        </NavLi>
        <NavLi>
          <Lnk to="/albuns" onClick={hide}>
            Albuns
          </Lnk>
        </NavLi>
        <NavLi>
          <Lnk to="/mixtapes" onClick={hide}>
            Mixtapes
          </Lnk>
        </NavLi>
        <NavLi>
          <Lnk to="/eps" onClick={hide}>
            eps
          </Lnk>
        </NavLi>
        <NavLi>generos</NavLi>
      </NavUl>
    </Nav>
  );
};

export default SideNav;
