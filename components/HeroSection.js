import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] relative py-20 px-4 overflow-hidden flex justify-center items-center bg-[url('/hero-bg.jpg')] bg-cover bg-center">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#30ac9dbd] via-[#30ac9dbd] to-[#30ac9dbd] opacity-90"></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Welcome to Solver Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          ERP Softwares for every business
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#about"
            className="bg-[#5fcf80] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#4eb86d] transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
