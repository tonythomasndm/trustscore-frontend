import React from "react";
import { Mail, Lock, Eye, ArrowRight, Activity } from "lucide-react";

const LoginForm: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 sm:px-16 md:px-20 lg:px-28 relative h-full bg-white md:bg-transparent">
      {/* Mobile Header */}
      <div className="md:hidden flex flex-col items-center justify-center mb-10 mt-8">
        <div className="w-16 h-16 bg-[#021438] rounded-2xl flex items-center justify-center mb-5 shadow-lg">
          <Activity className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Analytical Architect
        </h1>
        <p className="text-gray-500 text-sm">Step into the Precision Lens</p>
      </div>

      <div className="w-full max-w-md mx-auto flex-1 flex flex-col justify-center">
        {/* Desktop Header */}
        <div className="hidden md:block mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-[15px]">
            Enter your credentials to access your dashboard.
          </p>
        </div>

        <form className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold text-gray-500 tracking-wider uppercase">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-[18px] w-[18px] text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full pl-11 pr-4 py-3.5 bg-gray-100 border-none rounded-xl text-[15px] focus:ring-2 focus:ring-[#021438] focus:bg-white transition-colors placeholder-gray-400 font-medium"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-bold text-gray-500 tracking-wider uppercase">
                Password
              </label>
              <a
                href="#"
                className="text-[13px] font-bold text-[#0066ff] hover:text-blue-800 transition-colors"
              >
                forgot Password?
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-[18px] w-[18px] text-gray-400" />
              </div>
              <input
                type="password"
                defaultValue="password123"
                className="w-full pl-11 pr-12 py-3.5 bg-gray-100 border-none rounded-xl text-[15px] focus:ring-2 focus:ring-[#021438] focus:bg-white transition-colors font-medium tracking-widest text-gray-700"
              />
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                >
                  <Eye className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Keep logged in */}
          <div className="hidden md:flex items-center pt-2">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-[#021438] focus:ring-[#021438] border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-700 font-medium"
            >
              Keep me logged in for 30 days
            </label>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-xl shadow-sm text-[15px] font-semibold text-white bg-[#021438] hover:bg-[#0a2055] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#021438] transition-colors mt-8"
          >
            Log In
            <span className="md:hidden">
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>
        </form>

        <div className="mt-10">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-[13px]">
              <span className="px-4 bg-white text-gray-400 font-semibold uppercase tracking-wider">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <button
              type="button"
              className="w-full flex justify-center items-center gap-2 py-3.5 px-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="hidden md:inline font-semibold text-[14px] text-gray-900">
                Google
              </span>
            </button>
            <button
              type="button"
              className="w-full flex justify-center items-center gap-2 py-3.5 px-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100"
            >
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.hPHUw5U6pWGinEcSVsTIsgHaHa?pid=Api&P=0&h=180"
                alt="Office 365"
                className="w-5 h-5"
              />
              <span className="hidden md:inline font-semibold text-[14px] text-gray-900">
                Office 365
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[15px] text-gray-600 font-medium">
            <span className="md:hidden">Don't have an account? </span>
            <span className="hidden md:inline">New to the platform? </span>
            <a
              href="#"
              className="font-bold text-[#021438] hover:text-blue-800 transition-colors"
            >
              <span className="md:hidden">Sign Up</span>
              <span className="hidden md:inline">Create an account</span>
            </a>
          </p>
        </div>

        {/* Desktop Copyright */}
        <div className="hidden md:block mt-auto pt-16 text-center">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © 2024 ANALYTICAL ARCHITECT. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;