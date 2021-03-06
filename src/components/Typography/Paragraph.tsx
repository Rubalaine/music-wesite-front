import styled from "styled-components";
interface Props {
  size?: "sm" | "md" | "lg" | "xl";
  weight?: "thin" | "normal" | "bold";
  center?: true | false;
  children: React.ReactNode;
  limit?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}
const Text = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${({ limit }: Props) => limit};
  -webkit-box-orient: vertical;
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
const Paragraph = ({ size, center, children, weight, limit }: Props) => (
  <Text size={size} center={center} weight={weight} limit={limit}>
    {children}
  </Text>
);

export default Paragraph;
