import { useEffect } from "react";
import GenericList from "../components/Layout/GenericList";
import Heading from "../components/Typography/Heading";

/**
 * TODO:
 * side com novidades
 * stick sidebar
 */
const Eps = () => {
  useEffect(() => {
    document.title = "EPS | Musix";
    window.scrollTo({ top: 0, behavior: `smooth` });
  }, []);
  return (
    <>
      <Heading>Ultimos Eps</Heading>
      <GenericList categoria="eps" />
    </>
  );
};

export default Eps;
