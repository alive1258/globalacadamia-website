import React, { useEffect } from "react";
import {
  PiGraduationCap,
  PiBuildings,
  PiStudent,
  PiGlobe,
  PiBookOpen,
  PiCertificate,
  PiRocketLaunch,
} from "react-icons/pi";
import {
  FaUniversity,
  FaGraduationCap as FaGradCap,
  FaAward,
  FaUsers,
  FaResearchgate,
} from "react-icons/fa";
import { BsArrowRight, BsCheckCircleFill } from "react-icons/bs";
import v1 from "../../../assets/image/varsity1.avif";
import v2 from "../../../assets/image/versity2.avif";
import v3 from "../../../assets/image/varsity3.jpg";
import v4 from "../../../assets/image/varsity4.avif";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutVarsity = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    { icon: <FaUniversity />, text: "Top 500 Global Ranking", count: "50+" },
    { icon: <PiStudent />, text: "International Students", count: "500,000+" },
    { icon: <PiBookOpen />, text: "Academic Programs", count: "10,000+" },
    { icon: <FaResearchgate />, text: "Research Centers", count: "2,000+" },
  ];

  const programs = [
    {
      level: "Diploma Programs",
      duration: "2-3 Years",
      fields: ["Engineering", "Business", "Technology", "Health Sciences"],
      icon: <PiCertificate />,
    },
    {
      level: "Bachelor Programs",
      duration: "4-5 Years",
      fields: ["Medicine", "Computer Science", "Economics", "Architecture"],
      icon: <FaGradCap />,
    },
    {
      level: "Master Programs",
      duration: "1-2 Years",
      fields: [
        "MBA",
        "Data Science",
        "Biotechnology",
        "International Relations",
      ],
      icon: <PiGraduationCap />,
    },
    {
      level: "PhD Programs",
      duration: "3-5 Years",
      fields: ["Research", "Academic", "Industry Specialization"],
      icon: <FaAward />,
    },
  ];

  const benefits = [
    "100% Scholarship Opportunities",
    "English Medium Programs",
    "World-Class Faculty",
    "Modern Campus Facilities",
    "Industry Partnerships",
    "Global Recognition",
    "Research Opportunities",
    "Cultural Exchange Programs",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full mb-6">
            <PiBuildings className="text-xl" />
            <span className="font-semibold">CHINESE UNIVERSITIES</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            World-Class Education in
            <span className="text-blue-600"> China</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-blue-200"></div>
            <PiGraduationCap className="text-3xl text-blue-500" />
            <div className="h-px w-16 bg-blue-200"></div>
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover why China has become the preferred destination for
            international students seeking quality education with 100%
            scholarship opportunities
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Images Grid */}
          <div className="grid grid-cols-2 gap-4 h-fit">
            <div
              className="relative group overflow-hidden rounded-2xl shadow-lg"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={v2}
                alt="Chinese University Campus"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="font-bold">Modern Campus</div>
                  <div className="text-sm">State-of-the-art facilities</div>
                </div>
              </div>
            </div>

            <div
              className="relative group overflow-hidden rounded-2xl shadow-lg"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <img
                src={v3}
                alt="University Library"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="font-bold">Research Facilities</div>
                  <div className="text-sm">Advanced laboratories</div>
                </div>
              </div>
            </div>

            <div
              className="relative group overflow-hidden rounded-2xl shadow-lg"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <img
                src={v4}
                alt="Student Life"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="font-bold">Student Community</div>
                  <div className="text-sm">International exposure</div>
                </div>
              </div>
            </div>

            <div
              className="relative group overflow-hidden rounded-2xl shadow-lg"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <img
                src={v1}
                alt="Graduation Ceremony"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="font-bold">Academic Excellence</div>
                  <div className="text-sm">Global recognition</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Excellence in Higher Education
              <span className="text-blue-600 block">Since 1895</span>
            </h2>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <div className="text-blue-600">{feature.icon}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {feature.count}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {feature.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Programs Highlights */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <PiRocketLaunch className="text-blue-500" />
                Available Programs
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-100"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-blue-600 text-xl">
                        {program.icon}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          {program.level}
                        </div>
                        <div className="text-blue-600 text-sm">
                          {program.duration}
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-600 text-sm">
                      {program.fields.slice(0, 2).join(", ")}...
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Chinese Universities?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-xl"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <BsCheckCircleFill className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <PiGlobe className="text-xl" />
            Explore 50+ Partner Universities
            <BsArrowRight className="text-xl" />
          </button>
          <p className="text-gray-600 mt-4">
            Limited seats available for 2024 intake. Apply now for 100%
            scholarship consideration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutVarsity;
