import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './SignUp';

describe('SignUp', () => {
  describe('Components', () => {
    it('should have SIGN UP title', () => {
      const wrapper = shallow(<SignUp />);
      expect(wrapper.find('.SignUp__title').text()).toContain('SIGN UP');
    });
    it('should have email field', () => {
      const wrapper = shallow(<SignUp />);
      expect(wrapper.find('.SignUp__emailField').exists()).toEqual(true);
    });

    it('should have password field', () => {
      const wrapper = shallow(<SignUp />);
      expect(wrapper.find('.SignUp__passwordField').exists()).toEqual(true);
    });

    it('should have SIGN UP button', () => {
      const wrapper = shallow(<SignUp />);
      expect(wrapper.find('.SignUp__signupButton').exists()).toEqual(true);
    });
  });

  describe('Events', () => {
    it('should handle handleSubmit', () => {
      const handler = jest.fn();
      const wrapper = shallow(<SignUp handleSubmit={handler} />);
      wrapper.find('.SignUp').simulate('submit');
      expect(handler).toHaveBeenCalled();
    });
  });
});
