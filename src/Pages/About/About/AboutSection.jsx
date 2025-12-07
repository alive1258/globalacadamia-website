import React from "react";
import AboutBanner from "../AboutBanner/AboutBanner";
import AboutVarsity from "../AboutVarsity/AboutVarsity";
import AScholarship from "../AScholarship/AScholarship";
import CampusTour from "../CampusTour/CampusTour";
import TopUniversity from "../../Home/TopUniversity/TopUniversity";
import { Helmet } from "react-helmet-async";
import ProcessTimeline from "../ProcessTimeline/ProcessTimeline";
import TestimonialsPreview from "../TestimonialsPreview/TestimonialsPreview";

const AboutSection = () => {
  return (
    <>
      <Helmet>
        <title>Global Academia | About</title>
      </Helmet>
      <AboutBanner />
      <AboutVarsity />
      <AScholarship />
      <ProcessTimeline />

      {/* Campus Tour */}
      <CampusTour />

      {/* Testimonials Preview */}
      <TestimonialsPreview />

      <TopUniversity />
    </>
  );
};

export default AboutSection;
