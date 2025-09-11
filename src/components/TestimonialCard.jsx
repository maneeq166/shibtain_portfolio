export default function TestimonialCard({
  title = "",
  avatar = "",
  name = "",
  role = "",
}) {
  return (
    <div className="bg-[#3232325C] w-full max-w-[370px] min-w-[200px] h-fit rounded-lg border border-[#BCBCBC] p-2 backdrop-blur-[5px] flex flex-col gap-2 z-50 lg:p-6 lg:max-w-[370px] md:p-4 md:max-w-[300px] sm:p-2 sm:max-w-[250px]">
      <p className="font-Inter font-medium text-[#F5F5DC] text-sm lg:text-base md:text-sm sm:text-xs">
        {title}
      </p>
      <div className="flex items-center gap-2">
        <img
          src={avatar}
          alt=""
          className="w-8 h-8 lg:w-10 lg:h-10 md:w-9 md:h-9 sm:w-8 sm:h-8"
        />
        <div className="flex flex-col gap-1">
          <p className="font-Inter font-medium text-[#F5F5DC] text-sm lg:text-base md:text-sm sm:text-xs">
            {name}
          </p>
          <p className="font-Inter font-medium text-[#F5F5DC] text-xs lg:text-sm md:text-xs sm:text-xs">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
