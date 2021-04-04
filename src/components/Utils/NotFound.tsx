import styled from "styled-components";
import { BiHeadphone } from "react-icons/bi";
import IconWrapper from "../Wrappers/IconWrapper";
import Heading from "../Typography/Heading";
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const NotFound = () => {
  return (
    <Wrapper>
      <IconWrapper size={6}>
        <BiHeadphone />
      </IconWrapper>
      <Heading>Não Foi encontrado</Heading>
    </Wrapper>
  );
};

export default NotFound;
