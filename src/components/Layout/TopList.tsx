import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopCard from "../Generic/TopCard";
const List = styled.div`
  display: flex;
  flex-direction: column;
`;
const TopList = () => {
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
    <>
      <h2>Top 5 Musicas mais populares</h2>
      <List>
        {projects.map((project) => (
          <TopCard
            key={project.id}
            title={project.titulo}
            imageUrl={project.cover.url}
            artist={project.artista.nome}
          />
        ))}
      </List>
    </>
  );
};

export default TopList;