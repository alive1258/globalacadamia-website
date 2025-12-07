import React from "react";
import {
  FaUserCheck,
  FaFileAlt,
  FaUniversity,
  FaPassport,
  FaPlaneDeparture,
  FaHome,
  FaHandsHelping,
} from "react-icons/fa";
import {
  PiNumberCircleOne,
  PiNumberCircleTwo,
  PiNumberCircleThree,
  PiNumberCircleFour,
  PiNumberCircleFive,
  PiNumberCircleSix,
  PiNumberCircleSeven,
} from "react-icons/pi";

const ProcessTimeline = () => {
  const steps = [
    {
      id: 1,
      title: "Free Consultation",
      description:
        "Discuss your academic goals and eligibility for 100% scholarships",
      icon: <FaUserCheck />,
      color: "blue",
      duration: "1-2 Days",
    },
    {
      id: 2,
      title: "Document Preparation",
      description:
        "Complete assistance with academic documents and certifications",
      icon: <FaFileAlt />,
      color: "green",
      duration: "3-5 Days",
    },
    {
      id: 3,
      title: "University Selection",
      description: "Choose from 50+ partner universities based on your profile",
      icon: <FaUniversity />,
      color: "purple",
      duration: "2-3 Days",
    },
    {
      id: 4,
      title: "Application Submission",
      description:
        "Submit complete application package to selected universities",
      icon: <FaFileAlt />,
      color: "orange",
      duration: "1 Day",
    },
    {
      id: 5,
      title: "Visa Processing",
      description: "Complete visa documentation and embassy appointment",
      icon: <FaPassport />,
      color: "red",
      duration: "15-20 Days",
    },
    {
      id: 6,
      title: "Pre-departure Briefing",
      description:
        "Orientation about Chinese culture and academic expectations",
      icon: <FaPlaneDeparture />,
      color: "teal",
      duration: "2 Days",
    },
    {
      id: 7,
      title: "Post-arrival Support",
      description: "Airport pickup, accommodation, and university registration",
      icon: <FaHome />,
      color: "indigo",
      duration: "Continuous",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full mb-6">
            <FaHandsHelping className="text-xl" />
            <span className="font-semibold">OUR PROCESS</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seamless Journey to
            <span className="text-blue-600"> Your Dream University</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From initial consultation to campus arrival - we guide you through
            every step
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-indigo-400 hidden md:block"></div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Left Side - Content for odd, Image for even on desktop */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div
                    className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-${step.color}-500`}
                  >
                    {/* Step Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-16 h-16 rounded-full bg-${step.color}-100 flex items-center justify-center`}
                      >
                        <div className={`text-2xl text-${step.color}-600`}>
                          {step.icon}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <div
                            className={`text-sm font-semibold text-${step.color}-600 bg-${step.color}-50 px-3 py-1 rounded-full`}
                          >
                            Step {step.id}
                          </div>
                          <div className="text-gray-500 text-sm">
                            {step.duration}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mt-2">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6">{step.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {[
                        "Expert guidance throughout",
                        "Document verification",
                        "Regular updates",
                        "24/7 support available",
                      ].map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center - Step Number */}
                <div className="relative md:w-auto">
                  <div
                    className={`w-12 h-12 rounded-full bg-${step.color}-500 text-white flex items-center justify-center font-bold text-xl shadow-lg`}
                  >
                    {step.id}
                  </div>
                </div>

                {/* Right Side - Placeholder (empty on desktop) */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-8 rounded-2xl">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">
                Start Your Journey Today
              </h3>
              <p className="text-blue-100">
                Book your free consultation session with our expert counselors
              </p>
            </div>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
