import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Gallery = () => {
  const { category } = useParams(); // URL se category milegi
  const [images, setImages] = useState([]);

  useEffect(() => {
    let url = "http://localhost:5000/api/gallery";

    // agar category hai to category wise images fetch
    if (category) {
      url = `http://localhost:5000/api/gallery/${category}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error fetching images:", err));
  }, [category]);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        {category ? `${category} Gallery` : "Gallery"}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((img) => (
          <img
            key={img._id}
            src={img.imageUrl}
            alt={img.title}
            className="w-full h-48 object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
