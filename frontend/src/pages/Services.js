/* eslint-disable no-unused-vars */
import React from "react";

const Services = () => {
  const servicesList = [
    {
      name: "Glass",
      description:
        "We offer a wide range of glass products including tempered, laminated, and decorative glass for various applications.",
      image:
        "/images/4.jpeg",
    },
    {
      name: "Plywood",
      description:
        "High-quality plywood for construction and furniture making.",
      image:
        "/images/plywood.webp",
    },
    {
      name: "Sunmica",
      description:
        "Durable and attractive sunmica surfaces for interior decoration.",
      image:
        "/images/sunmica.webp",
    },
    {
      name: "Kitply",
      description: "Premium kitply for kitchen and bathroom applications.",
      image:
        "/images/kitply.webp",
    },
    {
      name: "Fevicol",
      description: "Strong and reliable fevicol for bonding various materials.",
      image:
        "/images/fevicol.webp",
    },
    {
      name: "Teak Ply",
      description: "High-quality teak ply for various construction needs.",
      image:
        "/images/teakply.webp",
    },
    {
      name: "Fancy Handle",
      description: "Elegant and durable fancy handles for doors and cabinets.",
      image:
        "/images/fancyhandle.webp",
    },
  ];
  return (
    <div className="px-10 py-12">
      <h1 className="text-3xl text-center font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow hover:shadow-xl transition group"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
            <div className=" p-4text-center font-semibold">{service.name}</div>
            <div className=" p-4text-center font-semibold">
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
