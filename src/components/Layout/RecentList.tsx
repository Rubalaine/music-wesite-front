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
      .get<IProjectsResponse[]>("http://localhost:1337/projectos")
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
