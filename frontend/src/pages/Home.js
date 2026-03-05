import { MapPin } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <>
      {/* --- Hero Section --- */}
      <header className="relative h-[500px] bg-gray-100 overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Interior"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
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
        </div>
      </header>
      {/* --- Gallery Spotlight --- */}
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

      {/* --- Visualizer & Owner Section --- */}
      <section className="bg-gray-50 py-16 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Map/Location */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Visualizer Tool & Location
            </h3>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center overflow-hidden border">
                {/* Google Map Placeholder */}
                <div className="text-center p-4">
                  <MapPin className="mx-auto text-red-600 mb-2" size={32} />
                  <p className="font-bold">
                    Lower Bazar, Sarkaghat (H.P.) 175024
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Open Interactive Map
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Owner Info */}
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-600 flex gap-6 items-center">
            <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden border-4 border-white shadow-lg shrink-0">
              <img
                src="https://via.placeholder.com/150"
                alt="Surender Owner"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Meet the Owner</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Welcome to Laxmi Glass House. Our owner, Surender, has been
                providing professional glass and hardware solutions for over 20
                years in Sarkaghat.
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded shadow hover:bg-red-700 transition">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
