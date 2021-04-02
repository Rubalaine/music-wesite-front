import React from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
}
const Container = styled.main`
  background-color: var(--color-red-light);
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
`;
const MainContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default MainContainer;
