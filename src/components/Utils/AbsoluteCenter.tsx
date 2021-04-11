import styled from "styled-components";
interface Props {
  children: React.ReactNode;
}
const Center = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const AbsoluteCenter = ({ children }: Props) => {
  return <Center>{children}</Center>;
};

export default AbsoluteCenter;
