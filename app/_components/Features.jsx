"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  TrendingUpIcon, 
  PiggyBankIcon, 
  BarChart3Icon, 
  AlertCircleIcon, 
  ArrowRightIcon, 
  CheckCircleIcon,
  LockIcon
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <TrendingUpIcon className="w-12 h-12 text-blue-500" />,
      title: "AI Budget Optimization",
      description: "Let AI analyze your income and spending patterns to suggest the best way to balance your budget and maximize savings.",
      benefits: ["Personalized budget plans", "Real-time adjustments", "Expense control insights"]
    },
    {
      icon: <PiggyBankIcon className="w-12 h-12 text-blue-500" />,
      title: "Smart Savings Suggestions",
      description: "Our AI tracks your expenses and recommends the best ways to save more based on your income and spending behavior.",
      benefits: ["Goal-based savings tips", "Spending habit analysis", "Adaptive saving strategies"]
    },
    {
      icon: <BarChart3Icon className="w-12 h-12 text-blue-500" />,
      title: "Expense Breakdown Insights",
      description: "Get a detailed breakdown of where your money goes, with AI-driven categorization and actionable insights.",
      benefits: ["Spending categories", "Monthly analysis", "Hidden expense detection"]
    },
    {
      icon: <AlertCircleIcon className="w-12 h-12 text-blue-500" />,
      title: "Overspending Alerts",
      description: "Receive instant notifications when you're close to exceeding your budget or an unusual expense is detected.",
      benefits: ["Real-time alerts", "Budget breach warnings", "Spending control reminders"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
              AI-Powered Features
            </span>
            <h2 className="text-4xl font-bold text-blue-900 mt-4 mb-2">Take Control of Your Finances with AI</h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Track your expenses, optimize your budget, and get personalized savings recommendations — all driven by AI.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-50 relative group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative z-10">
                <motion.div 
                  className="mb-6 p-3 bg-blue-50 inline-block rounded-2xl"
                  whileHover={{ y: -5, rotate: [-5, 0, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-blue-700 mb-6">{feature.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-blue-800">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-blue-100">
                  <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-500 transition-colors">
                    Learn more <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
