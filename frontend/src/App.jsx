import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { fetchUser } from "./api/auth";
import { useAuthStore } from "./store/auth";
import Complain from "./pages/Complain";
import AllComplain from "./pages/AllComplain";
import LandingPage from "./pages/LandingPage";
import SetRemainder from "./pages/SetRemainder";
import Feedback from "./pages/Feedback";
import ViewReminders from "./pages/ViewReminders";
import AllFeedback from "./pages/AllFeedback";

const App = () => {
  const setUser = useAuthStore((s) => s.setUser);
  const clearUser = useAuthStore((s) => s.clearUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser()
      .then((res) => setUser(res.data.user))
      .catch(() => clearUser())
      .finally(() => setLoading(false));
  }, [setUser, clearUser]);

  if (loading) return <p>Loading...</p>; // Show while fetching user

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/landing"
          element={
            <PublicRoute>
              <LandingPage />
            </PublicRoute>
          }
        />

        <Route
          path="/remainder"
          element={
            <PublicRoute>
              <SetRemainder />
            </PublicRoute>
          }
        />

        <Route
          path="/feedback"
          element={
            <PublicRoute>
              <Feedback />
            </PublicRoute>
          }
        />


        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/all-complains"
          element={
            <ProtectedRoute>
              <AllComplain />
            </ProtectedRoute>
          }
        />

        <Route
          path="/all-remainders"
          element={
            <ProtectedRoute>
              <ViewReminders />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Submit-complain"
          element={
            <PublicRoute>
              <Complain />
            </PublicRoute>
          }
        />

        <Route
          path="/All-feedbacks"
          element={
            <PublicRoute>
              <AllFeedback />
            </PublicRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
