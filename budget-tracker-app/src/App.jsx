import React, { useState } from "react";
import "./index.css";

import HomePage from "./components/HomePage";
import DashBoard from "./components/DashBoard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BudgetProvider } from "./context/BudgetContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Toaster } from "sonner";

function AppContent() {
  const [currentPage, setCurrentPage] = useState("home");
  const { isAuthenticated } = useAuth();

  // If trying to access dashboard but not authenticated, show login
  if (currentPage === "dashboard" && !isAuthenticated) {
    return <Login onNavigate={setCurrentPage} />;
  }

  // If authenticated and on login/signup, redirect to dashboard
  if (
    isAuthenticated &&
    (currentPage === "login" || currentPage === "signup")
  ) {
    setCurrentPage("dashboard");
  }

  return (
    <div className="min-h-screen">
      {currentPage === "home" && <HomePage onNavigate={setCurrentPage} />}
      {currentPage === "login" && <Login onNavigate={setCurrentPage} />}
      {currentPage === "signup" && <SignUp onNavigate={setCurrentPage} />}
      {currentPage === "dashboard" && isAuthenticated && (
        <DashBoard onNavigate={setCurrentPage} />
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BudgetProvider>
        <Toaster position="top-right" richColors />
        <AppContent />
      </BudgetProvider>
    </AuthProvider>
  );
}

export default App;
