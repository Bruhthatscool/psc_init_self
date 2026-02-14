import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LightLogin } from "@/components/ui/sign-in";
import { LightSignUp } from "@/components/ui/sign-up";
import { Dashboard } from "@/components/dashboard/dashboard";
import { ExamPage } from "@/components/exam/exam-page";

import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [page, setPage] = useState("home");

  if (page === "signin") {
    return (
      <LightLogin
        onSignUpClick={() => setPage("signup")}
        onSuccess={() => navigate("/dashboard")}
      />
    );
  }

  if (page === "signup") {
    return (
      <LightSignUp
        onSignInClick={() => setPage("signin")}
        onSuccess={() => navigate("/dashboard")}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 p-4">
      <h1 className="text-5xl font-bold text-gray-900 mb-12">HOME</h1>
      <div className="flex gap-4">
        <button
          onClick={() => setPage("signin")}
          className="px-8 py-3 bg-linear-to-t from-blue-600 via-blue-500 to-blue-400 hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Sign In
        </button>
        <button
          onClick={() => setPage("signup")}
          className="px-8 py-3 bg-linear-to-t from-green-600 via-green-500 to-green-400 hover:from-green-700 hover:via-green-600 hover:to-green-500 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exam/:id" element={<ExamPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
