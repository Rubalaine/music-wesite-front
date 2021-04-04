import React from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
}
const Container = styled.main`
  margin-right: 2rem;
  flex-basis: 90rem;
`;
const MainContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
