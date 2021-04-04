import React from "react";
import GenericList from "../components/Layout/GenericList";
import TopList from "../components/Layout/TopList";
import MainContainer from "../components/Wrappers/MainContainer";
import SideContainer from "../components/Wrappers/SideContainer";
import Sider from "../components/Wrappers/Sider";
/**
 * TODO:
 * side com novidades
 * stick sidebar
 */
const Musics = () => {
  return (
    <Sider>
      <MainContainer>
        <h2>Adicionadas recentemente</h2>
        <GenericList />
      </MainContainer>
      <SideContainer>
        <TopList />
      </SideContainer>
    </Sider>
  );
};

export default Musics;
