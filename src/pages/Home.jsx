import React from "react";
import GlassmorphismButton from "../components/GlassmorphismButton";
import TestimonialCard from "../components/TestimonialCard";
import MobileTestimonialCarousel from "../components/MobileTestimonialCarousel";
import { Link } from "react-router-dom";

function Home() {
  const testimonialData = [
    {
      title: `“Insane speed, he transformed the page effortlessly*”`,
      avatar: "/hardeep.svg",
      name: "Hardeep Gambhir",
      role: "Co-Founder @LocalHost Ventures",
    },
    {
      title: ` “I can vouch for his work”`,
      avatar: "/abdullah.svg",
      name: "Choudhary Abdullah",
      role: "Founder @ Superdev Pro",
    },
    {
      title: `“His brochure design for Muztream stood out at Riyadh event”`,
      avatar: "/salman.svg",
      name: "Salman Perwez Khan",
      role: "Founder @Muztream",
    },
  ];
  return (
    <div className="w-full h-screen noise-bg">
      <img
        src={"/paintings.svg"}
        alt=""
        className="hidden md:block absolute top-0 left-0 object-cover z-40 scale-[0.9] origin-left "
      />
      <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-50">
        <h1
          className="relative z-50 font-gambarino text-[55px] md:text-[80px] font-normal leading-[58px] md:leading-[84px] tracking-[-2.1px] text-[#F5F5DC]"
          style={{
            textShadow: "5px 5px 20px #805E33",
            filter: "blur(1px)",
          }}
        >
          Hey, I'm Shibtain <span className="text-[#5348ec]">(19)</span>
        </h1>
        <h1
          className="relative z-50 font-gambarino text-[55px] md:text-[80px] font-normal leading-[58px] md:leading-[84px] tracking-[-2.1px] text-[#F5F5DC] text-nowrap"
          style={{
            textShadow: "5px 5px 20px #805E33",
            filter: "blur(1px)",
          }}
        >
          Graphic Dznr.
        </h1>
      </div>
      <div className="text-sm md:text-base absolute top-[55%] md:top-[65%] flex flex-col align-items justify-center text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#F5F5DC] font-Inter font-medium gap-2">
        <p
          className="w-fit px-1 mx-auto text-nowrap"
          style={{
            background:
              "linear-gradient(90deg, rgba(50, 34, 30, 0.5) 50%, rgba(50, 34, 30, 0) 70.5%)",
          }}
        >
          From UI to campaigns and AI-driven media already
        </p>
        <p
          className="w-fit px-1 mx-auto text-nowrap"
          style={{
            background:
              "linear-gradient(90deg, rgba(50, 34, 30, 0.5) 50%, rgba(50, 34, 30, 0) 70.5%)",
          }}
        >
          designing for startups & driving numbers
        </p>

        <GlassmorphismButton className="mt-8 md:mt-5">
          {/* open in new tab https://talibshibtain.github.io/portfolio/ */}
          <Link to="https://talibshibtain.github.io/portfolio/" target="_blank">
            Know more
          </Link>
        </GlassmorphismButton>
      </div>

      {/* Testimonials - Desktop */}
      <div className="hidden absolute bottom-[5%] left-1/2 transform -translate-x-1/2 md:flex justify-center gap-6 w-full px-4 z-20 lg:gap-8 md:gap-7 sm:gap-5">
        <div className="flex flex-col justify-between w-full max-w-7xl lg:flex-row lg:justify-between md:flex-row md:justify-between sm:flex-col sm:items-end">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              title={testimonial.title}
              avatar={testimonial.avatar}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>

      {/* Mobile Testimonial Carousel */}
      <MobileTestimonialCarousel testimonials={testimonialData} />

      <img
        src="/bottom-shade.svg"
        alt=""
        className="absolute bottom-0 left-0 w-full z-10"
      />
    </div>
  );
}

export default Home;
