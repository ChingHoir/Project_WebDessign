import { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, BookOpen, Github } from "lucide-react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const toggleAuthMode = () => setIsLogin(!isLogin);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in:", formData);
    } else {
      console.log("Signing up:", formData);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  // Google Icon Component
  const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );

  // Facebook Icon Component
  const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-300 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${12 + Math.random() * 8}px`
            }}
          >
            {i % 3 === 0 ? '📚' : i % 3 === 1 ? '💻' : '⚡'}
          </div>
        ))}
      </div>

      <div className="w-full max-w-md lg:max-w-lg relative z-10">
        <div className="bg-white/80 backdrop-blur-xl border border-blue-200/50 rounded-3xl p-6 sm:p-8 shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-200/30">
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-20 blur-sm -z-10 animate-pulse"></div>
          
          {/* Header with bookstore branding */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
              {isLogin ? "Welcome Back" : "Join Our Store"}
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              {isLogin 
                ? "Access your IT bookstore account" 
                : "Create account for exclusive tech books"
              }
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => handleSocialLogin('Google')}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 hover:border-blue-300 rounded-xl text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:shadow-md group"
              >
                <GoogleIcon />
                <span className="hidden sm:inline">Google</span>
              </button>
              
              <button
                onClick={() => handleSocialLogin('GitHub')}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 hover:border-blue-300 rounded-xl text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:shadow-md group"
              >
                <Github className="w-5 h-5" />
                <span className="hidden sm:inline">GitHub</span>
              </button>
              
              <button
                onClick={() => handleSocialLogin('Facebook')}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 hover:border-blue-300 rounded-xl text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:shadow-md group"
              >
                <FacebookIcon />
                <span className="hidden sm:inline">Facebook</span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <span className="px-4 text-gray-500 text-sm">or continue with email</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {!isLogin && (
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 z-10" size={20} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white/70 border-2 border-blue-200 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300"
                  />
                </div>
              </div>
            )}

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 z-10" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white/70 border-2 border-blue-200 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300"
                />
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 z-10" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-3 sm:py-4 bg-white/70 border-2 border-blue-200 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700 transition-colors duration-200 z-10"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full relative group overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center gap-3 py-3 sm:py-4 px-6 text-white font-semibold text-base sm:text-lg">
                <span>{isLogin ? "Sign In to Store" : "Create Account"}</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </button>
          </div>

          {/* Forgot Password (only show on login) */}
          {isLogin && (
            <div className="text-center mt-4">
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline transition-colors duration-200">
                Forgot your password?
              </button>
            </div>
          )}

          {/* Toggle Auth Mode */}
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm mb-3">
              {isLogin ? "New to our bookstore?" : "Already have an account?"}
            </p>
            <button
              onClick={toggleAuthMode}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 hover:border-blue-300 text-blue-600 hover:text-blue-700 font-medium transition-all duration-300 group"
            >
              <span>{isLogin ? "Create Account" : "Sign In"}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Footer text */}
          <div className="text-center mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              By continuing, you agree to our{" "}
              <button className="text-blue-600 hover:underline">Terms of Service</button>
              {" "}and{" "}
              <button className="text-blue-600 hover:underline">Privacy Policy</button>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.2;
          }
          33% { 
            transform: translateY(-10px) rotate(120deg); 
            opacity: 0.3;
          }
          66% { 
            transform: translateY(5px) rotate(240deg); 
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
};

export default AuthForm;