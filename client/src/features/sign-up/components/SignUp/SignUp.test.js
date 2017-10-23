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

    it('should not show error', () => {
      const wrapper = shallow(<SignUp />);
      expect(wrapper.find('.SignUp__error').exists()).toEqual(false);
    });

    it('should show "SIGN UP" by default', () => {
      const wrapper = shallow(<SignUp />);
      expect(wrapper.find('.SignUp__signupButton').text()).toContain('SIGN UP');
    });
  });

  describe('Props', () => {
    it('should render error ', () => {
      const wrapper = shallow(<SignUp error={new Error('Something')} />);
      expect(wrapper.find('.SignUp__error').exists()).toEqual(true);
    });

    it('should show submitting', () => {
      const wrapper = shallow(<SignUp submitting />);
      expect(wrapper.find('.SignUp__signupButton').text()).toContain('SIGNING UP');
    });

    it('should diabled signup button when submitting', () => {
      const wrapper = shallow(<SignUp submitting />);
      expect(wrapper.find('.SignUp__signupButton').props().disabled).toEqual(true);
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
