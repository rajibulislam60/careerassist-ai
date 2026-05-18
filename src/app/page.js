"use client";
import Home from "../components/Home";
import LandingPage from "../components/LandingPage";

export default function page() {
  const login = false;

  return (
    <div>
      {login ? <Home /> : <LandingPage />}
      {/* <LandingPage /> */}
      {/* <Home /> */}
    </div>
  );
}
