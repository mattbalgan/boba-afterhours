import React from "react";
import IntroSection from "./IntroSection";
import FeatureSection from "./FeatureSection";
import AboutSection from "./AboutSection";
import MediaSection from "./MediaSection";

export default function MainPage() {
  return (
    <>
      <IntroSection />
      <AboutSection />
      <MediaSection />
      {/* <FeatureSection /> */}
    </>
  );
}