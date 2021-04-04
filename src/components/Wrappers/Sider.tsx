import React from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
  remove: () => void;
}
const WP = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: calc(100vh - 10rem);
`;
const Sider = ({ children, remove }: Props) => (
  <WP onClick={remove}>{children}</WP>
);

export default Sider;
