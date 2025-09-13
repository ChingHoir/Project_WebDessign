import React, { useState, useEffect } from 'react';
import { Phone, PhoneOff, Mic, MicOff, Video, VideoOff, MessageCircle } from 'lucide-react';
import ImageSrc3 from '../img/image3.png';
export default function CallComponent() {
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    alert('Call ended');
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        {/* Main Call Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white shadow-2xl border border-white/20">
          
          {/* Status Indicator */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Connecting...
            </div>
          </div>

          {/* Avatar Section */}
          <div className="text-center mb-6">
            <div className="relative inline-block">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold mb-4 mx-auto">
              <img src={ImageSrc3} alt="" className=" w-35 h-35 mx-auto rounded-full object-cover mb-4 border-4 border-white/20"/>
              </div>
              {/* Animated Ring */}
              <div className="absolute inset-0 w-32 h-32 border-4 border-white/30 rounded-full animate-ping"></div>
              <div className="absolute inset-2 w-28 h-28 border-2 border-white/50 rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-2xl font-bold mb-1">Service</h2>
            <p className="text-white/70">+855 92 994 789</p>
          </div>

          {/* Call Duration */}
          <div className="text-center mb-8">
            <div className="text-3xl font-mono font-bold text-white/90">
              {formatTime(callDuration)}
            </div>
            <p className="text-white/60 text-sm mt-1">Call duration</p>
          </div>

          {/* Control Buttons */}
          <div className="flex justify-center items-center gap-4 mb-6">
            {/* Mute Button */}
            <button
              onClick={toggleMute}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 ${
                isMuted 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
            </button>

            {/* End Call Button */}
            <button
              onClick={handleEndCall}
              className="w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-105"
            >
              <PhoneOff size={28} />
            </button>

            {/* Video Toggle Button */}
            <button
              onClick={toggleVideo}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 ${
                !isVideoOn 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              {isVideoOn ? <Video size={24} /> : <VideoOff size={24} />}
            </button>
          </div>

          {/* Additional Actions */}
          <div className="flex justify-center">
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-200">
              <MessageCircle size={20} />
              <span className="text-sm font-medium">Message</span>
            </button>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-6 text-white/60">
          <p className="text-sm">Waiting for SerVice to join the call...</p>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
}