import React, { useEffect, useState } from "react";
import {
  BiSolidQuoteRight,
  BiChevronLeft,
  BiChevronRight,
} from "react-icons/bi";
import { PiGraduationCap, PiStarFill, PiMapPin } from "react-icons/pi";
import { FaFlag, FaUniversity, FaCalendarAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  const [allStudents, setAllStudents] = useState([]);
  const [profileIndex, setProfileIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    // Fetch your actual student data
    fetch("students.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); // Debug log
        setAllStudents(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Fallback mock data if fetch fails
        const mockData = [
          {
            name1: "John Doe",
            name2: "Jane Smith",
            name3: "Mike Johnson",
            varsity1: "Sichuan University",
            varsity2: "Beijing University",
            varsity3: "Shanghai University",
            des1: "Great experience studying in China with full scholarship!",
            des2: "Excellent education system and supportive environment.",
            des3: "Life-changing opportunity with amazing facilities.",
            image1:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            image2:
              "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            image3:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          },
        ];
        setAllStudents(mockData);
      });

    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Autoplay functionality
  useEffect(() => {
    let intervalId;
    if (autoplay && allStudents.length > 0) {
      intervalId = setInterval(() => {
        setProfileIndex((prevIndex) => (prevIndex + 1) % allStudents.length);
      }, 5000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoplay, profileIndex, allStudents]);

  const profile = allStudents[profileIndex] || {};

  const handlePrev = () => {
    setProfileIndex((prev) => (prev === 0 ? allStudents.length - 1 : prev - 1));
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  const handleNext = () => {
    setProfileIndex((prev) => (prev + 1) % allStudents.length);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  // Function to extract country from name (simple approach)
  const getCountryFromName = (name) => {
    const nameToCountry = {
      Alex: "United States",
      Sarah: "Singapore",
      Mohammed: "Bangladesh",
      John: "United Kingdom",
      Jane: "Canada",
      Mike: "Australia",
      // Add more mappings as needed
    };

    const firstName = name?.split(" ")[0];
    return nameToCountry[firstName] || "International Student";
  };

  // Function to get program from university
  const getProgramFromUniversity = (university) => {
    const universityPrograms = {
      "Sichuan University": "Computer Science",
      "Tsinghua University": "Business Administration",
      "Peking University": "Mechanical Engineering",
      "Beijing University": "Electrical Engineering",
      "Shanghai University": "Civil Engineering",
      // Add more mappings as needed
    };
    return universityPrograms[university] || "Engineering";
  };

  // Function to generate graduation year
  const getGraduationYear = (index) => {
    const currentYear = new Date().getFullYear();
    return (currentYear - index).toString();
  };

  // Function to generate rating
  const getRating = (index) => {
    return [5, 4, 5][index % 3]; // Alternating ratings
  };

  const StudentCard = ({ studentNum }) => {
    const studentData = {
      1: {
        name: profile?.name1,
        university: profile?.varsity1,
        description: profile?.des1,
        image: profile?.image1,
      },
      2: {
        name: profile?.name2,
        university: profile?.varsity2,
        description: profile?.des2,
        image: profile?.image2,
      },
      3: {
        name: profile?.name3,
        university: profile?.varsity3,
        description: profile?.des3,
        image: profile?.image3,
      },
    }[studentNum];

    if (!studentData?.name) return null;

    return {
      name: studentData.name,
      university: studentData.university,
      description: studentData.description,
      image: studentData.image,
      country: getCountryFromName(studentData.name),
      program: getProgramFromUniversity(studentData.university),
      year: getGraduationYear(studentNum),
      rating: getRating(studentNum),
    };
  };

  const renderRating = (rating) => {
    return [...Array(5)].map((_, i) => (
      <PiStarFill
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-100 rounded-full opacity-20"></div>

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-600 px-6 py-2 rounded-full mb-6">
            <PiGraduationCap className="text-lg" />
            <span className="font-semibold text-sm">SUCCESS STORIES</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Students Say</span>
          </h1>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-blue-200"></div>
            <BiSolidQuoteRight className="text-3xl text-blue-500" />
            <div className="h-px w-16 bg-blue-200"></div>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from international students who achieved their dreams through
            our 100% scholarship programs in China
          </p>
        </div>

        {/* Debug: Show current profile data */}
        {allStudents.length === 0 && (
          <div className="text-center text-gray-500 mb-8">
            Loading student testimonials...
          </div>
        )}

        {/* Navigation Controls - Only show if we have data */}
        {allStudents.length > 0 && (
          <>
            <div className="flex justify-center items-center gap-6 mb-8">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors shadow-sm"
                aria-label="Previous testimonial"
              >
                <BiChevronLeft className="text-2xl text-gray-600" />
              </button>

              <div className="flex gap-2">
                {allStudents.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setProfileIndex(index);
                      setAutoplay(false);
                      setTimeout(() => setAutoplay(true), 10000);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === profileIndex
                        ? "bg-blue-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors shadow-sm"
                aria-label="Next testimonial"
              >
                <BiChevronRight className="text-2xl text-gray-600" />
              </button>
            </div>

            {/* Testimonial Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[1, 2, 3].map((studentNum) => {
                const student = StudentCard(studentNum);
                if (!student?.name) return null;

                return (
                  <div
                    key={studentNum}
                    data-aos="fade-up"
                    data-aos-delay={studentNum * 100}
                    className="group relative"
                  >
                    {/* Card */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 text-blue-100 group-hover:text-blue-200 transition-colors">
                        <BiSolidQuoteRight className="text-6xl" />
                      </div>

                      {/* Student Info */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <img
                            src={student.image}
                            alt={student.name}
                            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://via.placeholder.com/80/3b82f6/ffffff?text=Student";
                            }}
                          />
                          <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-full">
                            <FaFlag className="text-xs" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900">
                            {student.name}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <PiMapPin />
                            <span>{student.country}</span>
                          </div>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {renderRating(student.rating)}
                        <span className="text-gray-500 text-sm ml-2">
                          {student.rating}.0
                        </span>
                      </div>

                      {/* Testimonial Text */}
                      <div className="mb-6">
                        <p className="text-gray-700 italic leading-relaxed line-clamp-4">
                          "{student.description}"
                        </p>
                      </div>

                      {/* University & Program Info */}
                      <div className="space-y-3 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-50 rounded-lg">
                            <FaUniversity className="text-blue-600" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">
                              University
                            </div>
                            <div className="font-semibold text-gray-900">
                              {student.university}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-50 rounded-lg">
                            <PiGraduationCap className="text-green-600" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Program</div>
                            <div className="font-semibold text-gray-900">
                              {student.program}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-purple-50 rounded-lg">
                            <FaCalendarAlt className="text-purple-600" />
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">
                              Graduation Year
                            </div>
                            <div className="font-semibold text-gray-900">
                              {student.year}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Scholarship Badge */}
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                      100% Scholarship
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats Section */}
            <div
              className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {allStudents.length * 3}+
                  </div>
                  <div className="text-gray-700">Successful Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    98%
                  </div>
                  <div className="text-gray-700">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    100%
                  </div>
                  <div className="text-gray-700">Scholarship Success</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-700">Partner Universities</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* CTA Section */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to share your success story?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Apply Now
            </button>
            <button className="bg-white text-blue-600 border border-blue-200 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Share Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
