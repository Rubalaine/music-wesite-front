import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Layout/Navigation";
import AppWrapper from "./components/Wrappers/AppWrapper";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Musics from "./pages/Musics";
import Eps from "./pages/Eps";
import Albuns from "./pages/Albuns";
import Mixtapes from "./pages/Mixtapes";
import MainContainer from "./components/Wrappers/MainContainer";
import Sider from "./components/Wrappers/Sider";
import SideContainer from "./components/Wrappers/SideContainer";
import TopList from "./components/Layout/TopList";
import HamburguerMenu from "./components/Layout/HamburguerMenu";
import SideNav from "./components/Layout/SideNav";
import Project from "./pages/Project";

/**
 * TODO: implement React Toast for something like anithing
 */
const App = () => {
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => {
    setShowNav(!showNav);
  };
  const removeNav = () => {
    setShowNav(false);
  };
  return (
    <Router>
      <Navigation />
      <SideNav visible={showNav} hide={removeNav} />
      <AppWrapper showNav={showNav}>
        <HamburguerMenu showNav={showNav} setClicked={handleClick} />
        <Sider remove={removeNav}>
          <MainContainer>
            <Route path="/" exact component={Home} />
            <Route path="/musics" component={Musics} />
            <Route path="/eps" component={Eps} />
            <Route path="/albuns" component={Albuns} />
            <Route path="/mixtapes" component={Mixtapes} />
            <Route path="/project/:id/:nome" component={Project} />
          </MainContainer>
          <SideContainer>
            <TopList />
          </SideContainer>
        </Sider>
      </AppWrapper>
    </Router>
  );
};

export default App;
