"use client";
import React from "react";
import { motion } from "framer-motion";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FacebookIcon className="w-6 h-6" />, url: "#", label: "Facebook" },
    { icon: <TwitterIcon className="w-6 h-6" />, url: "#", label: "Twitter" },
    { icon: <InstagramIcon className="w-6 h-6" />, url: "#", label: "Instagram" },
    { icon: <LinkedinIcon className="w-6 h-6" />, url: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-white border-t border-blue-100">
      <div className="container mx-auto px-6 py-8 flex flex-col items-center">
        {/* Logo */}
        <div className="flex flex-row items-center mb-8">
          <div className="relative mr-2">
            <div className="absolute inset-0 bg-blue-400 opacity-30 blur-sm rounded-full"></div>
            <Image src={"/chart-donut.svg"} alt="logo" width={40} height={25} className="relative" />
          </div>
          <span className="text-blue-800 font-bold text-xl">
            Finan<span className="text-blue-600">Smart</span>
          </span>
        </div>
        
        {/* Social icons - bigger and darker */}
        <div className="flex space-x-6 mb-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              aria-label={social.label}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>© {currentYear} FinanSmart. All rights reserved.</p>
          <p className="mt-1">Secure financial tracking for your peace of mind</p>
        </div>
      </div>
      
      <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-500"></div>
    </footer>
  );
}

export default Footer;