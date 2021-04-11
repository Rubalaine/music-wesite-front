import React, { useEffect } from "react";
import GenericList from "../components/Layout/GenericList";
import Heading from "../components/Typography/Heading";

/**
 * TODO:
 * side com novidades
 * stick sidebar
 */
const Musics = () => {
  useEffect(() => {
    document.title = "Musicas | Musix";
    window.scrollTo({ top: 0, behavior: `smooth` });
  }, []);
  return (
    <>
      <Heading>Ultimas Musicas</Heading>
      <GenericList categoria="musica" />
    </>
  );
};

export default Musics;
