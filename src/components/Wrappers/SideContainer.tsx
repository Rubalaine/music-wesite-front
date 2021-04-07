import React from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
}
const Container = styled.aside`
  flex-shrink: 1;
  position: sticky;
  top: 8.5rem;
  @media screen and (max-width: 780px) {
    top: 2rem;
  }
  @media screen and (max-width: 600px) {
    position: initial;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10rem;
  }
  /* width: 65rem; */
`;
const SideContainer = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default SideContainer;
