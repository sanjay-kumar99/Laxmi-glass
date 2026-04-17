/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-10 px-6 md:px-20">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-dark-700 mb-12 uppercase tracking-widest"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        Contact Us
      </motion.h2>

      {/* Contact Page */}
      <div className="bg-gray-100 min-h-screen flex items-center justify-center py-8 px-6">
        <motion.div
          className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-xl rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          {/* Left Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <img
              src="/images/contact.jpeg"
              alt="Contact"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-black/50 text-white p-4 w-full"></div>
          </motion.div>

          {/* Right Side - Contact Info */}
          <motion.div
            className="p-8 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            >
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                Get in Touch with us
              </h3>
              <p className="text-gray-600 mb-4">
                📍Lower Bazar, Sarkaghat (H.P.) 175024
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.8184879221285!2d76.71534827442056!3d31.77543623449812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904db91b10ac457%3A0xaeac23507703ee3b!2zTGF4bWkgZ2xhc3MgSG91c2Ug4KS44KWB4KSw4KWH4KSC4KSm4KWN4KSwIOCknOClgCDgpLjgpLDgpJXgpL7gpJjgpL7gpJ8g4KS14KS-4KSy4KWH!5e0!3m2!1sen!2sin!4v1775220145298!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </motion.div>

            {/* Direct Inquiries */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
            >
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                Direct Inquiries
              </h3>
              <p className="text-gray-700">📞 Call Us: +91 94180-31457</p>
              <p className="text-gray-700">✉️ Email Us: laxmi.glasshouse.in</p>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
            >
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Connect With Us Online
              </h3>
              <form className="space-y-4">
                <motion.input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  whileFocus={{ scale: 1.02 }}
                ></motion.textarea>
                <motion.button
                  type="submit"
                  className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
