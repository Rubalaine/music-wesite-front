import { Link } from "react-router-dom";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
  to: string;
  size?: "sm" | "md" | "lg" | "xl";
  weight?: "thin" | "normal" | "bold";
}
const Lnk = styled(Link)`
  display: flex;
  width: 13rem;
  font-size: inherit;
  /* justify-content: space-between; */
  text-decoration: none;
  font-weight: inherit;
  padding: 0 1.5rem;
  border-bottom: 2px solid currentColor;
  color: var(--color-indigo);
  font-size: ${({ size }: Props) => {
    switch (size) {
      case "sm":
        return 1.2;
      case "md":
        return 1.4;
      case "lg":
        return 1.6;
      case "xl":
        return 1.8;
      default:
        return 1.4;
    }
  }}rem;
  font-weight: ${({ weight }: Props) => {
    switch (weight) {
      case "thin":
        return 200;
      case "normal":
        return 300;
      case "bold":
        return 300;
      default:
        return 400;
    }
  }};
  transition: all 0.4s;
  &:active,
  &:hover {
    background-color: var(--color-indigo);
    color: var(--color-white);
  }
`;
const Linker = ({ to, children }: Props) => <Lnk to={to}>{children}</Lnk>;

export default Linker;
