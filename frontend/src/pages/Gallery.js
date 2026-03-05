import React from "react";

const Gallery = () => {
  return (
    <>
      <section className="py-16 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">
          Gallery Spotlight
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Interactive high-resolution designs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-1 h-80 rounded-xl overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500"
              className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
              alt="Staircase"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black text-white">
              Glass Staircase
            </div>
          </div>
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="h-[152px] rounded-xl overflow-hidden relative">
              <img
                src="https://media.istockphoto.com/id/2053961830/photo/luxury-modern-gray-kitchen.jpg?s=612x612&w=0&k=20&c=JVyV2xLN-xr52YCmIyrzEhrCp7tnyVx3myBbneELUv4="
                className="h-full w-full object-cover"
                alt="Kitchen"
              />
              <div className="absolute bottom-0 p-2 text-white text-sm bg-black/50 w-full">
                Modular Kitchen
              </div>
            </div>
            <div className="h-[152px] rounded-xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500"
                className="h-full w-full object-cover"
                alt="Wardrobe"
              />
              <div className="absolute bottom-0 p-2 text-white text-sm bg-black/50 w-full">
                Wardrobe Glass
              </div>
            </div>
          </div>
          <div className="md:col-span-1 h-80 rounded-xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500"
              className="h-full w-full object-cover"
              alt="Sunmica"
            />
            <div className="absolute bottom-0 p-4 text-white bg-black/50 w-full font-bold">
              Textured Sunmica
            </div>
          </div>
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="h-[152px] rounded-xl overflow-hidden relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1677327623532-c1cf197e4778?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFuZGxlc3xlbnwwfHwwfHx8MA%3D%3D"
                className="h-full w-full object-cover"
                alt="Handles"
              />
              <div className="absolute bottom-0 p-2 text-white text-sm bg-black/50 w-full">
                Premium Handles
              </div>
            </div>
            <div className="h-[152px] rounded-xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?w=500"
                className="h-full w-full object-cover"
                alt="Handles"
              />
              <div className="absolute bottom-0 p-2 text-white text-sm bg-black/50 w-full">
                Modern Fittings
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default Gallery;
