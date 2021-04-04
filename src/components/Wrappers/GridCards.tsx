import React from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  /* justify-items: center; */
  /* align-items: stretch; */
  grid-gap: 1rem;
`;
const GridCards = ({ children }: Props) => {
  return <Grid>{children}</Grid>;
};

export default GridCards;
