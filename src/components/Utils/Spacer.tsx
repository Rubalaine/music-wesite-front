import styled from "styled-components";
interface Props {
  size?: "xsm" | "sm" | "md" | "lg" | "xlg" | "xxlg";
}
const Space = styled.span`
  display: inline-block;
  margin-bottom: ${({ size }: Props) => {
    switch (size) {
      case "xsm":
        return "0.5rem";
      case "sm":
        return "1rem";
      case "md":
        return "2rem";
      case "lg":
        return "2.5rem";
      case "xlg":
        return "3rem";
      case "xxlg":
        return "4rem";
      default:
        return "1.5rem";
    }
  }};
`;
const Spacer = ({ size }: Props) => {
  return <Space size={size} />;
};

export default Spacer;
