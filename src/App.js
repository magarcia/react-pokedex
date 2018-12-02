import React, {Fragment} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import About from './pages/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';
import {BASENAME} from './Constants';

const App = () => (
  <Router basename={BASENAME}>
    <Fragment>
      <Header />
      <div
        className="container is-fullhd"
        style={{minHeight: 'calc(100vh - 84px - 195px)'}}
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
