import React from "react";
import { Code, Smartphone, Globe, Shield, Brain, Layers } from "lucide-react";

function Categories({ onSelectCategory }) {
  const cats = [
    {
      name: "All Books",
      icon: <Layers className="w-8 h-8" />,
      description: "Browse entire collection",
      gradient: "from-blue-500 to-purple-600",
      hoverGradient: "from-blue-600 to-purple-700",
      count: "500+"
    },
    {
      name: "Web Development",
      icon: <Code className="w-8 h-8" />,
      description: "HTML, CSS, JavaScript, React",
      gradient: "from-green-500 to-emerald-600",
      hoverGradient: "from-green-600 to-emerald-700",
      count: "120+"
    },
    {
      name: "Mobile Apps",
      icon: <Smartphone className="w-8 h-8" />,
      description: "iOS, Android, Flutter",
      gradient: "from-pink-500 to-rose-600",
      hoverGradient: "from-pink-600 to-rose-700",
      count: "85+"
    },
    {
      name: "Networking",
      icon: <Globe className="w-8 h-8" />,
      description: "Network protocols, Security",
      gradient: "from-cyan-500 to-blue-600",
      hoverGradient: "from-cyan-600 to-blue-700",
      count: "95+"
    },
    {
      name: "Cybersecurity",
      icon: <Shield className="w-8 h-8" />,
      description: "Ethical hacking, Penetration",
      gradient: "from-red-500 to-orange-600",
      hoverGradient: "from-red-600 to-orange-700",
      count: "75+"
    },
    {
      name: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      description: "Python, TensorFlow, PyTorch",
      gradient: "from-violet-500 to-purple-600",
      hoverGradient: "from-violet-600 to-purple-700",
      count: "110+"
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Explore by Categories
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            Dive into specialized tech domains and find the perfect books for your learning journey
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {cats.map((cat, i) => (
            <div
              key={i}
              onClick={() => onSelectCategory(cat.name === "All Books" ? "All" : cat.name)}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon with animated background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${cat.gradient} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {cat.icon}
                  </div>
                </div>

                {/* Category Info */}
                <div className="space-y-2 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {cat.description}
                  </p>
                </div>

                {/* Book Count */}
                <div className="flex items-center justify-between">
                  <span className={`text-2xl font-bold bg-gradient-to-r ${cat.gradient} bg-clip-text text-transparent`}>
                    {cat.count}
                  </span>
                  <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                    books available
                  </span>
                </div>

                {/* Hover Button Effect */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className={`w-full text-center py-2 px-4 rounded-xl bg-gradient-to-r ${cat.hoverGradient} text-white font-semibold text-sm shadow-lg`}>
                    Explore Category
                  </div>
                </div>
              </div>

              {/* Animated Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 transform translate-x-10 -translate-y-10 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 group-hover:scale-150 transition-transform duration-500" />
              
              {/* Bottom Shimmer Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Can't find what you're looking for? 
            <button className="text-blue-400 hover:text-blue-300 underline transition-colors">
              Request a book
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;