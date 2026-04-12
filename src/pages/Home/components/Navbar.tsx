import { useState, useEffect } from "react";
import { Menu, X, LogOut, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("U");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
      try {
        const parsed = JSON.parse(user);
        setUserName(parsed?.name || parsed?.email || "U");
      } catch {
        setUserName(user);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className={`w-full sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/40 border-b border-slate-100/50' 
        : 'bg-transparent'
    }`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center flex-shrink-0 gap-2.5 cursor-pointer group"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-[#0f1d35] to-[#1a365d] rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:shadow-blue-900/30 transition-shadow">
              <Shield className="w-4.5 h-4.5 text-blue-400" />
            </div>
            <span className="text-xl font-extrabold text-[#0a152e] tracking-tight">
              TrustScore
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { label: "How it works", href: "#how-it-works" },
              { label: "Solutions", href: "#solutions" },
              { label: "Pricing", href: "#pricing" },
              { label: "Resources", href: "#resources" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-500 hover:text-[#0a152e] px-4 py-2 rounded-lg hover:bg-slate-50 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="relative flex items-center gap-4">
                <div
                  className="cursor-pointer"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <div className="w-9 h-9 bg-gradient-to-br from-[#1a365d] to-[#2b5a9e] text-white rounded-xl flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 transition-all hover:scale-105">
                    {userName.charAt(0).toUpperCase()}
                  </div>
                </div>

                {isProfileOpen && (
                  <div className="absolute right-0 top-12 w-36 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-xl shadow-2xl z-[100] py-1.5 animate-fade-in-up">
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2.5 px-4 py-2.5 w-full text-red-500 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-r from-[#1a365d] to-[#2b5a9e] text-white px-6 py-2.5 rounded-xl hover:from-[#122b4f] hover:to-[#1e4a8a] font-semibold text-sm transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 hover:-translate-y-0.5 active:scale-95"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-800 p-2 hover:bg-slate-100 rounded-xl transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-4 pb-6 pt-2 animate-fade-in-up shadow-xl">
          {[
            { label: "How it works", href: "#how-it-works" },
            { label: "Solutions", href: "#solutions" },
            { label: "Pricing", href: "#pricing" },
            { label: "Resources", href: "#resources" }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 px-3 text-sm font-medium text-slate-600 hover:text-[#0a152e] hover:bg-slate-50 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}

          {isLoggedIn ? (
            <>
              <button
                onClick={() => navigate("/connect")}
                className="w-full mt-4 bg-slate-100 hover:bg-slate-200 py-3 rounded-xl text-sm font-semibold transition-colors"
              >
                Analysis
              </button>
              <button
                onClick={handleLogout}
                className="w-full mt-2 bg-red-50 text-red-600 py-3 rounded-xl text-sm font-semibold hover:bg-red-100 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="block mt-4 text-center bg-gradient-to-r from-[#1a365d] to-[#2b5a9e] text-white py-3 rounded-xl font-semibold text-sm"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;