import React, { useEffect, useState, useMemo, useCallback } from "react";
import {
  ShoppingCart,
  Search,
  BookOpen,
  Loader2,
  AlertCircle,
  RefreshCw,
  Code,
  Smartphone,
  Globe,
  Shield,
  Brain,
  Layers,
  Filter,
} from "lucide-react";

const Categories = ({ selectedCategory, onSelectCategory }) => {
  const cats = [
    {
      name: "All Books",
      icon: <Layers className="w-8 h-8" />,
      description: "Browse entire collection",
      gradient: "from-blue-500 to-purple-600",
      hoverGradient: "from-blue-600 to-purple-700",
      count: "500+",
    },
    {
      name: "Web Development",
      icon: <Code className="w-8 h-8" />,
      description: "HTML, CSS, JavaScript, React",
      gradient: "from-green-500 to-emerald-600",
      hoverGradient: "from-green-600 to-emerald-700",
      count: "120+",
    },
    {
      name: "Mobile Apps",
      icon: <Smartphone className="w-8 h-8" />,
      description: "iOS, Android, Flutter",
      gradient: "from-pink-500 to-rose-600",
      hoverGradient: "from-pink-600 to-rose-700",
      count: "85+",
    },
    {
      name: "Networking",
      icon: <Globe className="w-8 h-8" />,
      description: "Network protocols, Security",
      gradient: "from-cyan-500 to-blue-600",
      hoverGradient: "from-cyan-600 to-blue-700",
      count: "95+",
    },
    {
      name: "Cybersecurity",
      icon: <Shield className="w-8 h-8" />,
      description: "Ethical hacking, Penetration",
      gradient: "from-red-500 to-orange-600",
      hoverGradient: "from-red-600 to-orange-700",
      count: "75+",
    },
    {
      name: "AI & Machine Learning",
      icon: <Brain className="w-8 h-8" />,
      description: "Python, TensorFlow, PyTorch",
      gradient: "from-violet-500 to-purple-600",
      hoverGradient: "from-violet-600 to-purple-700",
      count: "110+",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Explore by Categories
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            Find the perfect books for your learning journey
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {cats.map((cat, i) => {
            const isSelected =
              selectedCategory ===
              (cat.name === "All Books" ? "All" : cat.name);
            return (
              <div
                key={i}
                onClick={() =>
                  onSelectCategory(cat.name === "All Books" ? "All" : cat.name)
                }
                className={`group relative overflow-hidden backdrop-blur-sm border rounded-xl p-3 md:p-4 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl ${
                  isSelected
                    ? `bg-gradient-to-br ${cat.gradient} border-blue-400 shadow-blue-500/25`
                    : "bg-gray-800/90 border-gray-700/50 hover:border-blue-500/50"
                }`}
              >
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl mb-2 transition-all duration-300 ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : `bg-gradient-to-r ${cat.gradient} text-white group-hover:scale-110`
                    }`}
                  >
                    {React.cloneElement(cat.icon, {
                      className: "w-5 h-5 md:w-6 md:h-6",
                    })}
                  </div>

                  {/* Category Name */}
                  <h3
                    className={`text-xs md:text-sm font-semibold transition-colors duration-300 ${
                      isSelected
                        ? "text-white"
                        : "text-white group-hover:text-blue-300"
                    }`}
                  >
                    {cat.name}
                  </h3>
                </div>

                {/* Selected indicator */}
                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ShopPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]); // ✅ new state for cart items
  const [imageErrors, setImageErrors] = useState(new Set());

  // Categorization logic
  const categorizeBook = (book) => {
    const title = book.title.toLowerCase();
    const author = book.authorName.toLowerCase();
    const combined = `${title} ${author}`;

    if (
      combined.includes("web") ||
      combined.includes("html") ||
      combined.includes("css") ||
      combined.includes("javascript") ||
      combined.includes("react") ||
      combined.includes("vue") ||
      combined.includes("angular") ||
      combined.includes("frontend") ||
      combined.includes("backend")
    ) {
      return "Web Development";
    }
    if (
      combined.includes("mobile") ||
      combined.includes("android") ||
      combined.includes("ios") ||
      combined.includes("flutter") ||
      combined.includes("react native") ||
      combined.includes("swift") ||
      combined.includes("kotlin")
    ) {
      return "Mobile Apps";
    }
    if (
      combined.includes("network") ||
      combined.includes("tcp") ||
      combined.includes("ip") ||
      combined.includes("routing") ||
      combined.includes("cisco") ||
      combined.includes("protocol")
    ) {
      return "Networking";
    }
    if (
      combined.includes("security") ||
      combined.includes("hack") ||
      combined.includes("penetration") ||
      combined.includes("cyber") ||
      combined.includes("ethical") ||
      combined.includes("vulnerability")
    ) {
      return "Cybersecurity";
    }
    if (
      combined.includes("ai") ||
      combined.includes("machine learning") ||
      combined.includes("ml") ||
      combined.includes("artificial intelligence") ||
      combined.includes("neural") ||
      combined.includes("deep learning") ||
      combined.includes("tensorflow") ||
      combined.includes("pytorch") ||
      combined.includes("data science")
    ) {
      return "AI & Machine Learning";
    }
    return "Web Development"; // Default
  };

  // Fetch books
  const fetchBooks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const res = await fetch(
        "https://openlibrary.org/subjects/computer_science.json?limit=100&details=false",
        {
          signal: controller.signal,
          headers: {
            Accept: "application/json",
          },
        }
      );

      clearTimeout(timeoutId);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      const processedBooks = (data.works || []).map((book) => ({
        ...book,
        id: book.key || Math.random().toString(36).substr(2, 9),
        price: Math.floor(Math.random() * 50) + 15,
        rating: (Math.random() * 2 + 3).toFixed(1),
        authorName: book.authors?.[0]?.name || "Unknown Author",
        publishYear: book.first_publish_year || "N/A",
      }));

      const categorizedBooks = processedBooks.map((book) => ({
        ...book,
        category: categorizeBook(book),
      }));

      setBooks(categorizedBooks);
    } catch (err) {
      console.error("Error fetching books:", err);
      setError(
        err.name === "AbortError"
          ? "Request timeout. Please try again."
          : "Failed to load books. Please check your connection."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  // Filtering
  const filteredBooks = useMemo(() => {
    let filtered = books;
    if (selectedCategory !== "All") {
      filtered = filtered.filter((book) => book.category === selectedCategory);
    }
    if (search.trim()) {
      const searchTerm = search.toLowerCase();
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm) ||
          book.authorName.toLowerCase().includes(searchTerm) ||
          book.category.toLowerCase().includes(searchTerm)
      );
    }
    return filtered;
  }, [books, search, selectedCategory]);

  const visibleBooks = useMemo(
    () => filteredBooks.slice(0, visibleCount),
    [filteredBooks, visibleCount]
  );

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => prev + 12);
  }, []);

  // ✅ updated addToCart
  const addToCart = useCallback((book) => {
    setCartCount((prev) => prev + 1);
    setCartItems((prev) => [...prev, book]); // add full book object

    const button = document.querySelector(`[data-book-id="${book.id}"]`);
    if (button) {
      button.style.transform = "scale(0.95)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 150);
    }
  }, []);

  const handleImageError = useCallback((bookId) => {
    setImageErrors((prev) => new Set([...prev, bookId]));
  }, []);

  const handleRetry = useCallback(() => {
    setImageErrors(new Set());
    fetchBooks();
  }, [fetchBooks]);

  const handleCategorySelect = useCallback((category) => {
    setSelectedCategory(category);
    setVisibleCount(12);
    setSearch("");
  }, []);

  const clearFilters = useCallback(() => {
    setSelectedCategory("All");
    setSearch("");
    setVisibleCount(12);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
          <p className="text-white text-lg">Loading amazing IT books...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-white text-xl font-bold mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <button
            onClick={handleRetry}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Navbar */}
      <header className="bg-black/80 backdrop-blur-lg border-b border-gray-700 sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-blue-400" />
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ETEC Premium Collection
              </h1>
            </div>

            <div className="flex-1 max-w-md mx-4 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search books, authors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 rounded-xl px-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <button className="relative p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-200">
              <ShoppingCart className="w-6 h-6 text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Categories Section */}
      <Categories
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Active Filters */}
        <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-4">
            {(selectedCategory !== "All" || search) && (
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Filters active:</span>
                {selectedCategory !== "All" && (
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {selectedCategory}
                  </span>
                )}
                {search && (
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    "{search}"
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="text-xs text-gray-400 hover:text-white underline ml-2"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          {filteredBooks.length > 0 && (
            <div className="text-blue-400 font-semibold text-sm">
              {filteredBooks.length} books found
            </div>
          )}
        </div>

        {/* No Results */}
        {filteredBooks.length === 0 &&
          (search || selectedCategory !== "All") && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg mb-2">
                No books found{" "}
                {selectedCategory !== "All" && `in ${selectedCategory}`}
                {search && ` matching "${search}"`}
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Clear filters and browse all books
              </button>
            </div>
          )}

        {/* Books Grid */}
        {visibleBooks.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {visibleBooks.map((book) => (
                <div
                  key={book.id}
                  className="group relative bg-gradient-to-b from-gray-800/90 to-gray-900/90 rounded-2xl p-4 md:p-6 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transform hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  {/* Category Badge */}
                  <div className="absolute top-2 left-2 bg-blue-500/20 text-blue-300 px-2 py-1 rounded-lg text-xs font-medium">
                    {book.category}
                  </div>

                  {/* Book Cover */}
                  <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4] bg-gray-800">
                    {imageErrors.has(book.id                    ) ? (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800">
                        <BookOpen className="w-12 h-12 text-gray-500" />
                      </div>
                    ) : (
                      <img
                        src={
                          book.cover_id
                            ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
                            : `https://via.placeholder.com/200x300/1f2937/60a5fa?text=${encodeURIComponent(
                                book.title.slice(0, 20)
                              )}`
                        }
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={() => handleImageError(book.id)}
                        loading="lazy"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                      ★ {book.rating}
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-base md:text-lg text-blue-300 line-clamp-2 group-hover:text-blue-200 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-400 truncate">{book.authorName}</p>
                    {book.publishYear !== "N/A" && (
                      <p className="text-xs text-gray-500">Published: {book.publishYear}</p>
                    )}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xl font-bold text-green-400">${book.price}</span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    data-book-id={book.id}
                    onClick={() => addToCart(book)}
                    className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2.5 rounded-xl transition-all duration-200 transform active:scale-95 shadow-lg hover:shadow-xl"
                  >
                    Add to Cart
                  </button>

                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredBooks.length && (
              <div className="text-center mt-8 md:mt-12">
                <button
                  onClick={loadMore}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Load More Books ({filteredBooks.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </>
        )}

        {/* Cart Section */}
        {/* Cart Section */}
{cartItems.length > 0 && (
  <section className="mt-12">
    <h2 className="text-xl font-bold mb-4">🛒 Your Cart ({cartItems.length})</h2>
    <div className="space-y-4">
      {cartItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-gray-800/70 p-3 rounded-lg"
        >
          <div>
            <h3 className="font-semibold text-blue-300">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.authorName}</p>
          </div>
          <span className="font-bold text-green-400">${item.price}</span>
        </div>
      ))}
    </div>

    {/* Place Order Button */}
    <div className="text-right mt-4">
      <button
        onClick={() => {
          alert(`Your order for ${cartItems.length} book(s) has been placed! 🎉`);
          setCartItems([]);
          setCartCount(0);
        }}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        Place Order
      </button>
    </div>
  </section>
)}

      </main>
    </div>
  );
};

export default ShopPage;

