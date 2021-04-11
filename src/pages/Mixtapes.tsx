import { useEffect } from "react";
import GenericList from "../components/Layout/GenericList";
import Heading from "../components/Typography/Heading";

/**
 * TODO:
 * side com novidades
 * stick sidebar
 */
const Mixtapes = () => {
  useEffect(() => {
    document.title = "Mixtapes | Musix";
    window.scrollTo({ top: 0, behavior: `smooth` });
  }, []);
  return (
    <>
      <Heading>Ultimas Mixtapes</Heading>
      <GenericList categoria="mixtape" />
    </>
  );
};

export default Mixtapes;
