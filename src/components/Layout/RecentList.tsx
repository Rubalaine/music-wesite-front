import axios from "axios";
import React, { useEffect, useState } from "react";
import MusicCard from "../Generic/MusicCard";
import GridCards from "../Wrappers/GridCards";
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
      <GridCards>
        {projects.map((project) => (
          <MusicCard
            key={project.id}
            title={project.titulo}
            imageUrl={project.cover.url}
            artist={project.artista.nome}
          />
        ))}
      </GridCards>
    </>
  );
};

export default RecentList;
