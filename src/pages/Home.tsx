import styled from "styled-components";
import MainContainer from "../components/Wrappers/MainContainer";
import SideContainer from "../components/Wrappers/SideContainer";
import TopList from "../components/Layout/TopList";
import RecentList from "../components/Layout/RecentList";
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
const WP = styled.div`
  display: flex;
  align-items: flex-start;
`;
const Home = () => {
  return (
    <WP>
      <MainContainer>
        <RecentList />
      </MainContainer>
      <SideContainer>
        <TopList />
      </SideContainer>
    </WP>
  );
};

export default Home;
