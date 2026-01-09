import type { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  children,
}: PageHeroProps) {
  return (
    <div
      className="relative h-96 sm:h-[500px] bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-center overflow-hidden group"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.45) 100%), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }
          : {}
      }
    >
      {/* Animated Background Blur Effect (only when no image) */}
      {!backgroundImage && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-full blur-3xl -z-10 animate-pulse" />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/30 to-blue-700/30 rounded-full blur-3xl -z-10 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-gray-100 mb-8 font-medium">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
