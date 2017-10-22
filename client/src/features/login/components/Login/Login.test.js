import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  describe('components', () => {
    it('should have "LOGIN" title', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find('.Login__title').text()).toContain('LOGIN');
    });

    it('should have email field', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find('.Login__emailField').exists()).toEqual(true);
    });

    it('should have password field', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find('.Login__passwordField').exists()).toEqual(true);
    });

    it('should have LOGIN button', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find('.Login__loginButton').exists()).toEqual(true);
    });
  });

  describe('Events', () => {
    it('should handle handleSubmit', () => {
      const handler = jest.fn();
      const wrapper = shallow(<Login handleSubmit={handler} />);
      wrapper.find('.Login').simulate('submit');
      expect(handler).toHaveBeenCalled();
    });
  });
});
