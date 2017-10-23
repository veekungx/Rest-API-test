import React from 'react';
import axios from 'axios';
import { func, arrayOf, any } from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { fetchResource } from '../../preferenceReducer';

import './Preference.scss';

const Preference =
  ({
    // HOC redux-form props
    // HOC redux-form events
    handleSubmit,

    // HOC connect props
    languages,
    timezones,
    currencies,
  }) =>
    (
      <form
        className="Preference"
        onSubmit={handleSubmit}
      >
        <div className="Preference__header">
          Edit Preferences
        </div>
        <div className="Preference__section">
          <div className="Preference__formLabel">
            Localization
          </div>
          <div className="Preference__formFields">
            <div className="Preference__field">
              <div className="Preference__formTitle">
                Language
              </div>
              <Field
                name="language"
                component="select"
              >
                {languages.map(lang =>
                  <option key={lang._id} value={lang._id}>{lang.name}</option>)
                }
              </Field>
              <div className="Preference__hint">
                Interesting in helping translate Fancy? <a href="#blank">Let us know.</a>
              </div>
            </div>
            <div className="Preference__field">
              <div className="Preference__formTitle">
                Time Zone
              </div>
              <Field
                name="timezone"
                component="select"
              >
                {timezones.map(timezone =>
                  <option key={timezone._id} value={timezone._id}>{timezone.text}</option>)
                }
              </Field>
            </div>
            <div className="Preference__field">
              <div className="Preference__formTitle">
                Currency
              </div>
              <Field
                name="currency"
                component="select"
              >
                {currencies.map(currency =>
                  <option key={currency._id} value={currency._id}>{currency.name}</option>)
                }
              </Field>
            </div>
          </div>
        </div>
        <div className="Preference__section">
          <div className="Preference__formLabel">
            Privacy
          </div>
          <div className="Preference__formFields">
            <div className="Preference__field">
              <div className="Preference__formTitle">
                Profile visibility
              </div>
              <div className="Preference__hint">
                {"Manage who can see your activity, things you fancy, your followers, people you follow or in anyone's search result"}
              </div>
              <label htmlFor="profileVisibility_1">
                <Field
                  id="profileVisibility_1"
                  name="profileVisibility"
                  component="input"
                  type="radio"
                  value="EVERYONE"
                />
                Everyone
              </label>
              <label htmlFor="profileVisibility_2">
                <Field
                  id="profileVisibility_2"
                  name="profileVisibility"
                  component="input"
                  type="radio"
                  value="PRIVATE"
                />
                <i className="fa fa-lock" /> Private
              </label>
            </div>
            <div className="Preference__field">
              <div className="Preference__formTitle">
                Messages
              </div>
              <div className="Preference__hint">
                Control who can send you messages
              </div>
              <label htmlFor="message_1">
                <Field
                  id="message_1"
                  name="messages"
                  component="input"
                  type="radio"
                  value="EVERYONE"
                />
                Everyone
              </label>
              <label htmlFor="message_2">
                <Field
                  id="message_2"
                  name="messages"
                  component="input"
                  type="radio"
                  value="FOLLOWED_PEOPLE"
                />
                People you follow
              </label>
              <label htmlFor="message_3">
                <Field
                  id="message_3"
                  name="messages"
                  component="input"
                  type="radio"
                  value="NONE"
                />
                <i className="fa fa-lock" /> Private
                No one
              </label>
            </div>
            <div className="Preference__field">
              <div className="Preference__formTitle">
                Recently viewed
              </div>
              <div className="Preference__hint">
                Manage your Fancy browing history
              </div>
              <button>Delete all items</button>
            </div>
          </div>
        </div>
        <div className="Preference__section">
          <div className="Preference__formLabel">
            Content
          </div>
          <div className="Preference__formFields">
            <div className="Preference__field">
              <div className="Preference__formTitle">
                Category lists
              </div>
              <div className="Preference__hint">
                {"Automatic add Fandy'd item to the Category list"}
              </div>
              <label htmlFor="categoryList_1">
                <Field
                  id="categoryList_1"
                  name="categoryList"
                  component="input"
                  type="radio"
                  value="ENABLE"
                />
                Enable
              </label>
              <label htmlFor="categoryList_2">
                <Field
                  id="categoryList_2"
                  name="categoryList"
                  component="input"
                  type="radio"
                  value="DISABLE"
                />
                Disable
              </label>
            </div>
          </div>
        </div>

        <button>Save Preference</button>
      </form>
    );

Preference.propTypes = {
  languages: arrayOf(any),
  timezones: arrayOf(any),
  currencies: arrayOf(any),
  handleSubmit: func,
};

Preference.defaultProps = {
  languages: [],
  timezones: [],
  currencies: [],
  handleSubmit: undefined,
};

export default Preference;

const mapState = (state) => {
  console.log(state.preference.preference);
  return {
    timezones: state.preference.timezones,
    currencies: state.preference.currencies,
    languages: state.preference.languages,
    initialValues: state.preference.preference,
  };
};

export const PreferenceForm = compose(
  connect(mapState),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(fetchResource());
    },
  }),
  reduxForm({
    form: 'preference',
    onSubmit: (values) => {
      const {
        categoryList,
        currency,
        language,
        messages,
        profileVisibility,
        timezone,
      } = values;

      const payload = {
        localization: {
          language,
          timezone,
          currency,
        },
        privacy: {
          profileVisibility,
          messages,
        },
        content: {
          categoryList,
        },
      };

      const token = localStorage.getItem('token');
      return axios.patch('http://localhost:4000/users/me/preference', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  }),
)(Preference);
