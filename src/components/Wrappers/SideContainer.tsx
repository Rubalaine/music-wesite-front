import React from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
}
const Container = styled.aside`
  flex-shrink: 1;
  position: sticky;
  top: 8.5rem;
  /* width: 65rem; */
`;
const SideContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default SideContainer;
