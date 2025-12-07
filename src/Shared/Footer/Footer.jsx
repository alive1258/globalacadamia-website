import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGraduationCap,
  FaShieldAlt,
  FaAward,
  FaHeadset,
} from "react-icons/fa";
import { BsArrowRightShort, BsSend, BsClock, BsGlobe } from "react-icons/bs";
import {
  MdOutlineMailOutline,
  MdLocationOn,
  MdPhoneInTalk,
} from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import { PiStudentBold } from "react-icons/pi";
import logo from "../../assets/image/GALogos.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/", icon: <BsArrowRightShort /> },
    { name: "About Us", path: "/about", icon: <BsArrowRightShort /> },
    { name: "Services", path: "/services", icon: <BsArrowRightShort /> },
    { name: "Study Abroad", path: "/study", icon: <BsArrowRightShort /> },
    { name: "Scholarships", path: "/scholarship", icon: <BsArrowRightShort /> },
    {
      name: "Universities",
      path: "/universities",
      icon: <BsArrowRightShort />,
    },
    { name: "Contact", path: "/contact", icon: <BsArrowRightShort /> },
    { name: "Blog", path: "/blog", icon: <BsArrowRightShort /> },
  ];

  const services = [
    "100% Scholarship Assistance",
    "University Selection",
    "Visa Processing",
    "Document Preparation",
    "Accommodation Arrangement",
    "Pre-departure Briefing",
    "Airport Pickup",
    "Post-arrival Support",
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/profile.php?id=61575149877963",
      color: "hover:bg-[#1877F2]",
      name: "Facebook",
    },
    {
      icon: <FaInstagram />,
      href: "#",
      color: "hover:bg-gradient-to-r from-purple-500 to-pink-500",
      name: "Instagram",
    },
    {
      icon: <FaYoutube />,
      href: "#",
      color: "hover:bg-[#FF0000]",
      name: "YouTube",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/company/globalacadamia/about/?viewAsMember=true",
      color: "hover:bg-[#0077B5]",
      name: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      href: "#",
      color: "hover:bg-[#1DA1F2]",
      name: "Twitter",
    },
  ];

  return (
    <>
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Get Free Consultation
                </h3>
                <p className="text-blue-100">
                  Subscribe to our newsletter for updates on scholarships and
                  admission deadlines
                </p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-3 rounded-lg flex-1 md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
                  <BsSend />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <FaGraduationCap />,
                value: "5000+",
                label: "Students Placed",
              },
              {
                icon: <FaShieldAlt />,
                value: "98%",
                label: "Visa Success Rate",
              },
              {
                icon: <FaAward />,
                value: "100%",
                label: "Scholarship Success",
              },
              {
                icon: <HiAcademicCap />,
                value: "50+",
                label: "Partner Universities",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-3xl text-blue-400 mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-gray-950 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={logo}
                  alt="Global Academia"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Global Academia
                  </h2>
                  <p className="text-blue-400 text-sm">Education Consultants</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Leading educational consultancy in Bangladesh, dedicated to
                providing world-class advisory services for students aspiring to
                study abroad with 100% scholarships.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-800 p-3 rounded-full text-white ${social.color} transition-colors duration-300 hover:text-white transform hover:scale-110`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BsGlobe className="text-blue-400" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      onClick={scrollToTop}
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        {link.icon}
                      </span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <PiStudentBold className="text-blue-400" />
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <BsArrowRightShort className="text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-400">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FaHeadset className="text-blue-400" />
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-900 p-2 rounded-lg">
                    <FaPhoneAlt className="text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone Number</p>
                    <p className="text-gray-400">+88 0179-3636735</p>
                    <p className="text-gray-400">+88 0171-2345678</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-900 p-2 rounded-lg">
                    <FaEnvelope className="text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Address</p>
                    <p className="text-gray-400">globalAcademia@gmail.com</p>
                    <p className="text-gray-400">info@globalacademia.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-900 p-2 rounded-lg">
                    <FaMapMarkerAlt className="text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Office Address</p>
                    <p className="text-gray-400">Ma Sufiya Mohol, 1st Floor</p>
                    <p className="text-gray-400">
                      Plastic Factory Road, Notun Vangabrai
                    </p>
                    <p className="text-gray-400">Sirajgnaj, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-900 p-2 rounded-lg">
                    <BsClock className="text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Office Hours</p>
                    <p className="text-gray-400">
                      Sat - Thu: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-400">Friday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-400">
                  © Copyright {currentYear}, Global Academia. All Rights
                  Reserved.
                </p>
                <div className="flex gap-4 mt-2">
                  <Link
                    to="/privacy-policy"
                    className="text-gray-400 hover:text-blue-400 text-sm"
                    onClick={scrollToTop}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/terms-conditions"
                    className="text-gray-400 hover:text-blue-400 text-sm"
                    onClick={scrollToTop}
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    to="/disclaimer"
                    className="text-gray-400 hover:text-blue-400 text-sm"
                    onClick={scrollToTop}
                  >
                    Disclaimer
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-gray-400">Accepted Payments:</div>
                <div className="flex gap-2">
                  {["Visa", "Mastercard", "PayPal", "Bank Transfer"].map(
                    (method, index) => (
                      <div
                        key={index}
                        className="bg-gray-800 px-3 py-1 rounded text-sm text-gray-400"
                      >
                        {method}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 hover:scale-110"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </>
  );
};

export default Footer;
