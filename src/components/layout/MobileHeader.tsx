
import { ArrowLeft, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const MobileHeader = ({ title = "System Status" }: { title?: string }) => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#f8fafc] md:hidden flex items-center justify-between px-4 z-40">
      <button 
        onClick={() => navigate(-1)}
        className="p-2 -ml-2 text-[#295b8d]"
      >
        <ArrowLeft size={24} />
      </button>
      <h1 className="text-[#295b8d] font-bold text-lg">{title}</h1>
      <button className="p-2 -mr-2 text-[#295b8d]">
        <MoreVertical size={24} />
      </button>
    </header>
  );
};
