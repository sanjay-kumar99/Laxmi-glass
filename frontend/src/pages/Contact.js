/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-700 mb-12 uppercase tracking-widest">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600">
            Have questions about our products or services? Reach out to us and
            we’ll be happy to assist you.
          </p>

          <div className="space-y-4">
            <p className="flex items-center text-gray-700">
              📍{" "}
              <span className="ml-2">Lower Bazar, Sarkaghat (H.P.) 175024</span>
            </p>
            <p className="flex items-center text-gray-700">
              📞 <span className="ml-2">+91 94180-31457</span>
            </p>
            <p className="flex items-center text-gray-700">
              ✉️ <span className="ml-2">laxmi.glasshouse.in</span>
            </p>
          </div>

          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="text-gray-500 hover:text-green-600 transition text-xl"
            >
              🌐
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-green-600 transition text-xl"
            >
              📘
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-green-600 transition text-xl"
            >
              📸
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
