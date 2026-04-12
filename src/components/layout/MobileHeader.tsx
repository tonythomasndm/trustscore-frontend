
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const MobileHeader = ({ title = "System Status" }: { title?: string }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b md:hidden">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="inline-flex items-center justify-center w-10 h-10 text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
        aria-label="Go back"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <h1 className="text-sm font-semibold text-slate-900">{title}</h1>
      <div className="w-10 h-10" aria-hidden="true" />
    </div>
  );
};
