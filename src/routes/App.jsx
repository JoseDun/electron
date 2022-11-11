import React from "react";

import { MemoryRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import { NAVIGATION_ROUTES } from "../constants/routes";

import "../styles/App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        {NAVIGATION_ROUTES.map(({ Component, ...route }) => (
          <Route
            {...route}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}
