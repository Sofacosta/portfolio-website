import React from 'react';
import '../styles/Newsletter.css';

const Newsletter = () => {
  return (
    <>
      {/* MailChimp Embedded Form Code */}
      <div id="mc_embed_signup">
        <form
          action="https://coast2c.us5.list-manage.com/subscribe/post?u=6714d3e1f2aac16f5e1950e28&amp;id=50d37c7432"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <label htmlFor="mce-EMAIL" className="visually-hidden">
              Subscribe
            </label>
            <input
              type="email"
              defaultValue=""
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              placeholder="email address"
              required
            />
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_6714d3e1f2aac16f5e1950e28_50d37c7432"
                tabIndex="-1"
                defaultValue=""
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Newsletter;
