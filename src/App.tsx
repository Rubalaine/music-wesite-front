import React from "react";
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
const App = () => {
  return (
    <Router>
      <Navigation />
      <AppWrapper>
        <Sider>
          <MainContainer>
            <Route path="/" exact component={Home} />
            <Route path="/musics" component={Musics} />
            <Route path="/eps" component={Eps} />
            <Route path="/albuns" component={Albuns} />
            <Route path="/mixtapes" component={Mixtapes} />
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
