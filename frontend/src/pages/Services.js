import React, { useEffect, useState } from "react";

const Services = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/gallery")
      .then((res) => res.json())
      .then((data) => {

        // category wise first image
        const uniqueServices = [];

        const categories = new Set();

        data.forEach((item) => {

          if (!categories.has(item.category)) {

            categories.add(item.category);

            uniqueServices.push(item);

          }

        });

        setServices(uniqueServices);

      });

  }, []);

  return (
    <div className="px-10 py-12">

      <h1 className="text-3xl text-center font-bold mb-8">
        Our Services
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {services.map((service) => (

          <div
            key={service._id}
            className="rounded-xl overflow-hidden shadow hover:shadow-xl transition group"
          >

            <div className="h-48 overflow-hidden">

              <img
                src={service.imageUrl}
                alt={service.category}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

            </div>

            <div className="p-4 text-center font-semibold capitalize">
              {service.category}
            </div>
            <div className="px-4 pb-4 text-sm text-gray-600 text-center">
              {service.description}
            </div>


          </div>

        ))}

      </div>

    </div>
  );
};

export default Services;