import React from "react";
import styled from "styled-components";
import Paragraph from "../Typography/Paragraph";
import Cta from "./Cta";
interface Props {
  title: string;
  artist: string;
  imageUrl: string;
}

const Card = styled.div`
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-light-1);
  padding: 2rem;
  font-size: 1.3rem;
  padding: 1.6rem;

  margin: 1rem;
  border-radius: 10px;
  box-shadow: var(--morph-shadow);
  transition: all 0.4s;
  &:hover {
    box-shadow: var(--morph-shadow-hov);
  }
  &:hover img {
    filter: blur(2px);
    /* transform: scale(1.03); */
  }
  &:hover a {
    visibility: visible;
    opacity: 1;
    transform: translateY(4rem);
  }
`;
const Image = styled.img`
  position: relative;
  display: inline-block;
  width: 100%;
  border-radius: 10px;
  transition: all 0.3s;
`;
const TextSpace = styled.div`
  width: 100%;
`;
/**
 * TODO:
 * Make a card like spotify
 * with blur animation on hover
 * and show a button while hover
 *
 */
const MusicCard = ({ title, artist, imageUrl }: Props) => {
  return (
    <Card>
      <Image
        src={"http://localhost:1337" + imageUrl}
        alt={artist + " " + title}
      />
      <Cta page={title} />
      <TextSpace>
        <Paragraph>{title}</Paragraph>
        <Paragraph weight="thin" size="sm">
          {artist}
        </Paragraph>
      </TextSpace>
    </Card>
  );
};

export default MusicCard;
