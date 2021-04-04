import axios from "axios";
import React, { useEffect, useState } from "react";
import GenericCard from "../Generic/GenericCard";
import NotFound from "../Utils/NotFound";
import Loader from "../Utils/Loader";
interface Props {
  categoria: string;
}

const GenericList = ({ categoria }: Props) => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<IProjectsResponse[]>([]);
  useEffect(() => {
    setLoading(true);
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
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return loading ? (
    <Loader />
  ) : (
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
