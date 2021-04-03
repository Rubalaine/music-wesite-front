import React from "react";
import styled from "styled-components";
interface Props {
  title: string;
  artist: string;
  imageUrl: string;
}

const Card = styled.div`
  width: 100%;
  background-color: var(--color-white);
  padding: 1rem;
  display: flex;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
const Image = styled.img`
  position: relative;
  display: inline-block;
  width: 10rem;
  border-radius: 10px;
  transition: all 0.3s;
  margin-right: 1rem;
`;
const TextSpace = styled.div``;
const TopCard = ({ title, artist, imageUrl }: Props) => {
  return (
    <Card>
      <Image
        src={"http://localhost:1337" + imageUrl}
        alt={artist + " " + title}
      />
      <TextSpace>
        <h3>{title}</h3>
        <p>{artist}</p>
      </TextSpace>
    </Card>
  );
};

export default TopCard;
