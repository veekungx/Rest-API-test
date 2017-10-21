import React from 'react';
import { shallow } from 'enzyme';
import SideMenuButton from './SideMenuButton';

describe('SideMenuButton', () => {
  it('should render');
  describe('Props', () => {


    it('should render icon when iconClassName is provide', () => {
      const iconClassName = 'fa fa-user';
      const wrapper = shallow(<SideMenuButton iconClassName={iconClassName} />);
      expect(wrapper.find('.SideMenuButton__icon').props().className).toContain(iconClassName);
    });

    it('should render label when given', () => {
      const label = 'hello';
      const wrapper = shallow(<SideMenuButton label={label} />);
      expect(wrapper.find('.SideMenuButton__label').text()).toContain(label);
    });
  });

  describe('State', () => {
    it('should have active on SideMenuButton', () => {
      const wrapper = shallow(<SideMenuButton isActive />);
      expect(wrapper.find('.SideMenuButton').hasClass('active')).toEqual(true);
    });

    it('should have active on SideMenuButton__label', () => {
      const wrapper = shallow(<SideMenuButton isActive />);
      expect(wrapper.find('.SideMenuButton__label').hasClass('active')).toEqual(true);
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
