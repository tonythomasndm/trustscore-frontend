import React from "react";
import { Activity, TrendingUp } from "lucide-react";

const LeftPanel: React.FC = () => {
  return (
    <div className="hidden md:flex md:w-1/2 bg-[#021438] text-white p-16 flex-col justify-between relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,_#0a2865_0%,_transparent_50%)] opacity-80 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_100%_100%,_#0e3e9c_0%,_transparent_60%)] opacity-40 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-24">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <Activity className="w-6 h-6 text-[#021438]" />
          </div>
          <span className="text-xl font-semibold tracking-wide">
            Analytical Architect
          </span>
        </div>

        <h1 className="text-[3.5rem] leading-[1.1] font-bold mb-6">
          Precision in every<br />decision.
        </h1>

        <p className="text-blue-200/80 text-lg max-w-md leading-relaxed">
          Access high-fidelity data storytelling and strategic insights.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm mt-12">
        <p className="text-xs font-bold tracking-widest text-blue-200/70 mb-2 uppercase">
          Weekly Momentum
        </p>

        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-bold mb-2">+24.8%</h2>
            <div className="flex items-center text-sm text-blue-200/80 gap-1.5">
              <TrendingUp className="w-4 h-4" />
              <span>Outperforming target by 12 points</span>
            </div>
          </div>

          <div className="flex items-end gap-1.5 h-12">
            <div className="w-3 bg-white/20 h-1/3 rounded-t-sm"></div>
            <div className="w-3 bg-white/40 h-2/3 rounded-t-sm"></div>
            <div className="w-3 bg-white/60 h-1/2 rounded-t-sm"></div>
            <div className="w-3 bg-[#60a5fa] h-full rounded-t-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;