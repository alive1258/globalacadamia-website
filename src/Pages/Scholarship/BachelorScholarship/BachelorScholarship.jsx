import React, { useEffect } from "react";
import {
  PiGraduationCap,
  PiCheckCircle,
  PiMedal,
  PiBriefcase,
  PiBuildings,
  PiCertificate,
  PiGlobe,
  PiCurrencyDollar,
  PiHouse,
  PiUsers,
} from "react-icons/pi";
import { FaArrowRight, FaStar } from "react-icons/fa";
import sholarship2 from "../../../assets/image/scholarship2.avif";
import AOS from "aos";
import "aos/dist/aos.css";

const BachelorScholarship = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const benefits = [
    {
      icon: <PiCurrencyDollar className="text-green-500" />,
      title: "100% Tuition Free",
      description: "Full coverage of tuition fees for eligible students",
      gradient: "from-green-50 to-emerald-50",
      border: "border-green-100",
    },
    {
      icon: <PiHouse className="text-blue-500" />,
      title: "Accommodation Free",
      description: "Complimentary on-campus or partner housing",
      gradient: "from-blue-50 to-cyan-50",
      border: "border-blue-100",
    },
    {
      icon: <PiBriefcase className="text-purple-500" />,
      title: "Job Opportunities",
      description: "Guanteed part-time work and internship placements",
      gradient: "from-purple-50 to-violet-50",
      border: "border-purple-100",
    },
    {
      icon: <PiCertificate className="text-amber-500" />,
      title: "Internship Facilities",
      description: "Industry partnerships for practical experience",
      gradient: "from-amber-50 to-yellow-50",
      border: "border-amber-100",
    },
    {
      icon: <PiMedal className="text-red-500" />,
      title: "World Ranking Universities",
      description: "Access to top 500 global universities",
      gradient: "from-red-50 to-rose-50",
      border: "border-red-100",
    },
    {
      icon: <PiGlobe className="text-indigo-500" />,
      title: "Global Network",
      description: "Connect with alumni and industry leaders worldwide",
      gradient: "from-indigo-50 to-blue-50",
      border: "border-indigo-100",
    },
  ];

  const eligibility = [
    "Minimum 80% in high school or equivalent",
    "IELTS 6.5+ or TOEFL 90+",
    "Strong extracurricular achievements",
    "Leadership potential demonstrated",
    "Community service involvement",
    "Innovative project portfolio",
  ];

  const statistics = [
    { value: "150+", label: "Scholarships Awarded", color: "text-blue-500" },
    { value: "$5M+", label: "Total Value", color: "text-green-500" },
    { value: "95%", label: "Success Rate", color: "text-purple-500" },
    { value: "40+", label: "Partner Universities", color: "text-amber-500" },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full opacity-20 blur-3xl translate-y-48 -translate-x-48"></div>

        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative ">
          {/* Header Section */}
          <div
            className="text-center max-w-4xl mx-auto mb-12"
            data-aos="fade-up"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-100 rounded-full">
              <PiGraduationCap className="text-blue-600" size={20} />
              <span className="text-blue-700 font-semibold">
                Exclusive Scholarship Program
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Full{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                Scholarships
              </span>{" "}
              for Bachelor Students
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your educational journey with our comprehensive
              scholarship program covering tuition, accommodation, and career
              opportunities
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Image & Stats */}
            <div className="space-y-6">
              <div className="relative group" data-aos="fade-right">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={sholarship2}
                    alt="Scholarship students celebrating"
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      🎓 100% Tuition Free
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {statistics.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"
                  >
                    <div
                      className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Benefits */}
            <div data-aos="fade-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our{" "}
                <span className="text-blue-500">Scholarship Program?</span>
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <PiCheckCircle className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Prestigious 100% Scholarship Program
                    </h3>
                    <p className="text-gray-600">
                      Designed to empower and support bachelor's degree students
                      on their educational journey, easing the financial burden
                      of higher education.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <PiUsers className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Mentorship & Professional Network
                    </h3>
                    <p className="text-gray-600">
                      Beyond financial support, we offer mentorship
                      opportunities and access to a diverse network of industry
                      professionals for holistic development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <PiBuildings className="text-blue-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Global Academic Excellence
                    </h3>
                    <p className="text-gray-600">
                      Join successful recipients who have made meaningful
                      contributions in their fields at world-class universities
                      worldwide.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="group w-full md:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3">
                Apply Now for Scholarship
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mb-20" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Complete{" "}
              <span className="text-blue-500">Scholarship Benefits</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${benefit.gradient} border ${benefit.border} rounded-2xl p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                      <div className="text-2xl">{benefit.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility & Application */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Eligibility Criteria */}
            <div
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <PiGraduationCap className="text-blue-600" />
                </div>
                Eligibility Criteria
              </h3>

              <div className="space-y-4">
                {eligibility.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                <div className="flex items-center gap-3">
                  <FaStar className="text-yellow-500" />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Priority Consideration
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Students from underrepresented communities receive special
                      consideration
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Process */}
            <div
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Application Process
              </h3>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Online Application",
                    desc: "Submit your application form with academic records",
                  },
                  {
                    step: "02",
                    title: "Document Verification",
                    desc: "Upload required documents for verification",
                  },
                  {
                    step: "03",
                    title: "Interview Round",
                    desc: "Virtual interview with scholarship committee",
                  },
                  {
                    step: "04",
                    title: "Final Selection",
                    desc: "Receive scholarship offer and acceptance",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center font-bold text-blue-600 text-lg">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Deadline Notice */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-lg">Next Deadline</h4>
                    <p className="text-blue-100">March 31, 2024</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">45</div>
                    <p className="text-blue-100 text-sm">Days Remaining</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-20 text-center" data-aos="fade-up">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-12 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>

              <div className="relative ">
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Begin Your Scholarship Journey?
                </h3>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  Join thousands of successful students who transformed their
                  lives through our scholarship program
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center gap-3">
                    <PiGraduationCap />
                    Apply Now
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl hover:bg-white/30 transition-colors">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BachelorScholarship;
