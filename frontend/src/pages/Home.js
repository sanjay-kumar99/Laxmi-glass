/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
import { MapPin } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      {/* --- Hero Section --- */}
      <motion.header
        className="relative h-[500px] bg-gray-100 overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full object-cover z-10 "
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <motion.div
          className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4 mt-12 "
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        >
          <div className="bg-white/90 p-8 rounded-lg shadow-2xl max-w-4xl border-t-8 border-red-600">
            <h2 className="text-red-700 text-2xl font-bold mb-1 italic">
              Surender (Owner)
            </h2>
            <p className="text-gray-700 font-semibold mb-4 text-xl underline">
              (M) 94180-31457
            </p>

            <h1 className="text-6xl font-extrabold text-red-600 mb-2 tracking-tight">
              Laxmi GLASS HOUSE
            </h1>
            <p className="text-gray-800 font-bold text-lg mb-6 border-y-2 border-gray-300 py-2 uppercase tracking-widest">
              Crystal Clear Quality & Innovative Hardware
            </p>

            <div className="bg-gray-800 text-white p-4 rounded text-xl font-medium">
              Deals In: All Kinds of Glass, Hardware, Plywood, Sunmica, Kitply,
              Fevicol, Tik Ply & Fancy Handle etc.
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* --- Gallery Spotlight --- */}
      <motion.section
        className="py-16 px-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          Gallery Spotlight
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Interactive high-resolution designs.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500",
            "https://media.istockphoto.com/id/2053961830/photo/luxury-modern-gray-kitchen.jpg?s=612x612&w=0&k=20&c=JVyV2xLN-xr52YCmIyrzEhrCp7tnyVx3myBbneELUv4=",
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500",
          ].map((src, idx) => (
            <motion.div
              key={idx}
              className="rounded-xl overflow-hidden relative group"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={src}
                className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                alt="Gallery Item"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* --- Visualizer & Owner Section --- */}
      <motion.section
        className="bg-gray-50 py-16 px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Map/Location */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Visualizer Tool & Location
            </h3>
            <div className="bg-white p-4 rounded-xl shadow-md space-y-4">
              <div className="text-center">
                <p className="font-bold text-gray-700">
                  Lower Bazar, Sarkaghat (H.P.) 175024
                </p>
                <p className="text-xs text-gray-500">Open Interactive Map</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.8184879221285!2d76.71534827442056!3d31.77543623449812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904db91b10ac457%3A0xaeac23507703ee3b!2zTGF4bWkgZ2xhc3MgSG91c2Ug4KS44KWB4KSw4KWH4KSC4KSm4KWN4KSwIOCknOClgCDgpLjgpLDgpJXgpL7gpJjgpL7gpJ8g4KS14KS-4KSy4KWH!5e0!3m2!1sen!2sin!4v1775220145298!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </motion.div>

          {/* Owner Info */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-600 flex gap-6 items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            viewport={{ once: true }}
          >
            <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden border-4 border-white shadow-lg shrink-0">
              <img
                src="/images/owner.jpeg"
                alt="Surender Owner"
                className="w-full h-full "
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Meet the Owner</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Welcome to Laxmi Glass House. Our owner, Surender, has been
                providing professional glass and hardware solutions for over 20
                years in Sarkaghat.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white px-6 py-2 rounded shadow hover:bg-red-700 transition"
              >
                View More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
