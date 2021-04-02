import React from "react";
import styled from "styled-components";
interface Props {
  title: string;
  artist: string;
  imageUrl: string;
}

const Card = styled.div`
  display: flex;
  background-color: var(--color-white);
  padding: 2rem;
  font-size: 1.6rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;
const MusicCard = ({ title, artist, imageUrl }: Props) => {
  return (
    <Card>
      some
    </Card>
  );
};

export default MusicCard;
