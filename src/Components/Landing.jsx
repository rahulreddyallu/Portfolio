import React from "react";
import Hero from "./Hero";
import Work from "./Work";
import "../Styles/Landing.css";

export default function Landing() {
  return (
    <div className="landing">
      <Hero />
      <Work />
    </div>
  );
}
