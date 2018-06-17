import {shallow} from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import About from './About';

describe('<About />', () => {
  const shallowComponent = () => shallow(<About />);

  it('renders correctly', () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render copyright on the license', () => {
    const wrapper = shallowComponent();
    expect(wrapper.find('.license').text()).toContain(
      'Copyright (c) 2018 Martin Garcia Monterde',
    );
  });
});
