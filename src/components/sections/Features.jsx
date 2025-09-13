import { Truck, Headphones, Shield } from "lucide-react";

function Features() {
  const features = [
    { 
      icon: Truck, 
      title: "Lightning Fast Delivery", 
      text: "Get your books delivered in record time with our premium shipping network.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      delay: "0ms"
    },
    { 
      icon: Headphones, 
      title: "24/7 Expert Support", 
      text: "Our dedicated team of book enthusiasts is always ready to assist you.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      delay: "100ms"
    },
    { 
      icon: Shield, 
      title: "Bank-Level Security", 
      text: "Advanced encryption ensures your payments and data remain completely secure.",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      delay: "200ms"
    },
  ];

  return (
    <section className="relative px-6 sm:px-10 lg:px-20 xl:px-40 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-50 via- to-blue-100"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-black-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Why Choose Us?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, i) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={i}
                className="group relative"
                style={{ animationDelay: feature.delay }}
              >
                {/* Card */}
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden`}>
                  
                  {/* Floating orb effect */}
                  <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Icon container */}
                  <div className={`relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {feature.text}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom accent */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-gray-700 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

export default Features;