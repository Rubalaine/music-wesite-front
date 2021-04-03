import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MusicCard from "../Generic/MusicCard";
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const RecentList = () => {
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
      <h2>Adicionadas recentemente</h2>
      <List>
        {projects.map((project) => (
          <MusicCard
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

export default RecentList;
