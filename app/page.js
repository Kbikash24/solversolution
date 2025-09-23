"use client";
import React, { useState } from "react";
import Navigation from "@/components/Navigation";

import HeroSection from "@/components/HeroSection";
import SoftwareShowcase from "@/components/SoftwareShowcase";
import BlastersMarketing from "@/components/BlastersMarketing";
import MobileAppsUI from "@/components/MobileAppsUI";
import ContactPage from "@/components/ContactPage";
import FooterSection from "@/components/FooterSection";
const SolverSolutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* ERP Products Section */}
      <SoftwareShowcase />

      {/* Blasters Section */}
      <BlastersMarketing />

      {/* Mobile Apps Section */}
      <MobileAppsUI />

      {/* Contact Section */}
      <ContactPage />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default SolverSolutions;
