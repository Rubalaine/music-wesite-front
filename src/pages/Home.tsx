import RecentList from "../components/Layout/RecentList";
import Heading from "../components/Typography/Heading";
/**
 * TODO:
 * will be divided in part
 * the main part will ocupy 70% of the usable space
 * the 30% percent of the space will be reserved for the top charts
 * whill have
 * top musics
 * and top albums
 *
 *  */

const Home = () => {
  return (
    <>
      <Heading>Adicionadas recentemente</Heading>
      <RecentList />
    </>
  );
};

export default Home;
