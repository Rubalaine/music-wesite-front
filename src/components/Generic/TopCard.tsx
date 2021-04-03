import React from "react";
import styled from "styled-components";
import { shakeWell } from "../Utils/animations";
import { Bta } from "./Cta";

interface Props {
  title: string;
  artist: string;
  imageUrl: string;
}

const Card = styled.div`
  cursor: pointer;
  width: 100%;
  background-color: var(--color-light-1);
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  box-shadow: var(--morph-shadow);
  border-radius: 10px;
  transition: all 0.4s;
  &:hover {
    box-shadow: var(--morph-shadow-hov);
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
      <Bta page="/" />
    </Card>
  );
};

export default TopCard;
