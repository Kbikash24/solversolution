import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGlobe,
  FaYoutube,
} from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-teal-500 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address Section */}
          <div className="flex flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center mr-3">
                <FaMapMarkerAlt className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Address</h3>
            </div>
            <div className="ml-11">
              <p className="text-white/90 text-sm leading-relaxed">
                Solver IT Park
                <br />
                Taraksheel Chowk, Barnala-148101 (Pb)
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center mr-3">
                <FaPhone className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Contact</h3>
            </div>
            <div className="ml-11 space-y-2">
              <div className="flex items-center">
                <span className="text-white/90 text-sm font-medium mr-2">
                  Phone:
                </span>
                <a
                  href="tel:+919023662626"
                  className="text-white text-sm hover:text-white/80 transition-colors"
                >
                  +91-9023662626
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-white/90 text-sm font-medium mr-2">
                  Email:
                </span>
                <a
                  href="mailto:speedsolver@yahoo.com"
                  className="text-white text-sm hover:text-white/80 transition-colors"
                >
                  speedsolver@yahoo.com
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div className="flex flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center mr-3">
                <FaClock className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Opening Hours</h3>
            </div>
            <div className="ml-11 space-y-2">
              <div className="flex items-center">
                <span className="text-white/90 text-sm font-medium mr-2">
                  Mon-Sat:
                </span>
                <span className="text-white text-sm">10AM - 4:00PM</span>
              </div>
              <div className="flex items-center">
                <span className="text-white/90 text-sm font-medium mr-2">
                  Sunday:
                </span>
                <span className="text-white text-sm">Closed</span>
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <h3 className="text-lg font-semibold">Follow Us</h3>
            </div>
            <div className="flex space-x-3">
              <a
                href="https://www.youtube.com/solverteam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-teal-500 transition-all duration-300 group"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/erp.solver"
                target="_blank"
                className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-teal-500 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/erp.solver"
                target="_blank"
                className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-teal-500 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/speed-solver-56578a99/"
                target="_blank"
                className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-teal-500 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
