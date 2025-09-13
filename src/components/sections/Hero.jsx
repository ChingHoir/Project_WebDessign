import { useState, useEffect } from "react";
import { Code, Brain, Database, ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    {
      title: "Master Programming",
      subtitle: "From beginner to expert with our comprehensive collection of programming books",
      cta: "Browse Programming Books",
      gradient: "from-blue-900 via-indigo-900 to-purple-900",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop&q=80",
      accent: "from-blue-400 to-indigo-400",
      icon: Code,
      category: "Programming",
      bookCount: "400+",
    },
    {
      title: "AI & Machine Learning",
      subtitle: "Dive into the future with cutting-edge AI and ML books from industry leaders",
      cta: "Explore AI Collection",
      gradient: "from-emerald-900 via-teal-900 to-cyan-900",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&q=80",
      accent: "from-emerald-400 to-cyan-400",
      icon: Brain,
      category: "Artificial Intelligence",
      bookCount: "250+",
    },
    {
      title: "Data Science & Analytics",
      subtitle: "Transform data into insights with our comprehensive data science library",
      cta: "View Data Books",
      gradient: "from-purple-900 via-pink-900 to-rose-900",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
      accent: "from-purple-400 to-pink-400",
      icon: Database,
      category: "Data Science",
      bookCount: "180+",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 7000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient} transition-all duration-1000`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isLoaded ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium">
                <IconComponent className="w-4 h-4" />
                <span>{currentSlideData.category}</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs">{currentSlideData.bookCount} Books</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                <span className="block">{currentSlideData.title.split(" ")[0]}</span>
                <span
                  className={`block bg-gradient-to-r ${currentSlideData.accent} bg-clip-text text-transparent`}
                >
                  {currentSlideData.title.split(" ").slice(1).join(" ")}
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-lg mx-auto lg:mx-0">
                {currentSlideData.subtitle}
              </p>

              <button className="mt-4 sm:mt-6 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow hover:bg-gray-100 transition">
                {currentSlideData.cta}
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src={currentSlideData.image}
                alt={`${currentSlideData.category} books`}
                className="w-full h-[220px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              currentSlide === index
                ? "w-8 md:w-12 h-2 md:h-3 bg-white"
                : "w-2 md:w-3 h-2 md:h-3 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Nav Arrows (hidden on mobile) */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>
    </section>
  );
};

export default Hero;
