"use client";
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import {
  LuDownload,
  LuPhone,
  LuMail,
  LuMapPin,
  LuMenu,
  LuX,
  LuUsers,
  LuBuilding2,
  LuFlaskConical,
  LuApple,
  LuMilk,
  LuBookOpen,
  LuConstruction,
  LuGraduationCap,
  LuTruck,
  LuShirt,
  LuSnowflake,
  LuBanknote,
  LuMessageSquare,
  LuMap,
  LuSend,
  LuSmartphone,
  LuLinkedin,
} from "react-icons/lu";
import HeroSection from "@/components/HeroSection";
import SoftwareShowcase from "@/components/SoftwareShowcase";
import BlastersMarketing from "@/components/BlastersMarketing";
import MobileAppsUI from "@/components/MobileAppsUI";
import ContactPage from "@/components/ContactPage";
import FooterSection from "@/components/FooterSection";
const SolverSolutions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const erpProducts = [
    {
      title: "Business ERP Software",
      icon: <LuBuilding2 className="w-8 h-8" />,
      description:
        "Best Suitable For Retailers, Wholesalers, Manufacturers, Hotels, Restaurants, Commission Agents",
      downloadUrl: "https://solversolutions.in/Downloads/SpeedPlus9_Setup.exe",
    },
    {
      title: "School / College ERP",
      icon: <LuGraduationCap className="w-8 h-8" />,
      description:
        "ERP Software of Schools, Colleges and Educational Institutes to help manage admissions, enquiries, fees, stock, id card printing and more",
      downloadUrl: "https://solversolutions.in/Downloads/iGenius2_Setup.exe",
    },
    {
      title: "Clinical Labs Software",
      icon: <LuFlaskConical className="w-8 h-8" />,
      description:
        "ERP Software for Clinical and Pathology Labs to make accurate test reports, doctor Incentive, Verification QR Code, Whatsapp Reports and more.",
      downloadUrl: "https://solversolutions.in/Downloads/elab2_Setup.exe",
    },
    {
      title: "Sabzi Mandi Software",
      icon: <LuApple className="w-8 h-8" />,
      description:
        "ERP Software for Fruits and Vegetable Commission Agents, Wholesalers, Distributors, importer, order suppliers",
      downloadUrl: "https://solversolutions.in/Downloads/RedApple11_setup.exe",
    },
    {
      title: "Milk Dairy Software",
      icon: <LuMilk className="w-8 h-8" />,
      description:
        "Software for Milk Dairies, Chilling plants, milk collection centers. Integrated with Milk Analyzer machines",
      downloadUrl: "https://solversolutions.in/Downloads/Milky2_Setup.exe",
    },
    {
      title: "Library Management ERP",
      icon: <LuBookOpen className="w-8 h-8" />,
      description:
        "ERP Software for Books Libraries and Study libraries. Helps manage Books Issue / Receipt, Fine Calculation, Pending Books List. Manage student charges and more.",
      downloadUrl: "https://solversolutions.in/Downloads/mylibrary2_setup.exe",
    },
    {
      title: "Shuttering Stores ERP",
      icon: <LuConstruction className="w-8 h-8" />,
      description:
        "ERP Software for Shuttering / Scaffolding Stores to help produce accurate hire charges bills. Challans, agreements, Financials, Stock and more",
      downloadUrl: "https://solversolutions.in/Downloads/Emerald6_setup.exe",
    },
    {
      title: "Institute Management Software",
      icon: <LuUsers className="w-8 h-8" />,
      description:
        "ERP Software for Computer Centers, Education Institutes, Coaching Centers to help manage enquiries, admissions, fees, attendance, certificates, financial accounting, gst and more.",
      downloadUrl: "https://solversolutions.in/Downloads/FocusPlus_Setup.exe",
    },
    {
      title: "Courier Agency Software",
      icon: <LuTruck className="w-8 h-8" />,
      description:
        "ERP Software for Courier Agencies to make monthly bills of regular customers. Flexible Rate card management, Docket Slips, Delivery Sheet, Financial Accounting and more.",
      downloadUrl: "https://solversolutions.in/Downloads/BellBoy_Setup.exe",
    },
    {
      title: "Drycleaners Software",
      icon: <LuShirt className="w-8 h-8" />,
      description:
        "ERP Software for Drycleaners and Laundry shops with garments tag printing, Order and Delivery Management, Stores Management, Customer notifications via SMS / Whatsapp, Simple Accounting",
      downloadUrl:
        "https://solversolutions.in/Downloads/CleanMachine_setup.exe",
    },
    {
      title: "Cold Stores Software",
      icon: <LuSnowflake className="w-8 h-8" />,
      description:
        "ERP Software for Cold Stores and warehouse management for proper stock management of suppliers floor wise, chamber wise, rack wise. Make accurate bills, Inward Challans, Outward challans, Accounts and more",
      downloadUrl: "https://solversolutions.in/Downloads/Bell_setup.exe",
    },
    {
      title: "Finance Companies Software",
      icon: <LuBanknote className="w-8 h-8" />,
      description:
        "ERP Software for Finance companies with flexible loans management to help manage any kind of loans like personal loans, vehicle loans etc, Financial Accounting, guarantor management",
      downloadUrl: "https://solversolutions.in/Downloads/Finacle_Setup.exe",
    },
  ];

  const blasterProducts = [
    {
      title: "Whatsapp Blaster",
      icon: <LuMessageSquare className="w-8 h-8" />,
      description:
        "Send Whatsapp to unlimited numbers in a single click without saving contacts",
      downloadUrl:
        "https://solversolutions.in/Downloads/WhatsappBlaster_Setup.exe",
    },
    {
      title: "Google Maps Blaster",
      icon: <LuMap className="w-8 h-8" />,
      description:
        "Pull Contact details of any trade, any city, any state, any country in Excel",
      downloadUrl:
        "https://solversolutions.in/Downloads/GoogleMapsBlaster_Setup.exe",
    },
    {
      title: "SMS / RCS Blaster",
      icon: <LuSend className="w-8 h-8" />,
      description:
        "Send Unlimited RCS messages without any cost with Photo and Text. Send SMS as per Sim Plan",
      downloadUrl: "https://solversolutions.in/Downloads/SMSBlaster_Setup.exe",
    },
    {
      title: "Email Blaster",
      icon: <LuMail className="w-8 h-8" />,
      description:
        "Make your own customized email marketing campaigns, schedule messages, send via your own unlimited mail id's",
      downloadUrl:
        "https://solversolutions.in/Downloads/EmailBlaster_setup.exe",
    },
    {
      title: "Linkedin Blaster",
      icon: <LuLinkedin className="w-8 h-8" />,
      description:
        "Extract Emails and Phone numbers of your connections, Send customized introduction to your target audiance on Linkedin.",
      downloadUrl:
        "https://solversolutions.in/Downloads/LinkedInBlaster_Setup.exe",
    },
  ];

  const mobileApps = [
    {
      title: "Red Apple Mobile App",
      icon: <LuApple className="w-8 h-8" />,
      description:
        "App for Sabzi Mandi Business. Works as stand Alone as well as Integrated with Red Apple 11",
      downloadUrl:
        "https://solversolutions.in/mobileapps/com.redapple11.solver.apk",
    },
    {
      title: "Solver CRM",
      icon: <LuSmartphone className="w-8 h-8" />,
      description:
        "Track your Solver Software licenses, Leads, AMC, Partner Network right in your mobile app",
      downloadUrl: "https://solversolutions.in/mobileapps/com.solver.crm.apk",
    },
  ];

  const ProductCard = ({ product, gradient }) => (
    <div
      className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group`}
    >
      <div className={`${gradient} p-6 text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
        <div className="relative z-10 flex items-center gap-4">
          {product.icon}
          <h3 className="text-xl font-bold">{product.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-6 leading-relaxed">
          {product.description}
        </p>
        <a
          href={product.downloadUrl}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
        >
          <LuDownload className="w-4 h-4" />
          Download
        </a>
      </div>
    </div>
  );

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
