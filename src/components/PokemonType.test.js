import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import PokemonType from './PokemonType';

describe('<PokemonType />', () => {
  const defaultProps = {
    type: {
      name: 'poison',
    },
  };
  const shallowComponent = customProps => {
    const props = {
      ...defaultProps,
      ...customProps,
    };
    return shallow(<PokemonType {...props} />);
  };

  it('renders correctly', () => {
    const tree = renderer.create(<PokemonType {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set background color', () => {
    const wrapper = shallowComponent();
    expect(wrapper.prop('style').backgroundColor).toBeDefined();
  });
});
