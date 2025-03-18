import React from "react";

function Upgrade() {
  const plans = [
    {
      name: "Pro Plan",
      price: "$30",
      features: ["20 users included", "5GB of storage", "Email support", "Help center access", "Phone support", "Community access"],
      isPrimary: true,
    },
    {
      name: "Starter Plan",
      price: "$20",
      features: ["10 users included", "2GB of storage", "Email support", "Help center access"],
      isPrimary: false,
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Choose Your Plan
          </h1>
          <p className="text-gray-600 mt-2">Unlock premium features to elevate your finance tracking</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2
                ${plan.isPrimary 
                  ? "bg-white border-2 border-indigo-500 shadow-xl" 
                  : "bg-white/80 border border-gray-200 shadow-lg"}`
              }
            >
              {plan.isPrimary && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 ${
                plan.isPrimary ? "bg-indigo-100" : "bg-gray-100"
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${plan.isPrimary ? "text-indigo-600" : "text-gray-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={plan.isPrimary ? 
                    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" :
                    "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}
                  />
                </svg>
              </div>
              
              <h2 className="text-center text-2xl font-bold text-gray-800">{plan.name}</h2>
              <p className={`mt-4 text-center ${plan.isPrimary ? "bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600" : "text-gray-800"}`}>
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-base text-gray-500">/month</span>
              </p>
              
              <div className="mt-8 space-y-4">
                {plan.features.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <span className={`h-5 w-5 rounded-full flex items-center justify-center ${plan.isPrimary ? "bg-indigo-100 text-indigo-600" : "bg-gray-100 text-gray-600"}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className={`mt-8 block w-full rounded-xl py-3 text-center font-medium transition-all duration-300
                  ${plan.isPrimary 
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md hover:shadow-lg hover:shadow-indigo-200" 
                    : "bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50"}`
                }
              >
                {plan.isPrimary ? "Upgrade Now" : "Get Started"}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm text-gray-500">
          Need a custom enterprise plan? <a href="#" className="text-indigo-600 font-medium hover:underline">Contact us</a>
        </div>
      </div>
    </div>
  );
}

export default Upgrade;