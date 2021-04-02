import React from "react";
import styled from "styled-components";
interface Props {
  size?: number;
  children: React.ReactNode;
}
const Icon = styled.div`
  color: currentColor;
  font-size: ${({ size }: Props) => size || 1.6}rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = ({ size, children }: Props) => (
  <Icon size={size || 2}>{children}</Icon>
);

export default IconWrapper;
