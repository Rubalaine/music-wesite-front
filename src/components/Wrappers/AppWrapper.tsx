import React from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
  showNav: true | false;
}
const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-y: ${({ showNav }: Props) => showNav && "hidden"};
  height: ${({ showNav }: Props) => showNav && "100vh"};

  max-width: 980px;
  padding: 1.5rem;
  margin: 0 auto;
  margin-top: 7rem;
  transition: all 0.5s;
  background-color: var(--color-light);
  border-radius: ${({ showNav }: Props) => showNav && "10px"};
  box-shadow: ${({ showNav }: Props) =>
    showNav && "0 0 50px -12px rgba(0, 0, 0, 0.25)"};
  transform: ${({ showNav }: Props) => showNav && "scale(.85) translateX(33%)"};
  @media screen and (max-width: 780px) {
    margin-top: 0;
  }
`;
const AppWrapper = ({ children, showNav }: Props) => (
  <Wrapper showNav={showNav}>{children}</Wrapper>
);
export default AppWrapper;
