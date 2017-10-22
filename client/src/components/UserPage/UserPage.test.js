import React from 'react';
import { shallow } from 'enzyme';
import UserPage from './UserPage';
import TopBar from '../TopBar/TopBar';

describe('UserPage', () => {
  describe('Components', () => {
    it('should have TopBar', () => {
      const wrapper = shallow(<UserPage />);
      expect(wrapper.find(TopBar).exists()).toEqual(true);
    });
  });
});
