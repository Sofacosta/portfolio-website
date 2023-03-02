import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Button } from './Button';
import { useAnalytics } from 'use-analytics';

const Contact = () => {
  const { track } = useAnalytics();
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    track('contactForm', {
      action: 'submit',
    });

    emailjs
      .sendForm(
        'service_ofp6ncs',
        'template_sppy5sa',
        formRef.current,
        'NOpysN0a48pqL4Xbn'
      )
      .then(
        (result) => {
          alert("Message sent, we'll get back to you shortly");
          // console.log(result.text);
        },
        (error) => {
          alert('An error occurred, Please try again');
          // console.log(error.text);
        }
      )
      .then(() => {
        formRef.current.reset();
      });
  };
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
          Contact
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          For bookings and other inqueries, please send a message or email.
        </p>
      </div>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-#C8C8C8"
                >
                  Name
                </label>
                <input
                  className="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  id="name"
                  name="name"
                  type="text"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-#C8C8C8"
                >
                  Email
                </label>
                <input
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  id="email"
                  name="email"
                  required
                  type="email"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-#C8C8C8"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full rounded border border-gray-300 focus:border-#E4E4E4 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2  mx-auto">
              <Button type="submit">Send</Button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-#6C6C6C">sofia@coast2c.me</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
