import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Heading from "./../Typography/Heading";
import Paragraph from "./../Typography/Paragraph";
import Linker from "./Linker";
import { BsArrowRight } from "react-icons/bs";
import IconWrapper from "../Wrappers/IconWrapper";
import axios from "axios";
import Loader from "./../Utils/Loader";
const Card = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  background-color: var(--color-white);
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  box-shadow: var(--morph-shadow);
  border-radius: 10px;
  transition: all 0.4s;
  height: 13rem;
  margin-top: 4rem;
  @media screen and (max-width: 550px) {
    margin-top: 2rem;
    height: 15rem;
  }
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
  transform: translateY(-4rem);
  margin-right: 1rem;
  box-shadow: var(--shadow-black-top);
  @media screen and (max-width: 550px) {
    transform: translateY(-2rem);
  }
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
  bottom: 1.6rem;
  left: 1.5rem;
  padding: 0.3rem;
  border-radius: 5px;
  background-color: var(--color-indigo);
  color: var(--color-white);

  /* top: 0; */
`;
const FeaturedCard = () => {
  const [featured, setFeatured] = useState<IProjectsResponse>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get<IProjectsResponse[]>(
        "http://localhost:1337/projectos?_limit=1&destaque=true"
      )
      .then(({ data }) => {
        console.log(data[0]);
        setFeatured({ ...data[0] });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <Card>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Image
            src={"http://localhost:1337" + featured?.cover.url}
            alt={featured?.artista.nome + " " + featured?.titulo}
            loading="lazy"
          />
          <CatSpan>{featured?.categoria}</CatSpan>
          <TextSpace>
            <Heading size="sm">
              {featured?.artista.nome + " - " + featured?.titulo}
            </Heading>
            <Paragraph size="sm" weight="thin">
              {featured?.lancamento}
            </Paragraph>
            <Paragraph>A mixtape mais hot do momento</Paragraph>

            <Diflex>
              <Linker to="/">
                ler mais
                <IconWrapper>
                  <BsArrowRight />
                </IconWrapper>
              </Linker>
            </Diflex>
          </TextSpace>
        </>
      )}
    </Card>
  );
};

export default FeaturedCard;
