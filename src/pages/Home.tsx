import { useEffect } from "react";
import FeaturedCard from "../components/Generic/FeaturedCard";
import RecentList from "../components/Layout/RecentList";
import Heading from "../components/Typography/Heading";
import Spacer from "../components/Utils/Spacer";
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
  useEffect(() => {
    document.title = "Inicio | Musix";
    window.scrollTo({ top: 0, behavior: `smooth` });
  }, []);
  return (
    <>
      <Heading>Em destaque</Heading>
      <FeaturedCard />
      <Heading>Adicionadas recentemente</Heading>
      <Spacer size="sm" />
      <RecentList />
    </>
  );
};

export default Home;
