import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Footer = () => {
  const linkGroups = [
    {
      title: 'Platform',
      links: ['Solutions', 'Pricing', 'Security', 'API Docs']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
    },
    {
      title: 'Company',
      links: ['Contact Support', 'Twitter', 'LinkedIn', 'Blog']
    }
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-white to-slate-50 border-t border-slate-200/50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0f1d35] to-[#1a365d] rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Shield className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-xl font-extrabold text-[#0a152e] tracking-tight">TrustScore</span>
            </Link>
            <p className="text-[13px] font-medium text-slate-400 leading-relaxed pr-4">
              The premier metrics platform for the future of work. Build high-performance cultures with data-driven precision.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {linkGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <h4 className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">{group.title}</h4>
                {group.links.map((link) => (
                  <a key={link} href="#" className="text-[13px] font-medium text-slate-500 hover:text-[#0a152e] transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-200/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] font-medium text-slate-400">
            &copy; {new Date().getFullYear()} TrustScore. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-300 font-medium">
            Precision in every metric ⚡
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
