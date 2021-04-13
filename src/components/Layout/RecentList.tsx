import axios from "axios";
import React, { useEffect, useState } from "react";
import MusicCard from "../Generic/MusicCard";
import GridCards from "../Wrappers/GridCards";
import Loader from "./../Utils/Loader";

const RecentList = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<IProjectsResponse[]>([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get<IProjectsResponse[]>("https://musically-api.herokuapp.com/projectos")
      .then(({ data }) => {
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
      <GridCards>
        {projects.map((project) => (
          <MusicCard
            id={project.id}
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
