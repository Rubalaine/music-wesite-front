import GenericList from "../components/Layout/GenericList";
import Heading from "../components/Typography/Heading";

/**
 * TODO:
 * side com novidades
 * stick sidebar
 */
const Eps = () => {
  return (
    <>
      <Heading>Ultimos Eps</Heading>
      <GenericList categoria="album" />
    </>
  );
};

export default Eps;
