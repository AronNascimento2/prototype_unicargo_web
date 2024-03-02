import React from "react";
import { AppRouter } from "./routes/AppRouter";
import { AuthProvider } from "./contexts/AuthProvider";
import "./App.css";

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
