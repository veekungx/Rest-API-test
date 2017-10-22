import React from 'react';
import { shallow } from 'enzyme';
import TopBar from './TopBar';

describe('TopBar', () => {
  describe('Components', () => {
    it('should have logo', () => {
      const wrapper = shallow(<TopBar />);
      expect(wrapper.find('.TopBar__logo').text()).toContain('FANCY');
    });
    it('should have search box', () => {
      const wrapper = shallow(<TopBar />);
      expect(wrapper.find('.TopBar__search').exists()).toEqual(true);
    });
    it('should have shopping cart menu', () => {
      const wrapper = shallow(<TopBar />);
      expect(wrapper.find({ iconClassName: 'fa fa-shopping-cart' }).exists()).toEqual(true);
    });
    it('should have inbox menu', () => {
      const wrapper = shallow(<TopBar />);
      expect(wrapper.find({ iconClassName: 'fa fa-inbox' }).exists()).toEqual(true);
    });
    it('should have activity menu', () => {
      const wrapper = shallow(<TopBar />);
      expect(wrapper.find({ iconClassName: 'fa fa-bolt' }).exists()).toEqual(true);
    });
    it('should have user menu with label "You"', () => {
      const wrapper = shallow(<TopBar />);
      expect(wrapper.find({ iconClassName: 'fa fa-user' }).exists()).toEqual(true);
      expect(wrapper.find({ iconClassName: 'fa fa-user' }).props().label).toEqual('You');
    });
  });

  describe('Events', () => {
    it('should handle onSearch', () => {
      const handler = jest.fn();
      const mockEvent = { target: { value: 'ok' } };
      const wrapper = shallow(<TopBar onSearch={handler} />);
      wrapper.find('.TopBar__search').simulate('change', mockEvent);
      expect(handler).toHaveBeenCalledWith(mockEvent);
    });
  });
});
