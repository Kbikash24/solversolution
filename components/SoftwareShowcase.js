"use client";
import React from "react";
import { motion } from "framer-motion";
const SoftwareCard = ({
  title,
  subtitle,
  description,
  bgColor,
  textColor,
  titleSize,
  downloadUrl,
}) => (
  <div
    className={`${bgColor} ${textColor} hover:bg-teal-500 hover:text-white hover:text-3xl p-6 rounded-lg shadow-xs flex flex-col justify-between h-full min-h-[280px] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group`}
  >
    <div>
      <h2
        className={`${
          titleSize || "text-2xl"
        } font-bold mb-2 text-teal-500 transition-all duration-300 group-hover:text-white`}
      >
        {title}
      </h2>
      <h3 className="text-xl font-semibold mb-4 transition-all duration-300 group-hover:opacity-80">
        {subtitle}
      </h3>
      <p className="text-sm opacity-90 leading-relaxed transition-all duration-300 group-hover:opacity-100">
        {description}
      </p>
    </div>
    {/* Button stays same size using scale-100 on hover */}
    <a
      href={downloadUrl}
      download
      className="bg-blue-600 text-white px-4 py-2 rounded font-medium mt-6 self-start transform hover:scale-105 transition-transform"
    >
      Download
    </a>
  </div>
);

export default function SoftwareShowcase() {
  const softwareData = [
    {
      title: "Speed Plus 9.0",
      subtitle: "Business ERP Software",
      description:
        "Best Suitable For Retailers, Wholesalers, Manufacturers, Hotels, Restaurants, Commission Agents",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      downloadUrl: "https://solversolutions.in/Downloads/SpeedPlus9_Setup.exe",
    },
    {
      title: "I-Genius 2.0",
      subtitle: "School / College ERP",
      description:
        "ERP Software of Schools, Colleges and Educational Institutes to help manage admissions, enquiries, fees, stock, id card printing and more",
      bgColor: "bg-white",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      downloadUrl: "https://solversolutions.in/Downloads/iGenius2_Setup.exe",
    },
    {
      title: "E-Lab 2.0",
      subtitle: "Clinical Labs Software",
      description:
        "ERP Software for Clinical and Pathology Labs to make accurate test reports, doctor Incentive, Verification QR Code, Whatsapp Reports and more.",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      downloadUrl: "https://solversolutions.in/Downloads/elab2_Setup.exe",
    },
    {
      title: "Red Apple 11.0",
      subtitle: "Sabzi Mandi Software",
      description:
        "ERP Software for Fruits and Vegetable Commission Agents, Wholesalers, Distributors, importer, order suppliers",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      downloadUrl: "https://solversolutions.in/Downloads/RedApple11_setup.exe",
    },
    {
      title: "Milky 2.0",
      subtitle: "Milk Dairy Software",
      description:
        "Software for Milk Dairies, Chilling plants, milk collection centers. Integrated with Milk Analyzer machines",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      downloadUrl: "https://solversolutions.in/Downloads/Milky2_Setup.exe",
    },
    {
      title: "My Library",
      subtitle: "Library Management ERP",
      description:
        "ERP Software for Books Libraries and Study libraries. Helps manage Books Issue / Receipt, Fine Calculation, Pending Books List. Manage student charges and more.",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      downloadUrl: "https://solversolutions.in/Downloads/mylibrary2_setup.exe",
    },
    {
      title: "Emerald",
      subtitle: "Shuttering Stores ERP",
      description:
        "ERP Software for Shuttering / Scaffolding Stores to help produce accurate hire charges bills. Challans, agreements, Financials, Stock and more",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      downloadUrl: "https://solversolutions.in/Downloads/Emerald6_setup.exe",
    },
    {
      title: "Focus Plus",
      subtitle: "Institute Management Software",
      description:
        "ERP Software for Computer Centers, Education Institutes, Coaching Centers to help manage enquiries, admissions, fees, attendance, certificates, financial accounting, gst and more.",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      downloadUrl: "https://solversolutions.in/Downloads/FocusPlus_Setup.exe",
    },
    {
      title: "Bellboy",
      subtitle: "Courier Agency software",
      description:
        "ERP Software for Courier Agencies to make monthly bills of regular customers. Flexible Rate card management, Docket Slips, Delivery Sheet, Financial Accounting and more.",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      downloadUrl: "https://solversolutions.in/Downloads/BellBoy_Setup.exe",
    },
    {
      title: "Clean Machine",
      subtitle: "Drycleaners Software",
      description:
        "ERP Software for Drycleaners and Laundry shops with garments tag printing, Order and Delivery Management, Stores Management, Customer notifications via SMS / Whatsapp, Simple Accounting",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      downloadUrl:
        "https://solversolutions.in/Downloads/CleanMachine_setup.exe",
    },
    {
      title: "Bell",
      subtitle: "Cold Stores Software",
      description:
        "ERP Software for Cold Stores and warehouse management for proper stock management of suppliers floor wise, chamber wise, rack wise. Make accurate bills, Inward Challans, Outward challans, Accounts and more",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      downloadUrl: "https://solversolutions.in/Downloads/Bell_setup.exe",
    },
    {
      title: "Finnacle",
      subtitle: "Finance Companies software",
      description:
        "ERP Software for Finance companies with flexible loans management to help manage any kind of loans like personal loans, vehicle loans etc, Financial Accounting, guarantor management",
      bgColor: "bg-white",
      textColor: "text-gray-800",
      downloadUrl: "https://solversolutions.in/Downloads/Finacle_Setup.exe",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1
          className="text-4xl sm:text-5xl font-thin text-[#153c3c] mb-4 tracking-tight"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Our Products
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto"></p>
      </motion.div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {softwareData.map((software, index) => (
            <SoftwareCard key={index} {...software} />
          ))}
        </div>
      </div>
    </div>
  );
}
