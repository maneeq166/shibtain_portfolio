export default function TestimonialCard({
  title = "",
  avatar = "",
  name = "",
  role = "",
}) {
  return (
    <div className="bg-[#3232325C] w-full max-w-[300px] min-w-[140px] h-fit rounded-lg border border-[#BCBCBC] p-1.5 backdrop-blur-[1px] flex flex-col gap-1.5 z-50 lg:p-4 lg:max-w-[300px] md:p-3 md:max-w-[240px] sm:p-1.5 sm:max-w-[180px] scale-[0.9]">
      <p className="font-Inter font-medium text-[#F5F5DC] text-xs lg:text-sm md:text-xs sm:text-[9px]">
        {title}
      </p>
      <div className="flex items-center gap-1.5">
        <img
          src={avatar}
          alt=""
          className="w-6 h-6 lg:w-8 lg:h-8 md:w-7 md:h-7 sm:w-6 sm:h-6"
        />
        <div className="flex flex-col gap-0.5">
          <p className="font-Inter font-medium text-[#F5F5DC] text-xs lg:text-sm md:text-xs sm:text-[9px]">
            {name}
          </p>
          <p className="font-Inter font-medium text-[#F5F5DC] text-[10px] lg:text-xs md:text-[10px] sm:text-[8px]">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
