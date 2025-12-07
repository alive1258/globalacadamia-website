import React from "react";
import {
  PiGraduationCap,
  PiCheckCircleFill,
  PiClock,
  PiBookOpen,
  PiTarget,
  PiLightbulb,
} from "react-icons/pi";
import { RiGuideLine, RiUserVoiceLine } from "react-icons/ri";
import { FaHandshake, FaChartLine } from "react-icons/fa";
import gideline from "../../../assets/image/gideline2.avif";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Guideline = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const guidelines = [
    {
      icon: <RiGuideLine className="text-white" size={20} />,
      title: "Comprehensive Roadmap",
      description:
        "Our comprehensive student guidelines offer a roadmap to success, providing valuable advice and resources to help you navigate your academic journey with confidence.",
      color: "bg-blue-500",
    },
    {
      icon: <PiBookOpen className="text-white" size={20} />,
      title: "Study Strategies",
      description:
        "From time management strategies to study tips, we equip you with practical skills and insights to excel in your coursework and achieve your educational goals.",
      color: "bg-green-500",
    },
    {
      icon: <PiClock className="text-white" size={20} />,
      title: "Life Balance",
      description:
        "We understand student challenges, covering stress management, career planning, and maintaining a healthy work-life balance.",
      color: "bg-purple-500",
    },
    {
      icon: <PiTarget className="text-white" size={20} />,
      title: "Global Perspective",
      description:
        "With our guidance, you'll gain valuable advice on cross-cultural communication, time management, and effective study habits for global success.",
      color: "bg-orange-500",
    },
    {
      icon: <PiLightbulb className="text-white" size={20} />,
      title: "Lifelong Skills",
      description:
        "Trust our expertise to enhance your global academic experience, gaining broader perspective and lifelong skills for success.",
      color: "bg-pink-500",
    },
  ];

  const counselingFeatures = [
    {
      title: "Personalized Counseling",
      icon: <RiUserVoiceLine size={24} />,
      color: "text-blue-500",
    },
    {
      title: "Career Planning",
      icon: <FaChartLine size={24} />,
      color: "text-green-500",
    },
    {
      title: "Mentorship Programs",
      icon: <FaHandshake size={24} />,
      color: "text-purple-500",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div
            data-aos="fade-up"
            className="inline-flex items-center gap-3 mb-4 px-5 py-2.5 bg-blue-50 rounded-full"
          >
            <PiGraduationCap className="text-blue-500" size={22} />
            <span className="text-blue-600 font-semibold text-sm">
              Academic Guidance
            </span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Student <span className="text-blue-500">Guidelines</span> &{" "}
            <span className="text-purple-500">Counseling</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Your personalized roadmap to academic excellence and personal growth
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Guidelines */}
          <div>
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 mb-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <RiGuideLine className="text-blue-500" size={28} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Comprehensive Guidelines
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Step-by-step support for your journey
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {guidelines.map((item, index) => (
                  <div
                    key={index}
                    data-aos="fade-right"
                    data-aos-delay={400 + index * 100}
                    className="group flex gap-4 p-4 rounded-xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300 cursor-pointer"
                  >
                    <div
                      className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <PiCheckCircleFill
                          className="text-green-500"
                          size={16}
                        />
                        <h3 className="font-bold text-gray-800 text-lg">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Counseling Features */}
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="grid grid-cols-3 gap-4"
            >
              {counselingFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className={`${feature.color} mb-2 flex justify-center`}>
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm">
                    {feature.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image and Additional Info */}
          <div className="space-y-6">
            {/* Image Container */}
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
            >
              <img
                src={gideline}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Student receiving academic guidance"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                  <PiGraduationCap className="text-blue-500" size={20} />
                  <span className="font-bold text-gray-800">
                    Expert Guidance
                  </span>
                </div>
              </div>

              {/* Image Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        1000+
                      </div>
                      <div className="text-sm text-gray-600">
                        Students Guided
                      </div>
                    </div>
                    <div className="h-8 w-px bg-gray-300"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        95%
                      </div>
                      <div className="text-sm text-gray-600">
                        Satisfaction Rate
                      </div>
                    </div>
                    <div className="h-8 w-px bg-gray-300"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        24/7
                      </div>
                      <div className="text-sm text-gray-600">
                        Support Available
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">"</div>
                <div>
                  <p className="text-lg font-medium mb-4">
                    Education is not just about learning facts, but training the
                    mind to think beyond boundaries.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <PiGraduationCap size={20} />
                    </div>
                    <div>
                      <div className="font-bold">Expert Counselors</div>
                      <div className="text-blue-100 text-sm">
                        Ready to guide you
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              className="w-full bg-gray-900 text-white font-bold py-4 px-6 rounded-xl hover:bg-black transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <RiGuideLine size={22} />
              <span>Get Your Personalized Guidance Plan</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Process Steps */}
        <div data-aos="fade-up" className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-center text-xl font-bold text-gray-800 mb-8">
            Our 4-Step Guidance Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Assessment",
                desc: "Understand your goals",
              },
              { step: "02", title: "Planning", desc: "Create roadmap" },
              {
                step: "03",
                title: "Implementation",
                desc: "Execute strategies",
              },
              { step: "04", title: "Review", desc: "Continuous improvement" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mb-3">
                  {item.step}
                </div>
                <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guideline;
