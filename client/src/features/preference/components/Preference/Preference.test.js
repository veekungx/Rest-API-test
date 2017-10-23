import React from 'react';
import { shallow } from 'enzyme';
import Preference from './Preference';

describe('Preference', () => {
  it('should render');

  describe('Components', () => {
    it('should not show "SAVE PREFERENCE" on save button by default', () => {
      const wrapper = shallow(<Preference />);
      expect(wrapper.find('.Preference__saveButton').text()).toContain('SAVE PREFERENCE');
    });
  });

  describe('Props', () => {
    it('should render "SAVING" on save button when submitting is given', () => {
      const wrapper = shallow(<Preference submitting />);
      expect(wrapper.find('.Preference__saveButton').text()).toContain('SAVING');
    });
  });
  describe('Events', () => { });
});
