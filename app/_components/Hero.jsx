"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles,
  ArrowRight,
  BarChart,
  BarChart2,
  LineChart,
  PieChart
} from "lucide-react";

function Hero() {
  return (
    <section className="bg-sky-50 min-h-screen flex items-center relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('/dots-pattern.svg')] opacity-10 z-0" />
      <div className="absolute top-1/3 -left-20 w-96 h-96 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 rounded-full bg-cyan-300/20 blur-3xl" />
      
      {/* Floating financial illustrations */}
      <motion.div 
        className="absolute top-20 left-10 md:left-20 text-blue-400/30 z-0"
        initial={{ opacity: 0, scale: 0, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
      >
        <BarChart size={64} />
      </motion.div>
      
      <motion.div 
        className="absolute top-40 right-10 md:right-32 text-indigo-400/20 z-0"
        initial={{ opacity: 0, scale: 0, rotate: 20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
      >
        <PieChart size={90} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 left-20 md:left-40 text-cyan-500/20 z-0"
        initial={{ opacity: 0, scale: 0, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1.3, duration: 1, ease: "easeOut" }}
      >
        <LineChart size={80} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 right-10 text-blue-500/20 z-0 hidden md:block"
        initial={{ opacity: 0, scale: 0, rotate: 15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1.6, duration: 1, ease: "easeOut" }}
      >
        <BarChart2 size={70} />
      </motion.div>
      
      {/* Abstract shapes */}
      <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full border-4 border-blue-200/20 hidden md:block" />
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full border-4 border-indigo-200/20 hidden md:block" />
      <div className="absolute top-1/2 right-1/3 w-12 h-12 rounded-md rotate-45 border-4 border-cyan-200/20 hidden md:block" />
      
      {/* Main content */}
      <div className="z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 text-blue-600 shadow-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Finance</span>
          </motion.div>
          
          <h1 className="text-4xl font-bold text-blue-950 mb-4">
            Your Financial Future, <br />
            <motion.span 
              className="text-5xl md:text-7xl font-extrabold mt-4 block relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Reimagined
              </span>
            </motion.span>
          </h1>
          
          <p className="text-blue-800 text-lg max-w-2xl mx-auto mt-8 mb-8">
            Effortlessly track, plan, and grow your wealth with intelligent analysis 
            and personalized recommendations.
          </p>
          
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-medium transition-all shadow-lg shadow-blue-300 hover:shadow-blue-400 hover:bg-blue-500 flex items-center gap-2 mx-auto">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;