import {
  // CONST
  FETCH_RESOURCE,
  // action creators
  fetchResource,
  fetchResourceSuccess,
  // reducer
  preferenceReducer,
} from './preferenceReducer';

import {
  logout,
} from '../../reducers/authReducer';


describe('preferenceReducer', () => {
  describe('action creators', () => {
    it('should return FETCH_RESOUCE action', () => {
      expect(fetchResource()).toEqual({ type: FETCH_RESOURCE });
    });
    it('should return FETCH_RESOUCE_SUCCESS action', () => {
      expect(fetchResource()).toEqual({ type: FETCH_RESOURCE });
    });
    it('should return FETCH_RESOUCE_ERROR action', () => {
      expect(fetchResource()).toEqual({ type: FETCH_RESOURCE });
    });
  });

  describe('reducer', () => {
    it('should return initial state', () => {
      const stateAfter = {
        loading: false,
        languages: [],
        timezones: [],
        currencies: [],
        config: undefined,
      };
      expect(preferenceReducer(undefined)).toEqual(stateAfter);
    });

    it('should handle FETCH_RESOURCE', () => {
      const stateBefore = {
        loading: false,
        languages: [],
        timezones: [],
        currencies: [],
        config: {},
      };

      const stateAfter = {
        loading: true,
        languages: [],
        timezones: [],
        currencies: [],
        config: {},
      };

      expect(preferenceReducer(stateBefore, fetchResource())).toEqual(stateAfter);
    });

    it('should handle FETCH_RESOUCE_SUCCESS', () => {
      const resources = {
        languages: [{ _id: 1 }],
        timezones: [{ _id: 2 }],
        currencies: [{ _id: 3 }],
      };


      const preference = {
        localization: {
          currency: '1',
          timezone: '77',
          language: '41',
        },
        privacy: {
          messages: 'FOLLOWED_PEOPLE',
          profileVisibility: 'EVERYONE',
        },
        content: {
          categoryList: 'ENABLE',
        },
      };

      const stateBefore = {
        loading: true,
        languages: [],
        timezones: [],
        currencies: [],
        config: {},
      };

      const stateAfter = {
        loading: false,
        languages: [{ _id: 1 }],
        timezones: [{ _id: 2 }],
        currencies: [{ _id: 3 }],
        config: {
          currency: '1',
          timezone: '77',
          language: '41',
          messages: 'FOLLOWED_PEOPLE',
          profileVisibility: 'EVERYONE',
          categoryList: 'ENABLE',
        },
      };

      expect(preferenceReducer(stateBefore, fetchResourceSuccess(resources, preference)))
        .toEqual(stateAfter);
    });

    it('should handle LOGOUT', () => {
      const stateBefore = {
        languages: [{ _id: 1 }],
        timezones: [{ _id: 2 }],
        currencies: [{ _id: 3 }],
        config: {
          currency: '1',
          timezone: '77',
          language: '41',
          messages: 'FOLLOWED_PEOPLE',
          profileVisibility: 'EVERYONE',
          categoryList: 'ENABLE',
        },
      };

      const stateAfter = {
        languages: [{ _id: 1 }],
        timezones: [{ _id: 2 }],
        currencies: [{ _id: 3 }],
        config: undefined,
      };

      expect(preferenceReducer(stateBefore, logout())).toEqual(stateAfter);
    });
  });
});
