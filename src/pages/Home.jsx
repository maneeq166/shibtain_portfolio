import React from "react";
import BG from "../assets/BG.jpg";
// import cloud from "../assets/Ellipse 5275.jpg";
import GlassmorphismButton from "../components/GlassmorphismButton";
import TestimonialCard from "../components/TestimonialCard";

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
    <div className="w-full h-screen">
      {/* <img src={cloud} alt="" /> */}

      {/* Centered content */}
      <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <img
          src={"/monitor.png"}
          alt=""
          className="absolute top-26 left-13 z-0"
        />

        <div className="">
          <h1
            className="z-20 font-gambarino text-[72px] font-normal leading-[84px] tracking-[-2.1px] text-white relative"
            style={{
              textShadow: "5px 5px 20px #805E33",
              filter: "contrast(1.05) brightness(0.95)",
            }}
          >
            Hey, I'm Shibtain <span className="text-[#5348ec]">(19)</span>
          </h1>
          <h1
            className="z-20 font-gambarino text-[72px] font-normal leading-[84px] tracking-[-2.1px] text-white relative"
            style={{
              textShadow: "5px 5px 20px #805E33",
              filter: "contrast(1.05) brightness(0.95)",
            }}
          >
            Graphic Dznr.
          </h1>
        </div>
      </div>
      <img
        src={BG}
        className="h-full w-full object-cover absolute top-0 left-0 -z-10"
        alt=""
      />
      <div className=" absolute top-[65%] flex flex-col align-items text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#F5F5DC] font-Inter font-medium">
        <p>From UI to campaigns and AI-driven media already</p>
        <p>designing for startups & driving numbers</p>

        <GlassmorphismButton className="mt-5">Know more</GlassmorphismButton>
      </div>

      <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 flex justify-center gap-6 w-full px-4 z-20 lg:gap-8 md:gap-7 sm:gap-5">
        <div className="flex flex-col gap-28 w-full max-w-7xl lg:flex-row lg:justify-center md:flex-row md:justify-center sm:flex-col sm:items-start">
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

      <img
        src="/bottom-shade.svg"
        alt=""
        className="absolute bottom-0 left-0 w-full z-10"
      />
    </div>
  );
}

export default Home;
