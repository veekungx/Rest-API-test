import React from 'react';
import { shallow } from 'enzyme';
import TopBarMenu from './TopBarMenu';

describe('TopBarMenu', () => {
  describe('Props', () => {
    it('should render iconClassName', () => {
      const wrapper = shallow(<TopBarMenu iconClassName="fa fa-user" />);
      expect(wrapper.find('.TopBarMenu__icon').props().className).toContain('fa fa-user');
    });

    it('should render badge when number > 0', () => {
      const wrapper = shallow(<TopBarMenu badge={10} />);
      expect(wrapper.find('.TopBarMenu__badge').text()).toContain(10);
    });
    it('should not render badge when number < 0', () => {
      const wrapper = shallow(<TopBarMenu badge={0} />);
      expect(wrapper.find('.TopBarMenu__badge').exists()).toEqual(false);
    });
    it('should render label', () => {
      const wrapper = shallow(<TopBarMenu label="Something" />);
      expect(wrapper.find('.TopBarMenu__label').text()).toContain('Something');
    });
  });

  describe('Events', () => {
    it('should handle onClick', () => {
      const handler = jest.fn();
      const wrapper = shallow(<TopBarMenu onClick={handler} />);
      wrapper.find('.TopBarMenu').simulate('click');
      expect(handler).toHaveBeenCalled();
    });
  });
});
