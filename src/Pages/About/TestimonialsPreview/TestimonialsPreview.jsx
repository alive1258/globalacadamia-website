import React, { useState } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaUniversity,
} from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const TestimonialsPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Hossain",
      university: "Peking University",
      program: "Computer Science",
      country: "Bangladesh",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      quote:
        "Global Academia made my dream come true! The 100% scholarship they secured for me at Peking University has changed my life completely.",
      rating: 5,
      year: "2023",
    },
    {
      id: 2,
      name: "Fatima Akter",
      university: "Tsinghua University",
      program: "Business Administration",
      country: "Bangladesh",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      quote:
        "The support I received from application to arrival in China was exceptional. They guided me through every step with patience and expertise.",
      rating: 5,
      year: "2022",
    },
    {
      id: 3,
      name: "Mohammad Rahman",
      university: "Fudan University",
      program: "Mechanical Engineering",
      country: "Bangladesh",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      quote:
        "100% scholarship with accommodation! I never thought studying at a top Chinese university was possible for me. Thank you Global Academia!",
      rating: 5,
      year: "2023",
    },
    {
      id: 4,
      name: "Sadia Islam",
      university: "Shanghai Jiao Tong University",
      program: "Biotechnology",
      country: "Bangladesh",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      quote:
        "The visa process was seamless with their expert guidance. Now I'm pursuing my PhD with full scholarship in Shanghai.",
      rating: 5,
      year: "2024",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full mb-6">
            <PiStudentBold className="text-xl" />
            <span className="font-semibold">SUCCESS STORIES</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hear From Our
            <span className="text-blue-600"> Successful Students</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of students who achieved their dreams with 100%
            scholarships in China
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full -translate-x-32 -translate-y-32 opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full translate-x-48 translate-y-48 opacity-20"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="grid md:grid-cols-2">
                {/* Left Side - Student Info */}
                <div className="p-12 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <div className="flex flex-col items-center text-center">
                    {/* Student Image */}
                    <div className="relative mb-6">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full">
                        <FaGraduationCap className="text-sm" />
                      </div>
                    </div>

                    {/* Student Details */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {testimonials[currentIndex].name}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <FaMapMarkerAlt />
                      <span>{testimonials[currentIndex].country}</span>
                    </div>

                    {/* University Info */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <FaUniversity className="text-blue-500" />
                        <span className="font-semibold">
                          {testimonials[currentIndex].university}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaGraduationCap className="text-green-500" />
                        <span>{testimonials[currentIndex].program}</span>
                      </div>
                      <div className="text-blue-600 font-bold">
                        Class of {testimonials[currentIndex].year}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mt-6">
                      {renderStars(testimonials[currentIndex].rating)}
                      <span className="text-gray-600 ml-2">
                        {testimonials[currentIndex].rating}.0/5.0
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Testimonial Text */}
                <div className="p-12 flex flex-col justify-center">
                  <FaQuoteLeft className="text-4xl text-blue-200 mb-6" />

                  <p className="text-xl text-gray-700 italic leading-relaxed mb-8">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span>Currently Studying in China</span>
                    </div>
                    <FaQuoteRight className="text-4xl text-blue-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation and Indicators */}
          <div className="flex items-center justify-between mt-8">
            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors shadow-sm"
              >
                <BsArrowLeft className="text-xl text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-colors shadow-sm"
              >
                <BsArrowRight className="text-xl text-gray-600" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* View All Button */}
            <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
              View All Stories
              <BsArrowRight />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "5000+", label: "Students Placed" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "100%", label: "Scholarship Success" },
            { value: "10+", label: "Years Experience" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
