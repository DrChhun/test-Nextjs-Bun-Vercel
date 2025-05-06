export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      period: "per month",
      description: "Everything you need to get started",
      features: [
        "Core platform features",
        "Up to 10 users",
        "5GB storage",
        "Basic support",
        "48-hour response time"
      ],
      buttonText: "Get Started",
      highlighted: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Perfect for growing businesses",
      features: [
        "All Basic features",
        "Up to 50 users",
        "25GB storage",
        "Priority support",
        "24-hour response time",
        "Advanced analytics"
      ],
      buttonText: "Try Pro",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "per month",
      description: "For large-scale operations",
      features: [
        "All Pro features",
        "Unlimited users",
        "100GB storage",
        "Dedicated support",
        "4-hour response time",
        "Custom integrations",
        "SSO authentication"
      ],
      buttonText: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Pricing Plans</h1>
      <p className="text-lg text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
        Choose the perfect plan for your needs. All plans include our core features, updates, and community support.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`rounded-xl p-8 ${
              plan.highlighted 
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 dark:shadow-blue-900/30 scale-105 relative z-10' 
                : 'bg-white dark:bg-black/20 shadow-md'
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-0 right-0 text-center">
                <span className="bg-blue-700 text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className={`ml-1 ${plan.highlighted ? 'text-blue-100' : 'text-foreground/60'}`}>
                {plan.period}
              </span>
            </div>
            <p className={`mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-foreground/70'}`}>
              {plan.description}
            </p>
            <ul className="mb-8 space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <svg 
                    className={`w-5 h-5 mr-2 ${plan.highlighted ? 'text-blue-200' : 'text-blue-500'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              className={`w-full py-3 rounded-lg font-medium transition-colors ${
                plan.highlighted 
                  ? 'bg-white text-blue-600 hover:bg-blue-50' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 