import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../Generic/SearchBar";
import { BsHouse } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import IconWrapper from "../Wrappers/IconWrapper";
import Paragraph from "../Typography/Paragraph";
interface Props {
  showNav: true | false;
  setClicked: () => void;
}
const Hamburguer = styled.nav`
  display: none;
  position: fixed;
  z-index: 69;
  bottom: 4rem;
  /* bottom: 3rem; */
  /* display: flex; */
  background-color: var(--color-black);
  width: 90%;
  max-width: 60rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 780px) {
    display: flex;
  }
`;
const Option = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  border-radius: 10px;
  padding: 0.6rem 1.6rem;
  color: var(--color-whit);
  border: 2px solid transparent;
  transition: all 0.3s;
  &.active {
    /* border-color: var(--color-red); */
  }
`;
const Burguer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  border-radius: 10px;
  padding: 0.6rem 1.6rem;
  color: var(--color-whit);
  border: 2px solid transparent;

  &:active {
    color: var(--color-red);
  }
`;
const HamburguerMenu = ({ showNav, setClicked }: Props) => {
  return (
    <Hamburguer>
      <Option exact to="/">
        <IconWrapper size={2.5}>
          <BsHouse />
        </IconWrapper>
        <Paragraph>início</Paragraph>
      </Option>
      <SearchBar />
      <Burguer
        onClick={() => {
          setClicked();
        }}
      >
        <IconWrapper size={2.5}>
          {showNav ? <AiOutlineClose /> : <FaHamburger />}
        </IconWrapper>
      </Burguer>
    </Hamburguer>
  );
};

export default HamburguerMenu;
