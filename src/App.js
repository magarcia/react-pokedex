import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";

const App = () => (
  <Router>
    <div className="container is-fluid">
      <Route exact path="/" component={Pokedex} />
      <Route path="/:id" component={Pokemon} />
    </div>
  </Router>
);

export default App;
