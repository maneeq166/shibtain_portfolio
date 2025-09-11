import { ArrowRight } from "lucide-react";

const GlassmorphismButton = ({
  children,
  onClick,
  className = "",
  showArrow = true,
  variant = "default",
  size = "default",
}) => {
  const baseClasses =
    "flex justify-center items-center border-2 border-white/15 bg-white/15 backdrop-blur-[2px] shadow-lg relative overflow-hidden gap-2 font-Inter font-semibold text-[#FFFFFF] transition-all duration-300 hover:bg-white/20 hover:border-white/25";

  const sizeClasses = {
    small: "px-3 py-2 text-sm",
    default: "px-5 py-4 text-[16px]",
    large: "px-6 py-5 text-lg",
  };

  const variantClasses = {
    default: "w-fit mx-auto",
    full: "w-full",
    fixed: "w-[150px] h-[54px]",
  };

  return (
    <div
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50"></div>

      {/* Noise overlay */}
      <div className="absolute inset-0 bg-[#181818]/15 mix-blend-overlay"></div>

      {/* Button content */}
      <button
        onClick={onClick}
        className="relative z-10 flex items-center gap-2 w-full h-full justify-center"
      >
        {children}
        {showArrow && <ArrowRight className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default GlassmorphismButton;
