interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
  children,
}: PageHeroProps) {
  return (
    <div
      className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-center"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl text-gray-100 mb-8">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}
