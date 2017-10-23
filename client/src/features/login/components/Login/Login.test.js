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

    it('should show "LOGIN" on login button by default', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find('.Login__loginButton').text()).toContain('LOGIN');
    });

    it('should not show "LOGGING IN" on login button by default', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find('.Login__loginButton').text()).not.toContain('LOGGING IN');
    });

    it('should not show error by default', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find('.Login__error').exists()).toEqual(false);
    });

    it('should have sign up link', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find('.Login__signupLink').exists()).toEqual(true);
    });
  });

  describe('Props', () => {
    it('should show "LOGGING IN" on button when submitting', () => {
      const wrapper = shallow(<Login submitting />);
      expect(wrapper.find('.Login__loginButton').text()).toContain('LOGGING IN');
    });

    it('should disabled login button when submitting', () => {
      const wrapper = shallow(<Login submitting />);
      expect(wrapper.find('.Login__loginButton').props().disabled).toEqual(true);
    });

    it('should show error when given', () => {
      const wrapper = shallow(<Login error="any error" />);
      expect(wrapper.find('.Login__error').exists()).toEqual(true);
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
