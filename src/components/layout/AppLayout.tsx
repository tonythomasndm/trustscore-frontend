
import { Sidebar } from './Sidebar';
import { MobileHeader } from './MobileHeader';
import { MobileBottomNav } from './MobileBottomNav';

interface AppLayoutProps {
  children: React.ReactNode;
  headerTitle?: string;
  hideMobileNavs?: boolean;
}

export const AppLayout = ({ children, headerTitle = "System Status", hideMobileNavs = false }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      {/* Desktop Sidebar, hidden on mobile */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col md:ml-64 w-full min-h-screen bg-pink-300">
        {/* Mobile Header, hidden on desktop */}
        {!hideMobileNavs && <MobileHeader title={headerTitle} />}

        {/* Main Content Area */}
        <main className={`flex-1 flex flex-col pt-16 md:pt-0 pb-16 md:pb-0 relative overflow-y-auto border`}>
          
           <div className="relative z-10 flex-1 flex flex-col">
            
              {children}
           </div>
        </main>

        {/* Mobile Bottom Nav, hidden on desktop */}
        {!hideMobileNavs && <MobileBottomNav />}
      </div>
    </div>
  );
};
