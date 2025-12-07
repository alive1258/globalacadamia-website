import React from "react";
import {
  FaPlane,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaHandsHelping,
  FaMoneyBillWave,
  FaGlobeAmericas,
  FaClock,
  FaShieldAlt,
  FaUserFriends,
  FaHotel,
  FaPassport,
  FaLuggageCart,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaHeadset,
  FaGlobe,
} from "react-icons/fa";
import {
  MdSupportAgent,
  MdFlightTakeoff,
  MdLocalAirport,
  MdApartment,
  MdSecurity,
} from "react-icons/md";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import travel from "../../../assets/image/travel3.avif";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TravelSupport = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const supportPoints = [
    {
      icon: <MdSupportAgent className="text-white" size={20} />,
      title: "Comprehensive Guidance",
      text: "Our comprehensive travel support services are designed specifically for students, offering guidance and solutions to make your study abroad journey seamless and stress-free.",
      bgColor: "bg-blue-500",
    },
    {
      icon: <FaMapMarkerAlt className="text-white" size={20} />,
      title: "One-Stop Solution",
      text: "Our dedicated student-focused travel support services are your gateway to a successful international academic journey. We offer a one-stop solution for all your travel needs.",
      bgColor: "bg-green-500",
    },
    {
      icon: <FaHandsHelping className="text-white" size={20} />,
      title: "Personalized Support",
      text: "From visa assistance to accommodation arrangements, our experienced team is here to provide personalized support tailored to your unique needs and preferences.",
      bgColor: "bg-purple-500",
    },
    {
      icon: <FaMoneyBillWave className="text-white" size={20} />,
      title: "Cost-Effective Services",
      text: "We understand the importance of budgeting for students, and our services are cost-effective, ensuring you get the most value out of your international education experience.",
      bgColor: "bg-yellow-500",
    },
    {
      icon: <FaGlobeAmericas className="text-white" size={20} />,
      title: "Cultural Integration",
      text: "Whether you need help with visa applications, pre-departure orientations, or cultural integration, we're your trusted partner throughout your academic adventure.",
      bgColor: "bg-pink-500",
    },
    {
      icon: <MdFlightTakeoff className="text-white" size={20} />,
      title: "Focus on Studies",
      text: "Let us handle the logistics while you focus on your studies and making unforgettable memories during your time abroad.",
      bgColor: "bg-indigo-500",
    },
    {
      icon: <FaUserFriends className="text-white" size={20} />,
      title: "Airport Welcome Service",
      text: "Our friendly team greets you upon arrival, ensuring a warm welcome and smooth transition to your new life in China.",
      bgColor: "bg-green-500",
    },
  ];

  const services = [
    {
      icon: <FaPassport className="text-blue-500" size={20} />,
      title: "Visa & Documentation",
      items: [
        "Visa application support",
        "Document verification",
        "Appointment scheduling",
        "Interview preparation",
      ],
    },
    {
      icon: <MdLocalAirport className="text-green-500" size={20} />,
      title: "Flight Booking",
      items: [
        "Best price guarantee",
        "Student discounts",
        "Flexible dates",
        "Luggage assistance",
      ],
    },
    {
      icon: <FaHotel className="text-purple-500" size={20} />,
      title: "Accommodation",
      items: [
        "University housing",
        "Off-campus apartments",
        "Homestay options",
        "Temporary stay",
      ],
    },
    {
      icon: <MdApartment className="text-orange-500" size={20} />,
      title: "Airport Services",
      items: [
        "Airport pickup",
        "Welcome service",
        "Local SIM card",
        "Initial orientation",
      ],
    },
  ];

  const timelineSteps = [
    {
      number: "01",
      title: "Pre-Departure Planning",
      description:
        "Comprehensive checklist and timeline for departure preparations",
      icon: <GiAirplaneDeparture className="text-blue-500" />,
    },
    {
      number: "02",
      title: "Travel Arrangements",
      description: "Flight booking, insurance, and necessary travel documents",
      icon: <FaPlane className="text-green-500" />,
    },
    {
      number: "03",
      title: "Arrival Assistance",
      description:
        "Airport pickup, accommodation check-in, and local orientation",
      icon: <GiAirplaneArrival className="text-purple-500" />,
    },
    {
      number: "04",
      title: "Settlement Support",
      description:
        "Bank account setup, local registration, and ongoing support",
      icon: <FaUserFriends className="text-pink-500" />,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div
            data-aos="fade-up"
            className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-blue-50 rounded-full"
          >
            <FaPlane className="text-blue-500" size={20} />
            <span className="text-blue-600 font-semibold text-sm">
              Travel Support
            </span>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Complete Travel Support for{" "}
            <span className="text-blue-500">International Students</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
          >
            End-to-end travel assistance ensuring a smooth transition from your
            home country to your dream university abroad
          </p>
        </div>

        {/* Main Content - Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Support Points */}
          <div data-aos="fade-right" data-aos-delay="300" className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Why Choose Our{" "}
                <span className="text-blue-500">Travel Support?</span>
              </h2>

              <div className="space-y-4">
                {supportPoints.map((point, index) => (
                  <div
                    key={index}
                    data-aos="fade-right"
                    data-aos-delay={400 + index * 100}
                    className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                  >
                    <div
                      className={`${point.bgColor} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1 flex items-center gap-2">
                        <FaCheckCircle className="text-green-500" size={16} />
                        {point.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <FaHeadset size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Student Support Hub</h3>
                  <p className="text-cyan-100 text-sm">
                    Academic & accommodation assistance
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-cyan-100">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5 Min</div>
                  <div className="text-sm text-cyan-100">Avg Response</div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-white/80" />
                  <span className="text-sm">
                    Support in English, Chinese, Bengali
                  </span>
                </div>
                <button className="w-full mt-3 py-2.5 bg-white/20 backdrop-blur-sm text-white font-medium rounded-lg border border-white/30 hover:bg-white/30 transition-colors">
                  Chat with Support
                </button>
              </div>
            </div>
          </div>

          {/* Middle Column - Image & Stats */}
          {/* Middle Column - Image, Stats & Additional Content */}
          <div data-aos="fade-up" data-aos-delay="400" className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full flex flex-col">
              {/* Main Image with Overlay */}
              <div className="relative flex-1 min-h-[300px]">
                <img
                  src={travel}
                  alt="Students traveling for education"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>

                {/* Top Floating Stats */}
                <div className="absolute top-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <h3 className="font-bold text-gray-800 text-center mb-3">
                      Our Track Record
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          5000+
                        </div>
                        <div className="text-xs text-gray-600">
                          Students Helped
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          98%
                        </div>
                        <div className="text-xs text-gray-600">
                          Success Rate
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">
                          50+
                        </div>
                        <div className="text-xs text-gray-600">Countries</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">
                          24/7
                        </div>
                        <div className="text-xs text-gray-600">Support</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Image Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold mb-2">
                    End-to-End Journey Management
                  </h3>
                  <p className="text-white/90 text-sm">
                    From departure to settlement, we handle every detail so you
                    can focus on your studies
                  </p>
                </div>
              </div>

              {/* Additional Content Below Image */}
              <div className="bg-white p-6 space-y-6">
                {/* Student Testimonial */}
                <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r-lg">
                  <p className="text-gray-700 italic">
                    "The travel support team made my move to Canada effortless.
                    They handled everything from flight booking to airport
                    pickup!"
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">S</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">
                        Sarah Chen
                      </h4>
                      <p className="text-gray-600 text-xs">
                        University of Toronto, Canada
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Services Checklist */}
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" />
                    What We Handle For You:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">
                        Flight booking
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">
                        Visa guidance
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">
                        Accommodation
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">
                        Airport pickup
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">Insurance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">Local SIM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">
                        Bank account
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">
                        Emergency support
                      </span>
                    </div>
                  </div>
                </div>

                {/* Support Channels */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-3">
                    Support Channels
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Email Support
                      </span>
                      <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">
                        Response within 2 hours
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Phone Support
                      </span>
                      <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                        24/7 Available
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">WhatsApp</span>
                      <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">
                        Instant Reply
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Form */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-3">
                    Get Instant Quote
                  </h4>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select destination country</option>
                      <option>USA</option>
                      <option>Canada</option>
                      <option>UK</option>
                      <option>Australia</option>
                      <option>Germany</option>
                    </select>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded text-sm transition-colors">
                      Get Free Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-300 rounded-full opacity-20 blur-xl"></div>
          </div>

          {/* Right Column - Services & Timeline */}
          <div data-aos="fade-left" data-aos-delay="500" className="space-y-6">
            {/* Services Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Our <span className="text-blue-500">Services</span>
              </h2>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gray-50 rounded-lg group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>
                      <h3 className="font-bold text-gray-800">
                        {service.title}
                      </h3>
                    </div>
                    <ul className="space-y-1 pl-9">
                      {service.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 flex items-center gap-2"
                        >
                          <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Section */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Your <span className="text-blue-500">Journey Timeline</span>
              </h2>

              <div className="space-y-6">
                {timelineSteps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Connector line except for last item */}
                    {index < timelineSteps.length - 1 && (
                      <div className="absolute left-5 top-10 h-full w-0.5 bg-blue-200"></div>
                    )}

                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="w-10 h-10 bg-white border-2 border-blue-200 rounded-full flex items-center justify-center font-bold text-blue-600">
                          {step.number}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          {step.icon}
                          <h3 className="font-bold text-gray-800">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Security Badge */}
              <div className="mt-6 p-4 bg-white rounded-xl border border-green-100 flex items-center gap-3">
                <MdSecurity className="text-green-500 text-xl" />
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">
                    100% Secure & Confidential
                  </h4>
                  <p className="text-xs text-gray-600">
                    All your data is protected with enterprise-grade security
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Banner */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl p-8 overflow-hidden relative"
        >
          {/* Background Pattern */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>

          <div className="relative z-10">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                  <FaClock className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-lg mb-2">Real-time Updates</h3>
                <p className="text-blue-100 text-sm">
                  Live flight & visa status tracking
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                  <FaShieldAlt className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-lg mb-2">Insurance Partner</h3>
                <p className="text-blue-100 text-sm">
                  Comprehensive student insurance plans
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                  <FaLuggageCart className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-lg mb-2">Shipping Services</h3>
                <p className="text-blue-100 text-sm">
                  Door-to-door luggage shipping
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-3">
                  <FaUserFriends className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-lg mb-2">Alumni Network</h3>
                <p className="text-blue-100 text-sm">
                  Connect with alumni in your destination
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-8 pt-8 border-t border-white/20 text-center">
              <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2">
                <FaPlane className="transform rotate-45" />
                Start Your Journey Today
                <FaPlane />
              </button>
              <p className="text-blue-100 text-sm mt-3">
                Get a free personalized travel plan within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelSupport;
