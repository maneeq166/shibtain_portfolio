import React from "react";
// import BG from "../assets/BG.jpg";
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
    <div className="w-full h-screen noise-bg">
      {/* Noise overlay */}
      {/* <div className="absolute inset-0 bg-[#181818]/90"></div> */}

      {/* <img src={cloud} alt="" /> */}

      {/* Painting */}
      <img
        src={"/paintings.svg"}
        alt=""
        className="absolute top-0 left-0 object-cover z-40"
      />

      {/* Centered content */}
      <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-50">
        <h1
          className="relative z-50 font-gambarino text-[80px] font-normal leading-[84px] tracking-[-2.1px] text-[#F5F5DC]"
          style={{
            textShadow: "5px 5px 20px #805E33",
            filter: "blur(1px)",
          }}
        >
          Hey, I'm Shibtain <span className="text-[#5348ec]">(19)</span>
        </h1>
        <h1
          className="relative z-50 font-gambarino text-[80px] font-normal leading-[84px] tracking-[-2.1px] text-[#F5F5DC]"
          style={{
            textShadow: "5px 5px 20px #805E33",
            filter: "blur(1px)",
          }}
        >
          Graphic Dznr.
        </h1>
      </div>
      {/* <img
        src={BG}
        className="h-full w-full object-cover absolute top-0 left-0 -z-10"
        alt=""
      /> */}
      <div className=" absolute top-[65%] flex flex-col align-items justify-center text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#F5F5DC] font-Inter font-medium gap-2">
        <p
          className="w-fit px-1 mx-auto"
          style={{
            background:
              "linear-gradient(90deg, rgba(50, 34, 30, 0.5) 50%, rgba(50, 34, 30, 0) 70.5%)",
          }}
        >
          From UI to campaigns and AI-driven media already
        </p>
        <p
          className="w-fit px-1 mx-auto"
          style={{
            background:
              "linear-gradient(90deg, rgba(50, 34, 30, 0.5) 50%, rgba(50, 34, 30, 0) 70.5%)",
          }}
        >
          designing for startups & driving numbers
        </p>

        <GlassmorphismButton className="mt-5">Know more</GlassmorphismButton>
      </div>

      <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 flex justify-center gap-6 w-full px-4 z-20 lg:gap-8 md:gap-7 sm:gap-5">
        <div className="flex flex-col justify-between w-full max-w-7xl lg:flex-row lg:justify-between md:flex-row md:justify-between sm:flex-col sm:items-start">
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
