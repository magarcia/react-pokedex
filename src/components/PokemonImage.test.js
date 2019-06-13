import React from 'react';
import renderer from 'react-test-renderer';
import PokemonImage from './PokemonImage';

describe('<PokemonImage />', () => {
  const defaultProps = {
    id: 1,
    name: 'bulbasaur',
  };

  it('renders correctly', () => {
    const tree = renderer.create(<PokemonImage {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
