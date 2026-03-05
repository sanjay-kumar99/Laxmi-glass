import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white pt-12 pb-6 px-8 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 border-b border-red-500 pb-8 mb-6">
        <div>
          <h4 className="font-bold text-xl mb-4">Contact</h4>
          <p className="flex items-center gap-2 mb-2">
            <Phone size={16} /> (M) 94180-31457
          </p>
          <p className="flex items-center gap-2 underline">
            <Mail size={16} /> laxmi.glasshouse.in
          </p>
        </div>
        <div className="text-center">
          <h4 className="font-bold text-xl mb-4">Visit Us</h4>
          <p className="flex items-center justify-center gap-2">
            <MapPin size={16} /> Lower Bazar, Sarkaghat (H.P.) 175024
          </p>
        </div>
        <div className="flex justify-end gap-4 items-center">
          <div className="bg-white/20 p-2 rounded-full cursor-pointer hover:bg-white/40 transition">
            <Facebook size={24} />
          </div>
          <div className="bg-white/20 p-2 rounded-full cursor-pointer hover:bg-white/40 transition">
            <Instagram size={24} />
          </div>
        </div>
      </div>
      <p className="text-center text-sm opacity-60">
        © 2026 Laxmi Glass House. All Rights Reserved.
      </p>

      {/* Floating WhatsApp Icon */}
      <div className="fixed bottom-8 right-8 bg-green-500 p-4 rounded-full shadow-2xl text-white cursor-pointer hover:scale-110 transition z-50">
        <a
          href="https://wa.me/9418031457"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
