import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Btn = styled.button``;
const Button = ({ children }: Props) => {
  return <Btn>{children}</Btn>;
};

export default Button;
