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
        `https://musically-api.herokuapp.com/projectos?categoria=${categoria}`
      )
      .then(({ data }) => {
        setProjects(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line
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
            lancamento={new Date(project.lancamento).toLocaleString("pt-pt", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
            id={project.id}
            category={project.categoria}
            key={project.id}
            title={project.titulo}
            imageUrl={project.cover.url}
            artist={project.artista.nome}
            description={project.descricao}
          />
        ))
      )}
    </>
  );
};

export default GenericList;
