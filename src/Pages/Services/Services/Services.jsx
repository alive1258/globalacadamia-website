import React from "react";
import Banner from "../Banner/Banner";
import TopUniversity from "../../Home/TopUniversity/TopUniversity";
import Admission from "../Admission/Admission";
import Guideline from "../Guideline/Guideline";
import { Helmet } from "react-helmet-async";
import TravelSupport from "../TravelSupport/TravelSupport";
import VisaProcess from "../VisaProcess/VisaProcess";
import TestPreparation from "../TestPreparation/TestPreparation";
import CareerCounseling from "../CareerCounseling/CareerCounseling";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Global Academia | Services</title>
      </Helmet>
      <Banner />
      <VisaProcess />
      <TravelSupport />
      <TestPreparation />
      <TopUniversity />
      <Admission />
      <CareerCounseling />
      <Guideline />
    </>
  );
};

export default Services;
