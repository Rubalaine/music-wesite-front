import React from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  grid-gap: 1rem;
`;
const GridCards = ({ children }: Props) => {
  return <Grid>{children}</Grid>;
};

export default GridCards;
