import React from 'react';

const Contact = () => {
  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="text-xl fancy-text">For bookings and other inqueries please contact me at:</h2>
      <div className="text-center py-12">
        <em>
          <a className="text-white text-l" href="mailto:sofia@coast2c.me">
            Sofia@coast2c.me
          </a>
        </em>
      </div>
    </div>
  );
};

export default Contact;
