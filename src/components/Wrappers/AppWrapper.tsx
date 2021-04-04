import React from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
}
const Wrapper = styled.div`
  position: relative;
  max-width: 980px;
  padding: 1.5rem;
  margin: 0 auto;
  margin-top: 7rem;
`;
const AppWrapper = ({ children }: Props) => <Wrapper>{children}</Wrapper>;
export default AppWrapper;
