import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import Layout from "./Components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
