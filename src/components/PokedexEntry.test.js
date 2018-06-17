import React from 'react';
import {shallow} from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import PokedexEntry from './PokedexEntry';
import PokemonImage from './PokemonImage';

describe('<PokedexEntry />', () => {
  const defaultProps = {
    id: 1,
    name: 'bulbasaur',
  };
  const shallowComponent = customProps => {
    const props = {
      ...defaultProps,
      ...customProps,
    };
    return shallow(<PokedexEntry {...props} />);
  };

  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer.render(<PokedexEntry {...defaultProps} />);
    expect(tree).toMatchSnapshot();
  });

  it('should have PokemonImage', () => {
    const wrapper = shallowComponent();
    expect(wrapper.find(PokemonImage)).toHaveLength(1);
  });

  it('should have pokemon number with pad', () => {
    const wrapper = shallowComponent();
    expect(wrapper.find('.pokemoncard-content .subtitle').text()).toEqual(
      '#001',
    );
  });
});
