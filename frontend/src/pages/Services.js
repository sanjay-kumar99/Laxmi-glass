/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [services, setServices] = useState([]);

  // ✅ fetch all services initially
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/gallery");
        setServices(res.data);
      } catch (err) {
        console.error("Error fetching services:", err);
      }
    };
    fetchServices();
  }, []);

  // ✅ category select handler
  const handleCategorySelect = async (selectedCategory) => {
    try {
      if (!selectedCategory) {
        const res = await axios.get("http://localhost:5000/api/gallery");
        setServices(res.data);
      } else {
        const res = await axios.get(
          `http://localhost:5000/api/gallery/${encodeURIComponent(selectedCategory)}`
        );
        setServices(res.data);
      }
    } catch (err) {
      console.error("Error fetching category services:", err);
    }
  };

  // ✅ parent variants for stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // ✅ child variants with spring physics
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        bounce: 0.3
      }
    },
    exit: { opacity: 0, y: -50 }
  };

  return (
    <div className="px-10 py-12">
      <h1 className="text-3xl text-center font-bold mb-8">Our Services</h1>

      {/* ✅ Dropdown for category selection */}
      <div className="flex justify-center mb-6">
        <select
          onChange={(e) => handleCategorySelect(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="">All Services</option>
          <option value="Modern Modular Kitchen Design">
            Modern Modular Kitchen Design
          </option>
          <option value="Complete Door Solutions">
            Complete Door Solutions
          </option>
          <option value="Custom Wooden Work">Custom Wooden Work</option>
          <option value="Premium Finishing Materials">
            Premium Finishing Materials
          </option>
          <option value="Professional Glass Work">
            Professional Glass Work
          </option>
        </select>
      </div>

      {/* ✅ AnimatePresence for smooth category transitions */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {services.map((service) => (
            <motion.div
              key={service._id || service.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: 1 }} // ✅ tilt + zoom on hover
              className="rounded-xl overflow-hidden shadow hover:shadow-xl transition group"
            >
              <div className="relative h-48 overflow-hidden">
                <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  navigation
                  pagination={{ clickable: true }}
                  loop
                  className="h-48"
                >
                  {service.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={`http://localhost:5000/${img}`}
                        alt={service.category}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="p-4 text-center font-semibold capitalize">
                {service.category}
              </div>
              <div className="px-4 pb-4 text-sm text-gray-600 text-center">
                {service.description}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Services;
