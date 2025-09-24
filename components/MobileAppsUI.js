"use client";
import React from "react";
import { FaDatabase, FaMobileAlt, FaWhatsapp, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MobileAppsUI() {
  const mobileApps = [
    {
      id: 1,
      title: "Farata",
      description:
        "Integrated with Speed Plus 9.0. Take Orders from Market, Make Bills, Receipts, Estimates and more.",
      icon: FaDatabase,
      downloadUrl:
        "https://solversolutions.in/mobileapps/com.solver.farata.apk",
    },
    {
      id: 2,
      title: "Red Apple Mobile App",
      description:
        "App for Sabzi Mandi Business. Works as stand Alone as well as Integrated with Red Apple 11",
      icon: FaMobileAlt,
      downloadUrl:
        "https://solversolutions.in/mobileapps/com.redapple11.solver.apk",
    },
    {
      id: 3,
      title: "Whatsapp Bill",
      description:
        "Standalone Mobile App for Billing, Accounts, Payment, Receipts and more.",
      icon: FaWhatsapp,
      downloadUrl:
        "https://solversolutions.in/Downloads/WhatsappBlaster_Setup.exe",
    },
    {
      id: 4,
      title: "Solver CRM",
      description:
        "Track your Solver Software licenses, Leads, AMC, Partner Network right in your mobile app",
      icon: FaUsers,
      downloadUrl: "https://solversolutions.in/mobileapps/com.solver.crm.apk",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
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
            Mobile Apps: Manage Your Business Anywhere
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Keep total control over your business from your phone
          </p>
        </motion.div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* First Row - 3 Apps */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {mobileApps.slice(0, 3).map((app, index) => {
                const IconComponent = app.icon;
                return (
                  <motion.div
                    key={app.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="group flex flex-col items-start p-6 rounded-lg bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center w-full">
                      {/* Icon */}
                      <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-teal-50 group-hover:bg-teal-600 transition-colors duration-300 mb-6">
                        <IconComponent className="w-10 h-10 text-teal-500 group-hover:text-white transition-colors duration-300" />
                      </div>

                      {/* Content */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-semibold text-[#153c3c] mb-2 group-hover:text-teal-500 transition-colors duration-300">
                          {app.title}
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          {app.description}
                        </p>
                      </div>

                      {/* Download Button */}
                      <motion.a
                        href={app.downloadUrl}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0px 8px 24px rgba(23,105,255,0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-auto bg-[#1769ff] hover:bg-[#1256cc] text-white font-medium text-base py-2 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
                      >
                        Download
                      </motion.a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Second Row - 1 App (Solver CRM) */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-start-2">
                {(() => {
                  const app = mobileApps[3];
                  const IconComponent = app.icon;
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="group flex flex-col items-start p-6 rounded-lg bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
                    >
                      <div className="flex flex-col items-center w-full">
                        {/* Icon */}
                        <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-teal-50 group-hover:bg-teal-600 transition-colors duration-300 mb-6">
                          <IconComponent className="w-10 h-10 text-teal-500 group-hover:text-white transition-colors duration-300" />
                        </div>

                        {/* Content */}
                        <div className="mb-6">
                          <h3 className="text-2xl font-semibold text-[#153c3c] mb-2 group-hover:teal-500 transition-colors duration-300">
                            {app.title}
                          </h3>
                          <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                            {app.description}
                          </p>
                        </div>

                        {/* Download Button */}
                        <motion.a
                          href={app.downloadUrl}
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 8px 24px rgba(23,105,255,0.3)",
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-auto bg-[#1769ff] hover:bg-[#1256cc] text-white font-medium text-base py-2 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
                        >
                          Download
                        </motion.a>
                      </div>
                    </motion.div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Streamline your business operations with our comprehensive mobile
            app solutions
          </p>
        </div>
      </div>
    </div>
  );
}
