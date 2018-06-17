import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "@humanmade/nova-icons/style.css";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import Header from "./components/Header";

const App = () => (
  <Router>
    <div>
      <Header />
      <div className="container is-fullhd">
        <Route exact path="/" component={Pokedex} />
        <Route exact path="/generation/:generation" component={Pokedex} />
        <Route path="/pokemon/:id" component={Pokemon} />
      </div>
    </div>
  </Router>
);

export default App;
