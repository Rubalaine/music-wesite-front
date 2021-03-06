import React from "react";
import styled from "styled-components";
import { shakeWell } from "../Utils/animations";
import { Bta } from "./Cta";
import Heading from "./../Typography/Heading";
import Paragraph from "./../Typography/Paragraph";
/**
 * TODO:
 * use react-color-extractor to extract color from the image and makeit default background color of the card
 */
interface Props {
  title: string;
  artist: string;
  imageUrl: string;
  position: number;
  id: string;
}

const Card = styled.div`
  position: relative;
  cursor: pointer;
  min-width: 27rem;
  background-color: var(--color-light-1);
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  box-shadow: var(--morph-shadow);
  border-radius: 10px;
  transition: all 0.4s;

  &:hover {
    box-shadow: var(--morph-shadow-hov);
    color: var(--color-red);
  }
  &:hover a {
    animation: ${shakeWell} 0.4s;
  }
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
const Image = styled.img`
  position: relative;
  display: inline-block;
  width: 6rem;
  border-radius: 10px;
  transition: all 0.3s;
  margin-right: 1rem;
`;
const TextSpace = styled.div`
  margin-right: auto;
`;
const Rank = styled.span`
  display: inline-block;
  border-radius: 5px;
  background-color: ${({ position }: { position: number }) =>
    "var(--color-rank-" + position + ")"};
  color: var(--color-white);
  padding: 0 0.3rem;
  position: absolute;
  top: -0.4rem;
  left: -0.4rem;
  transform: skewX(20deg);
  & > * {
    transform: skewX(-20deg);
  }
`;
const TopCard = ({ id, title, artist, imageUrl, position }: Props) => {
  return (
    <Card>
      <Image
        src={"https://musically-api.herokuapp.com/" + imageUrl}
        alt={artist + " " + title}
      />
      <Rank position={position}>
        <Heading size="sm" weight="bold">
          #{position}
        </Heading>
      </Rank>
      <TextSpace>
        <Heading size="sm">{title}</Heading>
        <Paragraph size="sm" weight="thin">
          {artist}
        </Paragraph>
      </TextSpace>
      <Bta
        page={`/project/${id}/${(title + " - " + artist).replace(/ /g, "$$$")}`}
      />
    </Card>
  );
};

export default TopCard;
