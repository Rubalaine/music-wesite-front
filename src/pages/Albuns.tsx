import { useEffect } from "react";
import GenericList from "../components/Layout/GenericList";
import Heading from "../components/Typography/Heading";

/**
 * TODO:
 * side com novidades
 * stick sidebar
 */
const Albuns = () => {
  useEffect(() => {
    document.title = "Musix | Albuns";
  }, []);
  return (
    <>
      <Heading>Ultimos Albuns</Heading>
      <GenericList categoria="album" />
    </>
  );
};

export default Albuns;
