import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ROUTES } from "../constants";

// Lazy loading
const Login = lazy(() => import("../pages/auth/Login"));
const Signup = lazy(() => import("../pages/auth/Signup"));
const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword"));
const Profile = lazy(() => import("../pages/Profile/Profile"));

// Optional loader
const Loader = () => <div>Loading...</div>;

const Router = () => {
  const isAuthenticated = false; // TODO: replace with auth context

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Default redirect */}
          <Route path="/" element={<Navigate to={ROUTES.SIGNUP} replace />} />

          {/* Public Routes */}
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGNUP} element={<Signup />} />
          <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />

          {/* Protected Routes */}
          <Route
            path={ROUTES.PROFILE}
            element={
              isAuthenticated ? (
                <Profile />
              ) : (
                <Navigate to={ROUTES.LOGIN} replace />
              )
            }
          />

          {/* Catch all */}
          <Route path="*" element={<Navigate to={ROUTES.SIGNUP} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
