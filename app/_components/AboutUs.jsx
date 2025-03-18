import { PieChart, BarChart3, TrendingDown, Receipt, Wallet, CreditCard, ArrowRight, Target } from "lucide-react";

const AboutUs = () => {
  const features = [
    { 
      icon: <PieChart className="h-6 w-6 text-primary" />, 
      title: "Smart Categorization",
      desc: "Our AI automatically sorts your transactions into categories for better insights."
    },
    { 
      icon: <TrendingDown className="h-6 w-6 text-primary" />, 
      title: "Spending Analysis",
      desc: "Get AI-powered insights to optimize your budget and reduce unnecessary expenses."
    }
  ];

  return (
    <section className="bg-gradient-to-r from-softBlue/40 to-lightBlue/40 py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Interactive visualization */}
          <div className="relative">
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Central circle */}
              <div className="absolute w-40 h-40 bg-gradient-to-br from-primary to-deepNavy rounded-full flex items-center justify-center shadow-xl z-20 animate-pulse">
                <Wallet className="h-16 w-16 text-white" />
              </div>
              
              {/* Orbiting elements - simplified */}
              <div className="absolute w-72 h-72 rounded-full border-2 border-dashed border-deepNavy/30 animate-spin-slow">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
                  <PieChart className="h-10 w-10 text-primary" />
                </div>
              </div>
              
              {/* Expense cards - only kept one */}
              <div className="absolute -top-4 -right-4 bg-white/90 p-4 rounded-xl shadow-lg w-48 animate-float">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-xs text-gray-500">Dining</p>
                    <p className="font-bold text-deepNavy">$245.50</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div className="bg-primary h-2 rounded-full w-2/3"></div>
                </div>
              </div>
              
              {/* Savings Goal Tracker - Intermediate Element */}
              <div className="absolute top-1/4 -left-8 bg-deepNavy text-white p-4 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5" />
                  <h4 className="font-semibold">Vacation Goal</h4>
                </div>
                <div className="flex justify-between text-sm mb-1">
                  <span>$1,240 / $3,000</span>
                  <span className="font-bold">41%</span>
                </div>
                <div className="w-full bg-white/30 h-3 rounded-full">
                  <div className="bg-white h-3 rounded-full w-[41%]"></div>
                </div>
                <p className="text-xs mt-2">4 months remaining • On track</p>
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-deepNavy">
              AI-Powered
              <span className="text-primary block">Financial Assistant</span>
            </h2>

            <p className="text-lg text-deepNavy/80">
              Take control of your finances with our intelligent AI assistant that analyzes
              your spending patterns and provides personalized recommendations.
            </p>

            <div className="space-y-4 pt-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-2 bg-primary/20 rounded-full shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-deepNavy text-lg">{feature.title}</h3>
                    <p className="text-deepNavy/70">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-4 text-white bg-deepNavy rounded-xl shadow-md hover:bg-deepNavy/80 flex items-center gap-2 group">
              Start Tracking Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;