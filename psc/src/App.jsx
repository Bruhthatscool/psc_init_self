import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LightLogin } from "@/components/ui/sign-in";
import { LightSignUp } from "@/components/ui/sign-up";
import { Dashboard } from "@/components/dashboard/dashboard";
import { ExamPage } from "@/components/exam/exam-page";

function HomePage() {
  const [currentPage, setCurrentPage] = useState("home");

  if (currentPage === "signin") {
    return <LightLogin onSignUpClick={() => setCurrentPage("signup")} />;
  }

  if (currentPage === "signup") {
    return <LightSignUp onSignInClick={() => setCurrentPage("signin")} />;
  }

  if (currentPage === "dashboard") {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <h1 className="text-5xl font-bold text-gray-900 mb-12">HOME</h1>
      <div className="flex gap-4">
        <button
          onClick={() => setCurrentPage("signin")}
          className="px-8 py-3 bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400 hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Sign In
        </button>
        <button
          onClick={() => setCurrentPage("signup")}
          className="px-8 py-3 bg-gradient-to-t from-green-600 via-green-500 to-green-400 hover:from-green-700 hover:via-green-600 hover:to-green-500 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Sign Up
        </button>
        <button
          onClick={() => setCurrentPage("dashboard")}
          className="px-8 py-3 bg-gradient-to-t from-purple-600 via-purple-500 to-purple-400 hover:from-purple-700 hover:via-purple-600 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Dashboard
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
