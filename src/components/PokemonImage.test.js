import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import PokemonImage from './PokemonImage';

describe('<PokemonImage />', () => {
  const defaultProps = {
    id: 1,
    name: 'bulbasaur',
  };

  const shallowComponent = customProps => {
    const props = {
      ...defaultProps,
      ...customProps,
    };
    return shallow(<PokemonImage {...props} />);
  };

  it('renders correctly', () => {
    const tree = renderer.create(<PokemonImage {...defaultProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set the correct svg link', () => {
    const wrapper = shallowComponent();
    expect(wrapper.find('use').prop('xlinkHref')).toEqual(
      '/pokemon-symbols.svg#001-bulbasaur',
    );
  });

  it('should set fix the sceptile name', () => {
    const wrapper = shallowComponent({name: 'sceptile'});
    expect(wrapper.find('use').prop('xlinkHref')).toEqual(
      '/pokemon-symbols.svg#001-sceptille',
    );
  });

  it('should set fix the jirachi name', () => {
    const wrapper = shallowComponent({name: 'jirachi'});
    expect(wrapper.find('use').prop('xlinkHref')).toEqual(
      '/pokemon-symbols.svg#001-lirachi',
    );
  });

  it('should set fix the ninjask name', () => {
    const wrapper = shallowComponent({name: 'ninjask'});
    expect(wrapper.find('use').prop('xlinkHref')).toEqual(
      '/pokemon-symbols.svg#001-niniask',
    );
  });

  it('should set fix the baltoy name', () => {
    const wrapper = shallowComponent({name: 'baltoy'});
    expect(wrapper.find('use').prop('xlinkHref')).toEqual(
      '/pokemon-symbols.svg#001-baltov',
    );
  });

  it('should set fix the claydol name', () => {
    const wrapper = shallowComponent({name: 'claydol'});
    expect(wrapper.find('use').prop('xlinkHref')).toEqual(
      '/pokemon-symbols.svg#001-clavdol',
    );
  });

  it('should set fix the deoxys name', () => {
    const wrapper = shallowComponent({name: 'deoxys-normal'});
    expect(wrapper.find('use').prop('xlinkHref')).toEqual(
      '/pokemon-symbols.svg#001-deoxys',
    );
  });
});
