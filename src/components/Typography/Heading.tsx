import styled from "styled-components";
interface Props {
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  weight?: "thin" | "normal" | "bold";
  center?: true | false;
  children: React.ReactNode;
}
const Text = styled.h2`
  text-transform: capitalize;
  letter-spacing: ${({ size }: Props) => {
    return size === "xxl" ? "2px" : ".5px";
  }};
  font-size: ${({ size }: Props) => {
    switch (size) {
      case "sm":
        return 1.6;
      case "md":
        return 1.8;
      case "lg":
        return 2;
      case "xl":
        return 2.5;
      case "xxl":
        return 4;
      default:
        return 1.8;
    }
  }}rem;
  font-weight: ${({ weight }: Props) => {
    switch (weight) {
      case "thin":
        return 300;
      case "normal":
        return 500;
      case "bold":
        return 600;
      default:
        return 400;
    }
  }};
`;
const Heading = ({ size, center, children, weight }: Props) => (
  <Text size={size} center={center} weight={weight}>
    {children}
  </Text>
);

export default Heading;
