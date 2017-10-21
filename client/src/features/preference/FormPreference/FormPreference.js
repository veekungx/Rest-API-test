import React from 'react';
import { func } from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import './FormPreference.scss';

const FormPreference =
  ({
    // HOC redux-form props
    // HOC redux-form events
    handleSubmit,

  }) =>
    (
      <form
        className="FormPreference"
        onSubmit={handleSubmit}
      >
        <div className="FormPreference__header">
          Edit Preferences
        </div>
        <div className="FormPreference__section">
          <div className="FormPreference__formLabel">
            Localization
          </div>
          <div className="FormPreference__formFields">
            <div className="FormPreference__field">
              <div className="FormPreference__formTitle">
                Language
              </div>
              <Field
                name="language"
                component="select"
              >
                <option />
                <option value="ff0000">Red</option>
                <option value="00ff00">Green</option>
                <option value="0000ff">Blue</option>
              </Field>
              <div className="FormPreference__hint">
                Interesting in helping translate Fancy? <a href>Let us know.</a>
              </div>
            </div>
            <div className="FormPreference__field">
              <div className="FormPreference__formTitle">
                Time Zone
              </div>
              <Field
                name="timezone"
                component="select"
              >
                <option />
                <option value="ff0000">Red</option>
                <option value="00ff00">Green</option>
                <option value="0000ff">Blue</option>
              </Field>
            </div>
            <div className="FormPreference__field">
              <div className="FormPreference__formTitle">
                Currency
              </div>
              <Field
                name="currency"
                component="select"
              >
                <option />
                <option value="ff0000">Red</option>
                <option value="00ff00">Green</option>
                <option value="0000ff">Blue</option>
              </Field>
            </div>
          </div>
        </div>
        <div className="FormPreference__section">
          <div className="FormPreference__formLabel">
            Privacy
          </div>
          <div className="FormPreference__formFields">
            <div className="FormPreference__field">
              <div className="FormPreference__formTitle">
                Profile visibility
              </div>
              <div className="FormPreference__hint">
                {"Manage who can see your activity, things you fancy, your followers, people you follow or in anyone's search result"}
              </div>
              <label htmlFor>
                <Field
                  name="profileVisibility"
                  component="input"
                  type="radio"
                  value="EVERYONE"
                />
                Everyone
              </label>
              <label htmlFor>
                <Field
                  name="profileVisibility"
                  component="input"
                  type="radio"
                  value="PRIVATE"
                />
                <i className="fa fa-lock" /> Private
              </label>
            </div>
            <div className="FormPreference__field">
              <div className="FormPreference__formTitle">
                Messages
              </div>
              <div className="FormPreference__hint">
                Control who can send you messages
              </div>
              <label htmlFor>
                <Field
                  name="message"
                  component="input"
                  type="radio"
                  value="EVERYONE"
                />
                Everyone
              </label>
              <label htmlFor>
                <Field
                  name="message"
                  component="input"
                  type="radio"
                  value="FOLLOWED_PEOPLE"
                />
                People you follow
              </label>
              <label htmlFor>
                <Field
                  name="message"
                  component="input"
                  type="radio"
                  value="NONE"
                />
                <i className="fa fa-lock" /> Private
              No one
              </label>
            </div>
            <div className="FormPreference__field">
              <div className="FormPreference__formTitle">
                Recently viewed
              </div>
              <div className="FormPreference__hint">
                Manage your Fancy browing history
              </div>
              <button>Delete all items</button>
            </div>
          </div>
        </div>
        <div className="FormPreference__section">
          <div className="FormPreference__formLabel">
            Content
          </div>
          <div className="FormPreference__formFields">
            <div className="FormPreference__field">
              <div className="FormPreference__formTitle">
                Category lists
              </div>
              <div className="FormPreference__hint">
                {"Automatic add Fandy'd item to the Category list"}
              </div>
              <label htmlFor>
                <Field
                  name="categoryList"
                  component="input"
                  type="radio"
                  value
                />
                Enable
              </label>
              <label htmlFor>
                <Field
                  name="categoryList"
                  component="input"
                  type="radio"
                  value={false}
                />
                Disable
              </label>
            </div>
          </div>
        </div>

        <button>Save Preference</button>
      </form>
    );

FormPreference.propTypes = {
  handleSubmit: func,
};
FormPreference.defaultProps = {
  handleSubmit: undefined,
};

export default reduxForm({ form: 'preference' })(FormPreference);
