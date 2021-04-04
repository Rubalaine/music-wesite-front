import React from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
}
const WP = styled.div`
  display: flex;
  align-items: flex-start;
`;
const Sider = ({ children }: Props) => <WP>{children}</WP>;

export default Sider;
