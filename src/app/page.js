import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-[#f5f5f7] dark:from-background dark:to-[#111]">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Build Something Amazing
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl text-foreground/80 mb-10">
            The modern platform for building beautiful, responsive websites with the latest technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/signup"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors text-center"
            >
              Get Started
            </Link>
            <Link
              href="/features"
              className="px-8 py-3 rounded-full border border-foreground/20 hover:bg-foreground/5 font-medium transition-colors text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="relative h-[400px] sm:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-10"></div>
          <Image 
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2812&auto=format&fit=crop"
            alt="Dashboard Preview"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Modern Design",
              description: "Beautiful, responsive UI components right out of the box.",
              icon: "✨",
            },
            {
              title: "Performance First",
              description: "Lightning fast page loads and smooth user experiences.",
              icon: "⚡",
            },
            {
              title: "Developer Experience",
              description: "Intuitive APIs and tools that make development a joy.",
              icon: "🛠️",
            },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-black/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/features"
            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
          >
            View all features
            <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-blue-50 dark:bg-blue-950/30 rounded-2xl p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "This platform has completely transformed our workflow. Couldn't be happier with the results!",
                author: "Alex Johnson",
                role: "Product Manager",
              },
              {
                quote: "The speed and reliability of this solution have exceeded our expectations. Truly impressive.",
                author: "Sam Taylor",
                role: "Tech Lead",
              },
              {
                quote: "Implementing this into our stack was the best decision we made this year. Game changer!",
                author: "Jordan Lee",
                role: "CEO",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-black/40 p-6 rounded-xl shadow-sm">
                <p className="text-foreground/80 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg max-w-2xl mx-auto text-foreground/80 mb-8">
            Join thousands of developers and businesses building amazing products.
          </p>
          <Link
            href="/signup"
            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors inline-block"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-foreground/10">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-semibold text-lg">Your Company</p>
              <p className="text-sm text-foreground/60">© 2024. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link href="/about" className="text-foreground/70 hover:text-foreground transition-colors">About</Link>
              <Link href="/features" className="text-foreground/70 hover:text-foreground transition-colors">Features</Link>
              <Link href="/pricing" className="text-foreground/70 hover:text-foreground transition-colors">Pricing</Link>
              <Link href="/contact" className="text-foreground/70 hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
