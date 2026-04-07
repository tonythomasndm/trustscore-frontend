import LoginForm from "../../components/widgets/LoginForm";
import LeftPanel from "../../components/widgets/LeftPanel";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen w-full bg-gradient-to-b from-slate-50 via-[#f1f5f9] to-[#cce2f5] lg:bg-none lg:bg-white antialiased selection:bg-blue-200">

      {/* LEFT SIDE (DESKTOP) / HIDDEN (MOBILE) */}
      <div className="hidden lg:block w-full lg:w-1/2 flex-shrink-0 lg:h-full lg:overflow-y-auto">
        <LeftPanel />
      </div>

      {/* RIGHT SIDE (FORM) */}
      <div className="flex w-full lg:w-1/2 flex-grow lg:h-full lg:overflow-y-auto pt-6 lg:pt-0">
        <LoginForm />
      </div>

    </div>
  );
};

export default Login;