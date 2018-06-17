import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <Fragment>
      <Header />
      <div
        className="container is-fullhd"
        style={{ minHeight: "calc(100vh - 84px - 195px)" }}
      >
        <Route exact path="/" component={Pokedex} />
        <Route exact path="/generation/:generation" component={Pokedex} />
        <Route path="/pokemon/:id" component={Pokemon} />
        <Route path="/about" component={About} />
      </div>
      <Footer />
    </Fragment>
  </Router>
);

export default App;
