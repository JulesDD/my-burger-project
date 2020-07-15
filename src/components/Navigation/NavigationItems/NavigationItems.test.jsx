import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', ()=> {
  let wrapper;

  beforeEach(()=> {
    wrapper = shallow(<NavigationItems/>);
  });

  it('should render two navigation items when user is not authenticated.', ()=> {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it('should render three navigation items when user is authenticated.', () => {
    //wrapper = shallow(<NavigationItems isAuthenticated />);
    wrapper.setProps({isAuthenticated: true});
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it('should see if there is a logout link in Navigation Bar.', () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqualTrue;
  });
});