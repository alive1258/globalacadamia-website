import {
  PiGraduationCap,
  // PiPassport doesn't exist, use PiIdentificationCard or PiIdentificationBadge instead
  PiIdentificationCard, // Alternative to passport
  PiClockClockwise,
  PiShieldCheck,
  PiGlobe,
  PiCertificate,
  PiUsers,
  PiCheckCircle,
  PiArrowRight,
} from "react-icons/pi";
import {
  FaRegCheckCircle,
  FaRegHandshake,
  FaRegClock,
  FaRegStar,
  FaRegFileAlt,
  FaRegChartBar,
  FaUserCheck,
} from "react-icons/fa";
import {
  MdOutlineTravelExplore,
  MdOutlineSupportAgent,
  MdOutlineVerifiedUser,
  MdOutlineSpeed,
} from "react-icons/md";
import { TbWorld, TbFileCheck, TbFileCertificate } from "react-icons/tb";
import visa from "../../../assets/image/visa.avif";

const VisaProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "Document Preparation",
      description: "We help gather and verify all required documents",
      icon: <FaRegFileAlt className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Application Submission",
      description: "Online submission to Chinese embassy/consulate",
      icon: <PiCertificate className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "Processing & Tracking",
      description: "Real-time tracking of your application status",
      icon: <PiClockClockwise className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      step: "04",
      title: "Visa Approval",
      description: "Receive your visa with our expert guidance",
      icon: <MdOutlineVerifiedUser className="w-6 h-6" />,
      color: "from-amber-500 to-orange-500",
    },
  ];

  const visaFeatures = [
    {
      icon: <PiShieldCheck className="w-6 h-6" />,
      title: "98% Success Rate",
      description: "Highest visa approval rate in the industry",
    },
    {
      icon: <MdOutlineSpeed className="w-6 h-6" />,
      title: "Fast Processing",
      description: "Average processing time: 15-20 working days",
    },
    {
      icon: <PiUsers className="w-6 h-6" />,
      title: "Expert Support",
      description: "Dedicated visa consultants available 24/7",
    },
    {
      icon: <TbWorld className="w-6 h-6" />,
      title: "Global Coverage",
      description: "Process visas for students from all countries",
    },
  ];

  const requirements = [
    "Valid passport with 6+ months validity",
    "Admission letter from Chinese university",
    "JW201/JW202 form from university",
    "Medical examination certificate",
    "Passport-sized photographs",
    "Financial proof documents",
    "Academic transcripts",
    "Police clearance certificate",
  ];

  return (
    <div className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-20"></div>

      <div className="relative container px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-75"></div>
              <div className="relative p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                {/* Changed from PiPassport to PiIdentificationCard */}
                <PiIdentificationCard className="w-7 h-7 text-white" />
              </div>
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              VISA ASSISTANCE
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hassle-Free
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
              Visa Processing
            </span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Experience our streamlined visa processing service with a 98%
            success rate. From document preparation to visa collection, we
            handle everything for you.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Image & Features */}
          <div className="space-y-8">
            {/* Image Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative">
                <img
                  src={visa}
                  className="w-full h-[380px] object-cover rounded-2xl shadow-xl group-hover:scale-[1.02] transition-transform duration-500"
                  alt="Visa Processing"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>

                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-4">
                    <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl">
                      <div className="text-2xl font-bold text-gray-900">
                        98%
                      </div>
                      <div className="text-sm font-medium text-gray-600">
                        Success Rate
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl">
                      <div className="text-2xl font-bold text-gray-900">
                        15-20
                      </div>
                      <div className="text-sm font-medium text-gray-600">
                        Days Processing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {visaFeatures.map((feature, index) => (
                <div key={index} className="group">
                  <div className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                        <div className="text-blue-600">{feature.icon}</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Process & Benefits */}
          <div className="space-y-8">
            {/* Process Steps */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <MdOutlineTravelExplore className="w-7 h-7 text-blue-600" />
                4-Step Visa Process
              </h2>

              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="group relative">
                    <div className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start gap-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 rounded-lg transition-opacity duration-300"></div>
                          <div
                            className={`relative w-14 h-14 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center`}
                          >
                            <span className="text-white font-bold text-lg">
                              {step.step}
                            </span>
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="text-gray-700">{step.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-gray-600">{step.description}</p>
                        </div>

                        <PiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements Section */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <TbFileCertificate className="w-6 h-6 text-blue-600" />
                Required Documents
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <PiCheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Our Visa Service?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MdOutlineSupportAgent className="w-8 h-8" />,
                title: "Expert Guidance",
                description:
                  "Our experienced consultants provide step-by-step guidance throughout the entire visa process",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: <FaRegHandshake className="w-8 h-8" />,
                title: "End-to-End Support",
                description:
                  "From document preparation to visa collection, we handle everything for you",
                color: "bg-emerald-50 text-emerald-600",
              },
              {
                icon: <FaRegChartBar className="w-8 h-8" />,
                title: "High Success Rate",
                description:
                  "98% success rate with thousands of successful student visa applications",
                color: "bg-purple-50 text-purple-600",
              },
            ].map((benefit, index) => (
              <div key={index} className="group">
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full">
                  <div
                    className={`mb-6 w-16 h-16 rounded-2xl ${benefit.color} flex items-center justify-center`}
                  >
                    {benefit.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="relative ">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Start Your Visa Application?
              </h3>

              <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                Let our experts handle your student visa process. Get free
                consultation and document checklist.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3.5 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
                  Start Visa Application
                </button>
                <button className="px-8 py-3.5 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white/10 transition-colors">
                  Download Checklist
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-6 text-blue-100">
                <div className="flex items-center gap-2">
                  <FaRegClock className="w-5 h-5" />
                  <span>24/7 Support</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <FaRegStar className="w-5 h-5" />
                  <span>98% Success Rate</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <FaUserCheck className="w-5 h-5" />
                  <span>5000+ Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaProcess;
