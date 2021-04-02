import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MusicCard from "../components/Generic/MusicCard";
import MainContainer from "../components/Wrappers/MainContainer";
import SideContainer from "../components/Wrappers/SideContainer";
import axios from "axios";
/**
 * TODO:
 * will be divided in part
 * the main part will ocupy 70% of the usable space
 * the 30% percent of the space will be reserved for the top charts
 * whill have
 * top musics
 * and top albums
 *
 *  */
const WP = styled.div`
  display: flex;
`;
const Home = () => {
  const [projects, setProjects] = useState<IProjectsResponse[]>([]);
  useEffect(() => {
    axios
      .get<IProjectsResponse[]>("http://localhost:1337/projectos")
      .then(({ data }) => {
        console.log(data);
        setProjects(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <WP>
      <MainContainer>
        {projects.map((project) => (
          <MusicCard
            key={project.id}
            title={project.titulo}
            imageUrl={project.cover.url}
            artist={project.artista.nome}
          />
        ))}
      </MainContainer>
      <SideContainer>top chart</SideContainer>
    </WP>
  );
};

export default Home;
