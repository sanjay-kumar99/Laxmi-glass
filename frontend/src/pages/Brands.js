import React from "react";

const Brands = () => {
  const brands = [
    {
      name: "Kitply",
      logo: "/logo/kitply.webp",
      link: "https://kitply.com",
    },
    {
      name: "Fevicol",
      logo: "/logo/fevicol-logo.webp",
      link: "https://fevicol.in",
    },
    {
      name: "Greenlam",
      logo: "/logo/greenlamlogo.webp",
      link: "https://www.greenlam.co.in",
    },
    {
      name: "Saint-Gobain",
      logo: "/logo/saint-gobain-logo.webp",
      link: "https://www.saint-gobain.com",
    },
    {
      name: "Godrej",
      logo: "/logo/godrejlogo.webp",
      link: "https://www.godrej.com",
    },
  ];

  return (
    <div className="px-10 py-12">
      <h2 className="text-2xl text-center font-bold mb-10 text-gray-400 uppercase tracking-widest">
        Brands We Deal In
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {brands.map((brand, index) => (
          <a
            key={index}
            href={brand.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-20 object-contain mb-3"
            />
            <span className="text-lg italic font-semibold">{brand.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Brands;
