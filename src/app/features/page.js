export default function Features() {
  const features = [
    {
      title: "Modern Design",
      description: "Our platform features a clean, intuitive interface built with the latest design principles. Responsive layouts ensure your experience is seamless across all devices, from mobile phones to desktop computers.",
      icon: "✨"
    },
    {
      title: "Performance First",
      description: "Speed is at the core of everything we build. Our application is optimized for lightning-fast load times and smooth interactions, providing a fluid user experience even under heavy usage.",
      icon: "⚡"
    },
    {
      title: "Developer Experience",
      description: "Built with developers in mind, our platform offers comprehensive documentation, intuitive APIs, and powerful development tools that make extending and customizing the system a breeze.",
      icon: "🛠️"
    },
    {
      title: "Advanced Analytics",
      description: "Gain valuable insights into user behavior with our detailed analytics dashboard. Track key metrics, visualize data trends, and make informed decisions based on real-time information.",
      icon: "📊"
    },
    {
      title: "Enterprise Security",
      description: "Your data's security is our priority. We implement industry-leading security measures, including end-to-end encryption, regular security audits, and compliance with international security standards.",
      icon: "🔒"
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to assist with any questions or issues. Whether through chat, email, or phone, we're committed to providing prompt and helpful assistance.",
      icon: "🌐"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white dark:bg-black/20 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-foreground/70">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 