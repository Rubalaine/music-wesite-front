import GenericList from "../components/Layout/GenericList";
import Heading from "../components/Typography/Heading";

/**
 * TODO:
 * side com novidades
 * stick sidebar
 */
const Mixtapes = () => {
  return (
    <>
      <Heading>Ultimas Mixtapes</Heading>
      <GenericList categoria="mixtape" />
    </>
  );
};

export default Mixtapes;
