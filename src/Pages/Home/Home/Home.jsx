import React from "react";
import Banner from "../Banner/Banner";
import Welcome from "../Welcome/Welcome";
import DiplomaCourse from "../DiplomaCourse/DiplomaCourse";
import BscCourse from "../BscCourse/BscCourse";
import MscCourse from "../MscCourse/MscCourse";
import TopUniversity from "../TopUniversity/TopUniversity";
import Admission from "../Admission/Admission";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";
import WhyChina from "../WhyChina/WhyChina";
import ContactSection from "../ContactSection/ContactSection";
import FAQSection from "../FAQSection/FAQSection";
import StudentLife from "../StudentLife/StudentLife";
import ScholarshipSection from "../ScholarshipSection/ScholarshipSection";
import UniversityStats from "../UniversityStats/UniversityStats";
import ProgramHighlights from "../ProgramHighlights/ProgramHighlights";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Global Academia | Premier Education in China</title>
        <meta
          name="description"
          content="Study in China with Global Academia - Leading provider of diploma, bachelor's, and master's programs in Chinese universities with comprehensive support services."
        />
        <meta
          name="keywords"
          content="Study in China, Chinese Universities, Engineering in China, MBBS in China, Scholarship in China, International Students China"
        />
      </Helmet>

      <Banner />
      <Welcome />
      <WhyChina />
      <ProgramHighlights />
      <UniversityStats />
      <DiplomaCourse />
      <BscCourse />
      <MscCourse />
      <ScholarshipSection />
      <TopUniversity />
      <Admission />
      <StudentLife />
      <Testimonial />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default Home;
