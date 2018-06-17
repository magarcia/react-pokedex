import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import PokedexData from '../components/PokedexData';
import PokemonImage from '../components/PokemonImage';
import withFetching from '../components/withFetching';
import {API} from '../Constants';
import {padNumber} from '../utils';

const Pokemon = props => (
  <Fragment>
    <div>
      <Link
        to={`/pokemon/${padNumber(props.id - 1)}`}
        className="button is-pulled-left"
      >
        #{padNumber(props.id - 1)}
      </Link>
      <Link
        to={`/pokemon/${padNumber(props.id + 1)}`}
        className="button is-pulled-right"
      >
        #{padNumber(props.id + 1)}
      </Link>
    </div>
    <div className="columns">
      <div className="column">
        <PokemonImage id={props.id} name={props.name} size={250} animate />
      </div>
      <div className="column is-three-quarters pokemon-info">
        <div className="content" style={{margin: '0 16px'}}>
          <h1
            className="subtitle is-1 is-capitalized"
            style={{
              display: 'inline-block',
              marginRight: 16,
            }}
          >
            {props.name}
          </h1>

          <h2
            className="subtitle is-2 has-text-weight-light"
            style={{display: 'inline-block'}}
          >
            #{padNumber(props.id)}
          </h2>
          <PokedexData {...props} />
        </div>
      </div>
    </div>
  </Fragment>
);

export default withFetching(props => API + parseInt(props.match.params.id, 10))(
  Pokemon,
);
