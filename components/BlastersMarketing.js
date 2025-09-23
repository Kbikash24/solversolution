"use client";
import React from "react";
import {
  FaWhatsapp,
  FaGoogle,
  FaSms,
  FaFacebook,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function BlastersMarketing() {
  const services = [
    {
      id: 1,
      title: "Whatsapp Blaster",
      description:
        "Send Whatsapp to unlimited numbers in a single click without saving contacts",
      icon: FaWhatsapp,
      downloadUrl:
        "https://solversolutions.in/Downloads/WhatsappBlaster_Setup.exe",
    },
    {
      id: 2,
      title: "Google Maps Blaster",
      description:
        "Pull Contact details of any trade, any city, any state, any country in Excel",
      icon: FaGoogle,
      downloadUrl:
        "https://solversolutions.in/Downloads/GoogleMapsBlaster_Setup.exe",
    },
    {
      id: 3,
      title: "SMS / RCS Blaster",
      description:
        "Send Unlimited RCS messages without any cost with Photo and Text. Send SMS as per Sim Plan",
      icon: FaSms,
      downloadUrl: "https://solversolutions.in/Downloads/SMSBlaster_Setup.exe",
    },
    {
      id: 4,
      title: "Facebook Blaster",
      description:
        "Grow your business by sharing ad in facebook groups daily effortlessly",
      icon: FaFacebook,
    },
    {
      id: 5,
      title: "Email Blaster",
      description:
        "Make your own customized email marketing campaigns, schedule messages, send via your own unlimited mail id's",
      icon: FaEnvelope,
      downloadUrl:
        "https://solversolutions.in/Downloads/EmailBlaster_setup.exe",
    },
    {
      id: 6,
      title: "Linkedin Blaster",
      description:
        "Extract Emails and Phone numbers of your connections, Send customized introduction to your target audience on Linkedin.",
      icon: FaLinkedin,
      downloadUrl:
        "https://solversolutions.in/Downloads/LinkedInBlaster_Setup.exe",
    },
  ];
  const handleDownload = (url) => {
    window.location.href = url;
  };
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
            Blasters: Organic Marketing Softwares
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Grow your Business with our organic digital marketing softwares
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group flex flex-col items-start p-6 rounded-lg bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-start gap-4 w-full">
                  {/* Icon */}
                  <div className="w-20 h-20 flex px-4 items-center justify-center rounded-lg bg-teal-50  group-hover:bg-teal-600  transition-colors duration-300">
                    <IconComponent className="w-10 h-10 text-teal-500 group-hover:text-white  transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-[#153c3c] mb-2 group-hover:text-teal-600  transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed   duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Download Button */}
                <div className="text-right w-full pr-12">
                  <motion.a
                    href={service?.downloadUrl}
                    download
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 8px 24px rgba(23,105,255,0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-auto bg-[#1769ff] hover:bg-[#1256cc] text-white font-medium text-base py-2 px-4 rounded-lg transition-colors duration-200 inline-block text-center"
                  >
                    Download
                  </motion.a>
                  {/* <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 8px 24px rgba(23,105,255,0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-auto bg-[#1769ff] hover:bg-[#1256cc] text-white font-medium text-base py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Download
                  </motion.button> */}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
