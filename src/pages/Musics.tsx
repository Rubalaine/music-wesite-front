import React from "react";
import GenericList from "../components/Layout/GenericList";
import Heading from "../components/Typography/Heading";

/**
 * TODO:
 * side com novidades
 * stick sidebar
 */
const Musics = () => {
  return (
    <>
      <Heading>Ultimas Musicas</Heading>
      <GenericList categoria="musica" />
    </>
  );
};

export default Musics;
