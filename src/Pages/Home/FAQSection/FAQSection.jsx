import React, { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiMessageSquare,
  FiHelpCircle,
} from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What are the admission requirements for international students?",
      answer:
        "Requirements vary by program but generally include: high school diploma or equivalent for undergraduate programs, bachelor's degree for master's programs, English proficiency (TOEFL/IELTS), passport copy, academic transcripts, personal statement, and recommendation letters. Some programs may require entrance exams.",
      category: "Admission",
    },
    {
      question: "How much does it cost to study in China?",
      answer:
        "Tuition fees range from $2,000 to $6,000 per year for most programs. Living expenses are approximately $400-800 per month including accommodation, food, transportation, and insurance. Many universities offer scholarships that can cover 30-100% of these costs.",
      category: "Finance",
    },
    {
      question: "Do I need to know Chinese to study in China?",
      answer:
        "No, most universities offer programs taught entirely in English. However, basic Chinese language courses are usually provided for international students. Learning basic Chinese is recommended for daily life and can be a valuable skill.",
      category: "Language",
    },
    {
      question: "What scholarships are available for international students?",
      answer:
        "We offer various scholarships including: Chinese Government Scholarship (CSC), University Scholarships, Provincial Scholarships, and our exclusive Global Academia Partnership Scholarships. Scholarships can cover tuition, accommodation, and living stipends.",
      category: "Scholarship",
    },
    {
      question: "Can I work while studying in China?",
      answer:
        "Yes, international students can work part-time (up to 20 hours per week) with proper authorization from the university and local authorities. We also provide internship opportunities through our industry partnerships.",
      category: "Work",
    },
    {
      question: "What accommodation options are available?",
      answer:
        "We provide various accommodation options: on-campus dormitories (recommended for first-year students), off-campus apartments, homestays, and private rentals. All international student accommodations meet safety and quality standards.",
      category: "Accommodation",
    },
    {
      question: "How is the visa process handled?",
      answer:
        "We provide complete visa assistance including: admission letter preparation, JW201/JW202 form issuance, visa application guidance, and pre-departure orientation. Our visa success rate is 98% with dedicated support throughout the process.",
      category: "Visa",
    },
    {
      question:
        "What support services are available for international students?",
      answer:
        "We offer comprehensive support: airport pickup, orientation programs, academic advising, counseling services, health insurance, 24/7 emergency support, cultural adaptation programs, and career services including internship placement.",
      category: "Support",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [
    { name: "Admission", color: "bg-blue-100 text-blue-800", icon: "📋" },
    { name: "Finance", color: "bg-green-100 text-green-800", icon: "💰" },
    { name: "Language", color: "bg-purple-100 text-purple-800", icon: "🗣️" },
    { name: "Scholarship", color: "bg-yellow-100 text-yellow-800", icon: "🎓" },
    { name: "Work", color: "bg-indigo-100 text-indigo-800", icon: "💼" },
    { name: "Accommodation", color: "bg-pink-100 text-pink-800", icon: "🏠" },
    { name: "Visa", color: "bg-red-100 text-red-800", icon: "🛂" },
    { name: "Support", color: "bg-teal-100 text-teal-800", icon: "🤝" },
  ];

  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <AiOutlineQuestionCircle className="w-8 h-8 text-blue-600" />
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Questions About Studying
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              in China?
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Get answers to common questions about admission, scholarships,
            accommodation, and student life in China from our expert advisors.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ List */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-2xl"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">
                          {
                            categories.find((c) => c.name === faq.category)
                              ?.icon
                          }
                        </span>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                categories.find((c) => c.name === faq.category)
                                  ?.color
                              }`}
                            >
                              {faq.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      {openIndex === index ? (
                        <FiChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      ) : (
                        <FiChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                      )}
                    </div>
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="pl-12 border-l-2 border-blue-500">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Quick Help */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Help Card */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <FiHelpCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Need Help?
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We're here to assist you
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Call Us</div>
                      <div className="text-gray-600 text-sm">
                        +86 123 4567 8900
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email Us</div>
                      <div className="text-gray-600 text-sm">
                        admissions@globalacademia.cn
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <FiMessageSquare className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Live Chat</div>
                      <div className="text-gray-600 text-sm">
                        Available 24/7
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Application Process", icon: "📝" },
                    { label: "Scholarship Guide", icon: "💰" },
                    { label: "Visa Requirements", icon: "🛂" },
                    { label: "Cost Calculator", icon: "🧮" },
                    { label: "Student Handbook", icon: "📖" },
                  ].map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                    >
                      <span className="text-xl">{link.icon}</span>
                      <span className="font-medium text-gray-700 group-hover:text-blue-600">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Download Brochure */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Download Complete Guide
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Get our comprehensive guide covering everything about studying
                  in China
                </p>
                <button className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300">
                  Download PDF Guide
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-12 border-t border-gray-200 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-8">
              Our education consultants are available to answer any specific
              questions about programs, admission, or life in China.
            </p>
            <button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
