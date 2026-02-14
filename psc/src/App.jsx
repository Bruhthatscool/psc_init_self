"use client";

import { AuroraBackground } from "./components/ui/aurora-background"; // relative path
import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import { LightLogin } from "./components/ui/sign-in";
import { LightSignUp } from "./components/ui/sign-up";
import { Dashboard } from "./components/dashboard/dashboard";
import { ExamPage } from "./components/exam/exam-page";
// import { Grainient } from "./components/Grainient";

// HomePage component
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
    <AuroraBackground>
      <main className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <h1 className="font-extrabold text-8xl md:text-8xl lg:text-9xl text-center text-foreground dark:text-white">
            AcePSC
          </h1>
          <p className="font-light text-lg md:text-2xl text-muted-foreground text-center">
            Learning platform for PSC Aspirants.
          </p>
          <motion.button
            onClick={() => setPage("signup")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground shadow-lg transition-colors duration-200 hover:bg-primary/90 dark:bg-primary dark:text-white"
          >
            Sign Up
          </motion.button>
        </motion.div>
      </main>
    </AuroraBackground>
  );
}

// Main App
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
