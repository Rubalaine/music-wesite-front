import axios from "axios";
import React, { useEffect, useState } from "react";
import GenericCard from "../Generic/GenericCard";
import NotFound from "../Utils/NotFound";
interface Props {
  categoria: string;
}

const GenericList = ({ categoria }: Props) => {
  const [projects, setProjects] = useState<IProjectsResponse[]>([]);
  useEffect(() => {
    axios
      .get<IProjectsResponse[]>(
        `http://localhost:1337/projectos?categoria=${categoria}`
      )
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
      {!projects.length ? (
        <NotFound />
      ) : (
        projects.map((project) => (
          <GenericCard
            category={project.categoria}
            key={project.id}
            title={project.titulo}
            imageUrl={project.cover.url}
            artist={project.artista.nome}
          />
        ))
      )}
    </>
  );
};

export default GenericList;
