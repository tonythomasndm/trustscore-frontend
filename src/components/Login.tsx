import React from "react";
import LeftPanel from "./LeftPanel";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex bg-[#e8eff5] items-center justify-center p-0 md:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-[1200px] bg-gradient-to-b from-white to-[#dcedfb] md:bg-white md:bg-none min-h-screen md:min-h-[800px] md:h-[800px] md:rounded-[2rem] shadow-2xl flex flex-col md:flex-row overflow-hidden relative">
        
        <LeftPanel />
        <LoginForm />

      </div>
    </div>
  );
};

export default Login;