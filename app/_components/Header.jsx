"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { SparklesIcon } from "lucide-react";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

function Header() {
  const { user, isSignedIn } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
      <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-500"></div>

      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-row items-center">
          <div className="relative mr-2">
            <div className="absolute inset-0 bg-blue-400 opacity-30 blur-sm rounded-full"></div>
            <Image src={"/chart-donut.svg"} alt="logo" width={40} height={25} className="relative" />
          </div>
          <span className="text-blue-800 font-bold text-xl">
            Finan<span className="text-blue-600">Smart</span>
          </span>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("features")}
            className="text-blue-700 hover:text-blue-500 font-medium transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-blue-700 hover:text-blue-500 font-medium transition-colors"
          >
            Testimonials
          </button>
          <Link href="/dashboard/upgrade" className="text-blue-700 hover:text-blue-500 font-medium transition-colors">
            Pricing
          </Link>
        </div>

        {/* Auth & User Buttons */}
        {isSignedIn ? (
          <div className="hidden md:flex items-center gap-4">
            <Link href="/dashboard" className="text-blue-700 hover:text-blue-500 font-medium transition-colors">
              Dashboard
            </Link>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 opacity-20 blur-sm rounded-full"></div>
              <UserButton className="relative z-10" />
            </div>
          </div>
        ) : (
          <div className="hidden md:flex gap-3 items-center">
            <Link href={"/dashboard"}>
              <Button variant="outline" className="rounded-full border-blue-200 text-blue-700 hover:bg-blue-50">
                Dashboard
              </Button>
            </Link>
            <Link href={"/sign-in"}>
              <Button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-md flex items-center gap-1">
                <span>Get Started</span>
                <SparklesIcon className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        )}

        {/* Mobile Menu Button & Profile Icon */}
        <div className="md:hidden flex items-center gap-3">
          {isSignedIn && (
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 opacity-20 blur-sm rounded-full"></div>
              <UserButton className="relative z-10" />
            </div>
          )}
          <button
            className="rounded-md p-2 text-blue-700 hover:bg-blue-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white border-t border-blue-200 shadow-sm">
          <button
            onClick={() => scrollToSection("features")}
            className="text-blue-700 hover:text-blue-500 font-medium transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-blue-700 hover:text-blue-500 font-medium transition-colors"
          >
            Testimonials
          </button>
          <Link href="/upgrade" className="text-blue-700 hover:text-blue-500 font-medium transition-colors">
            Pricing
          </Link>
          {isSignedIn ? (
            <Link href="/dashboard" className="text-blue-700 hover:text-blue-500 font-medium transition-colors">
              Dashboard
            </Link>
          ) : (
            <Link href={"/sign-in"}>
              <Button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-md flex items-center gap-1">
                <span>Get Started</span>
                <SparklesIcon className="w-4 h-4" />
              </Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
