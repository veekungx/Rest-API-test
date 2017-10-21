import React from 'react';
import { shallow } from 'enzyme';
import SideMenuButton from './SideMenuButton';

describe('SideMenuButton', () => {
  it('should render');
  describe('Props', () => {
    it('should have active state when given isActive prop', () => {
      const wrapper = shallow(<SideMenuButton isActive />);
      expect(wrapper.find('.SideMenuButton').hasClass('SideMenuButton--active')).toEqual(true);
    });
  });

  describe('Events', () => {
    it('should handler onClick', () => {
      const handler = jest.fn();
      const wrapper = shallow(<SideMenuButton onClick={handler} />);
      wrapper.find('.SideMenuButton').simulate('click');
      expect(handler).toHaveBeenCalled();
    });
  });
});
