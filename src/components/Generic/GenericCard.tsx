import React from "react";
import styled from "styled-components";
import Heading from "./../Typography/Heading";
import Paragraph from "./../Typography/Paragraph";
import Linker from "./Linker";
import { BsArrowRight } from "react-icons/bs";
import IconWrapper from "../Wrappers/IconWrapper";

interface Props {
  title: string;
  artist: string;
  imageUrl: string;
  category: string;
  description: string;
  lancamento: string;
}

const Card = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  background-color: var(--color-light-1);
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  box-shadow: var(--morph-shadow);
  border-radius: 10px;
  transition: all 0.4s;
  height: 17.4rem;
  &:hover {
    box-shadow: var(--morph-shadow-hov);
    /* color: var(--color-red); */
  }
  &:hover a:hover div {
    transform: translateX(2rem);
  }
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
const Image = styled.img`
  position: relative;
  display: inline-block;
  width: 15rem;
  border-radius: 10px;
  transition: all 0.3s;
  margin-right: 1rem;
`;
const TextSpace = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Diflex = styled.div`
  display: flex;
  margin-top: auto;
  width: 100%;
`;
const CatSpan = styled.span`
  position: absolute;
  display: inline-block;
  top: 1.6rem;
  left: 1.5rem;
  padding: 0.3rem;
  border-radius: 5px;
  background-color: var(--color-indigo);
  color: var(--color-white);

  /* top: 0; */
`;
const GenericCard = ({
  category,
  description,
  title,
  artist,
  lancamento,
  imageUrl,
}: Props) => {
  return (
    <Card>
      <Image
        src={"http://localhost:1337" + imageUrl}
        alt={artist + " " + title}
        loading="lazy"
      />
      <CatSpan>{category}</CatSpan>
      <TextSpace>
        <Heading size="sm">{artist + " - " + title}</Heading>
        <Paragraph size="sm" weight="thin">
          {lancamento}
        </Paragraph>
        <Paragraph size="sm" weight="thin" limit={3}>
          {description}
        </Paragraph>
        <Diflex>
          <Linker to="/">
            click here{" "}
            <IconWrapper>
              <BsArrowRight />
            </IconWrapper>
          </Linker>
        </Diflex>
      </TextSpace>
    </Card>
  );
};

export default GenericCard;
