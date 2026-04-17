import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const { category } = useParams();
  const [galleryItems, setGalleryItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // ✅ track selected image
  const [currentIndex, setCurrentIndex] = useState(0); // ✅ track index

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        let url = "http://localhost:5000/api/gallery";
        if (category) {
          url = `http://localhost:5000/api/gallery/${category}`;
        }
        const res = await axios.get(url);
        setGalleryItems(res.data);
      } catch (err) {
        console.error("Error fetching images:", err);
      }
    };
    fetchGallery();
  }, [category]);

  // ✅ Flatten all images into one array for easy navigation
  const allImages = galleryItems.flatMap((item) =>
    item.images.map((img) => ({
      src: `http://localhost:5000/${img}`,
      category: item.category,
    })),
  );

  const openModal = (index) => {
    setSelectedImage(allImages[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    setSelectedImage(allImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const showPrev = () => {
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setSelectedImage(allImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        {category ? `${category} Gallery` : "GALLERY"}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {allImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="aspect-[4/3] w-full overflow-hidden rounded cursor-pointer"
            onClick={() => openModal(idx)}
            initial={{ opacity: 0, scale: 0.9, y: 30 }} // start hidden + small + shifted down
            animate={{ opacity: 1, scale: 1, y: 0 }} // fade in + zoom + slide up
            transition={{ duration: 0.5, delay: idx * 0.1 }} // staggered entry
            whileHover={{ scale: 1.05 }} // zoom on hover
          >
            <img
              src={img.src}
              alt={`${img.category}-${idx}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* ✅ Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-3xl w-full p-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedImage.src}
                alt="preview"
                className="w-full h-auto rounded-lg shadow-lg"
              />

              {/* Close button */}
              <button
                onClick={closeModal}
                className="fixed top-4 right-4 bg-white text-black px-3 py-1 rounded shadow-lg z-50"
              >
                ✕
              </button>

              {/* Prev button */}
              <button
                onClick={showPrev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded"
              >
                ◀
              </button>

              {/* Next button */}
              <button
                onClick={showNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded"
              >
                ▶
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
