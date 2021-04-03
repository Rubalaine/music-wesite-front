import styled from "styled-components";
interface Props {
  size?: "sm" | "md" | "lg" | "xl";
  weight?: "thin" | "normal" | "bold";
  center?: true | false;
  children: React.ReactNode;
}
const Text = styled.p`
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
`;
const Paragraph = ({ size, center, children, weight }: Props) => (
  <Text size={size} center={center} weight={weight}>
    {children}
  </Text>
);

export default Paragraph;
