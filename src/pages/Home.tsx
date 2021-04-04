import MainContainer from "../components/Wrappers/MainContainer";
import SideContainer from "../components/Wrappers/SideContainer";
import TopList from "../components/Layout/TopList";
import RecentList from "../components/Layout/RecentList";
import Sider from "../components/Wrappers/Sider";
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
    <Sider>
      <MainContainer>
        <h2>Adicionadas recentemente</h2>
        <RecentList />
      </MainContainer>
      <SideContainer>
        <TopList />
      </SideContainer>
    </Sider>
  );
};

export default Home;
