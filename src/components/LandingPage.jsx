import React from "react";
import HeroArea from "./landingpage/HeroArea";
import DetailsArea from "./landingpage/DetialsArea";
import UsersReviewArea from "./landingpage/UsersReviewArea";
import Navbar from "./landingpage/Navbar";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroArea />
      <DetailsArea />
      <UsersReviewArea />
    </div>
  );
}
