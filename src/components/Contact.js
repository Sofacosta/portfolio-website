import React from 'react';
import 'tailwindcss/tailwind.css';
import { Button } from './Button';

export default function App() {
  return (
    <div>
      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">
              Contact
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              For bookings and other inqueries, please send a message or email.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-#C8C8C8
"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-black
                    py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-#C8C8C8
                    "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-black
                    py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-#C8C8C8
                    "
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full rounded border border-gray-300 focus:border-#E4E4E4
                    h-32 text-base outline-none text-black
                    py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2  mx-auto">
                <Button
                // onClick={someFn}
                >
                  Send
                </Button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-#6C6C6C">sofia@coast2c.me</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
