import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./Banner.css";

const Banner = () => {
  const slides = [
    {
      id: 1,
      className: "slide1",
      title: "100% Scholarship Program",
      subtitle: "Study in China",
      degrees: ["Diploma", "Bachelor", "Master", "Ph.D"],
      description: "Fully-funded opportunities for international students",
      cta: "Apply Now",
    },
    {
      id: 2,
      className: "slide2",
      title: "World-Class Education",
      subtitle: "Top Chinese Universities",
      degrees: ["Engineering", "Medicine", "Business", "Technology"],
      description:
        "Study at globally ranked institutions with modern facilities",
      cta: "Explore Universities",
    },
    {
      id: 3,
      className: "slide3",
      title: "Cultural Experience",
      subtitle: "Live & Learn in China",
      degrees: ["Language", "Culture", "Networking", "Career"],
      description:
        "Immerse yourself in rich heritage while building your future",
      cta: "Learn More",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        className="banner-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`${slide.className} relative flex items-center md:h-[90vh] h-[60vh] min-h-[500px]`}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30 z-0"></div>

              <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-12">
                <div className="max-w-3xl">
                  {/* Badge */}
                  <div className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                    Limited Seats Available
                  </div>

                  {/* Main Content */}
                  <div className="space-y-4 md:space-y-6">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      {slide.title}
                      <br />
                      <span className="text-yellow-300">{slide.subtitle}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-2xl">
                      {slide.description}
                    </p>

                    {/* Degrees/Categories */}
                    <div className="flex flex-wrap gap-3 md:gap-4 pt-4">
                      {slide.degrees.map((degree, index) => (
                        <div
                          key={index}
                          className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2"
                        >
                          <span className="text-white font-semibold text-base md:text-lg">
                            {degree}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-yellow-300">
                          500+
                        </div>
                        <div className="text-white text-sm md:text-base">
                          Universities
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-yellow-300">
                          50,000+
                        </div>
                        <div className="text-white text-sm md:text-base">
                          Students
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-yellow-300">
                          100%
                        </div>
                        <div className="text-white text-sm md:text-base">
                          Scholarship
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-yellow-300">
                          200+
                        </div>
                        <div className="text-white text-sm md:text-base">
                          Programs
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-8">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                        {slide.cta}
                      </button>
                      <button className="bg-transparent border-2 border-white hover:bg-white/20 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
                        View Programs
                      </button>
                    </div>

                    {/* Trust Indicator */}
                    <div className="pt-6 flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"
                          ></div>
                        ))}
                      </div>
                      <span className="text-gray-200 text-sm md:text-base">
                        <span className="font-bold">1,200+</span> students
                        enrolled this month
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="text-white">
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
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
