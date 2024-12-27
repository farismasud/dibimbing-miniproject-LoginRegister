import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#E8E8E8_0%,_#2E2E2E_100%)] relative overflow-hidden">
      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex flex-col">
        {/* Center content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            One-click for Asset <span className="text-gray-400">Defense</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg text-gray-300 mb-12 max-w-2xl">
            Dive into the art assets, where innovative blockchain technology meets financial expertise
          </p>

          {/* Action buttons */}
          <div className="flex gap-4">
            <Link to="/login" className="px-8 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition-all">
              Sign In →
            </Link>
            <Link to="/register" className="px-8 py-3 rounded-full border bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
              Sign Up →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
