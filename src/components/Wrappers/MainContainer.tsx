import React from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
}
const Container = styled.main`
  margin-right: 2rem;
  flex-basis: 90rem;
  @media screen and (max-width: 600px) {
    margin-right: 0;
    flex-basis: initial;
    margin-bottom: 3rem;
    width: 100%;
  }
`;
const MainContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
