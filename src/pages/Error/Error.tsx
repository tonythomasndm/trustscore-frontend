import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <div className="flex-1 flex items-center justify-center px-4 bg-[#f8fafc] min-h-[calc(100vh-8rem)] md:min-h-screen">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent blur-2xl opacity-40 rounded-3xl"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-[#1e4a7a] rounded-full flex items-center justify-center mb-6 shadow-md">
              <span className="text-white text-3xl font-bold">!</span>
            </div>

            <h2 className="text-2xl font-bold text-[#1e293b] mb-3">
              Something went wrong
            </h2>

            <p className="text-[#64748b] text-sm mb-6">
              Unable to connect to the server. Please try again.
            </p>

            <div className="w-full flex flex-col space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full py-3 bg-[#1e4a7a] hover:bg-[#163a61] text-white rounded-xl font-semibold transition"
              >
                Try Again
              </button>

              <button
                onClick={() => navigate('/dashboard')}
                className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-[#1e4a7a] rounded-xl font-semibold transition md:hidden"
              >
                Go Back to Dashboard
              </button>
            </div>

            <div className="mt-6 px-4 py-2 bg-gray-100 rounded-full text-xs font-semibold text-gray-600">
              ERROR CODE: ERR_CONN_052
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
