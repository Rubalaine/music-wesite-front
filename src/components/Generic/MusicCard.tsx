import React from "react";
// import { navigate } from "react-router-dom";
import styled from "styled-components";
import Paragraph from "../Typography/Paragraph";
import Cta from "./Cta";
interface Props {
  title: string;
  artist: string;
  imageUrl: string;
  id: string;
}

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-light-1);
  padding: 2rem;
  font-size: 1.3rem;
  padding: 1.6rem;
  border-radius: 10px;
  box-shadow: var(--morph-shadow);
  transition: all 0.4s;
  &:hover {
    box-shadow: var(--morph-shadow-hov);
    color: var(--color-red);
    cursor: pointer;
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
  backface-visibility: hidden;
  transition: all 0.3s;
`;
const TextSpace = styled.div`
  width: 100%;
`;

const MusicCard = ({ id, title, artist, imageUrl }: Props) => {
  return (
    <Card
    // onClick={navigate(`/project/${id}/${(title + " " + artist).replaceAll(" ", "$$$")}`)}
    >
      <Image
        src={"http://localhost:1337" + imageUrl}
        alt={artist + " " + title}
        loading="lazy"
      />
      <Cta
        page={`/project/${id}/${(title + " - " + artist).replaceAll(
          " ",
          "$$$"
        )}`}
      />
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
