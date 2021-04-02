import React from "react";
import "./App.css";
import Navigation from "./components/Layout/Navigation";
import AppWrapper from "./components/Wrappers/AppWrapper";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Musics from "./pages/Musics";
import Eps from "./pages/Eps";
import Albuns from "./pages/Albuns";
const App = () => {
  return (
    <Router>
      <Navigation />
      <AppWrapper>
        <Route path="/" exact component={Home} />
        <Route path="/musics" exact component={Musics} />
        <Route path="/eps" exact component={Eps} />
        <Route path="/Albuns" exact component={Albuns} />
      </AppWrapper>
    </Router>
  );
};

export default App;
