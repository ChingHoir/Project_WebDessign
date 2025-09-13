import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Check, BookOpen, Users, Award, HeartHandshake } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '', subject: 'general' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Book Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BookOpen className="absolute top-20 left-10 w-12 h-12 text-blue-300 opacity-20 animate-bounce animation-delay-1000" />
        <BookOpen className="absolute top-40 right-20 w-8 h-8 text-purple-400 opacity-30 animate-bounce animation-delay-2000" />
        <BookOpen className="absolute bottom-40 left-1/4 w-10 h-10 text-indigo-300 opacity-25 animate-bounce animation-delay-3000" />
        <BookOpen className="absolute bottom-20 right-10 w-14 h-14 text-blue-400 opacity-20 animate-bounce animation-delay-4000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <BookOpen className="w-16 h-16 text-blue-600" />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              ទំនាក់ទំនងមកកាន់យើង
            </h2>
            <BookOpen className="w-16 h-16 text-purple-600" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ស្វែងរកសៀវភៅល្អបំផុត? យើងនៅទីនេះដើម្បីជួយអ្នករកសៀវភៅដែលអ្នកត្រូវការ
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                { icon: Phone, label: "ទូរសព្ទ", value: "+855 92 994 789", desc: "សម្រាប់ការកម្មង់សៀវភៅ", color: "from-blue-500 to-blue-600" },
                { icon: Mail, label: "អ៊ីមែល", value: "ETECPRIMIUMCOLLECTION@itbookstore.com", desc: "សំណួរអំពីសៀវភៅ", color: "from-purple-500 to-purple-600" },
                { icon: MapPin, label: "ហាងសៀវភៅ", value: "Phnom Penh, Cambodia", desc: "មកទិញដោយផ្ទាល់", color: "from-indigo-500 to-indigo-600" },
                { icon: Clock, label: "ម៉ោងបើកហាង", value: "ចន្ទ - សុក្រ: 8AM - 6PM", desc: "រៀងរាល់ថ្ងៃ", color: "from-blue-600 to-purple-600" }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">{item.label}</p>
                        <p className="text-gray-800 font-semibold text-lg">{item.value}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Our Bookstore */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10">
                <BookOpen className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">ហេតុអ្វីត្រូវជ្រើសរើសហាងសៀវភៅយើង?</h3>
              <ul className="space-y-3 relative z-10">
                {[
                  { icon: BookOpen, text: "សៀវភៅចំនួន ១០,០០០+ ក្បាល" },
                  { icon: Users, text: "ការសេវាកម្មពីជំនាញការ" },
                  { icon: Award, text: "សៀវភៅគុណភាពល្អបំផុត" },
                  { icon: HeartHandshake, text: "តម្លៃសមរម្យ ការដឹកជញ្ជូនលឿន" }
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-blue-200" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-200">
              <div className="text-center mb-6">
                <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900">ផ្ញើសំណួរអំពីសៀវភៅ</h3>
                <p className="text-gray-600">យើងនឹងជួយអ្នករកសៀវភៅដែលអ្នកចង់បាន</p>
              </div>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-gray-100 border border-gray-300 rounded-xl">
                  <div className="flex items-center gap-2 text-gray-800">
                    <Check className="w-5 h-5" />
                    <span className="font-medium">សារត្រូវបានផ្ញើដោយជោគជ័យ! យើងនឹងឆ្លើយតបក្នុងរយៈពេល ២៤ ម៉ោង</span>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">ឈ្មោះរបស់អ្នក</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="បញ្ចូលឈ្មោះរបស់អ្នក"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">អ៊ីមែលរបស់អ្នក</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">ប្រធានបទ</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  >
                    <option value="general">សំណួរទូទៅ</option>
                    <option value="book-inquiry">ស្វែងរកសៀវភៅ</option>
                    <option value="order">ការកម្មង់សៀវភៅ</option>
                    <option value="recommendation">ការណែនាំសៀវភៅ</option>
                    <option value="bulk-order">ការកម្មង់ចំនួនច្រើន</option>
                  </select>
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">សារ / ឈ្មោះសៀវភៅដែលត្រូវការ</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm"
                    placeholder="សរសេរអំពីសៀវភៅដែលអ្នកកំពុងស្វែងរក ឬសំណួរផ្សេងៗ..."
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                  } text-white flex items-center justify-center gap-2`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>កំពុងផ្ញើ...</span>
                    </>
                  ) : (
                    <>
                      <BookOpen className="w-5 h-5" />
                      <span>ផ្ញើសំណួរ</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>


      </div>

      <style jsx>{`
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-3000 { animation-delay: 3s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default Contact;