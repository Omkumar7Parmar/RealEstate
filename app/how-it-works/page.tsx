"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PageHero from "@/components/PageHero";
import { Check, Search, Save, Calendar, Handshake, BarChart3, Users, Briefcase, Star, TrendingUp } from "lucide-react";
import { useFirebaseAuth } from "@/hooks/useFirebaseAuth";

const customEasing: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const StepCard = ({ number, icon, title, description, delay }: StepProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: customEasing, delay }}
    viewport={{ once: true, margin: "-100px" }}
    className="group relative"
  >
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] border border-white/50 hover:border-gray-100/80 transition-all duration-300 hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.15)] h-full">
      {/* Step Number Badge */}
      <div className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
        {number}
      </div>

      {/* Icon */}
      <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-violet-100 to-fuchsia-50 group-hover:from-violet-200 group-hover:to-fuchsia-100 transition-colors duration-300">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>

      {/* Check Mark */}
      <div className="mt-6 inline-flex p-2 rounded-full bg-emerald-100">
        <Check className="w-5 h-5 text-emerald-600" />
      </div>
    </div>
  </motion.div>
);

export default function HowItWorksPage() {
  const { isAuthenticated, isLoading } = useFirebaseAuth();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const buyerSteps = [
    {
      icon: <Search className="w-8 h-8 text-violet-600" />,
      title: "Search & Discover",
      description: "Browse thousands of properties using filters like location, price, size, and amenities. Find properties that match your criteria.",
    },
    {
      icon: <Save className="w-8 h-8 text-violet-600" />,
      title: "Save Favorites",
      description: "Create a personalized wishlist of properties you love. Get instant notifications when similar properties are listed.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-violet-600" />,
      title: "Schedule Viewings",
      description: "Connect directly with agents to schedule property viewings. Choose times that work best for you.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-violet-600" />,
      title: "Make Offer & Close",
      description: "Negotiate terms with sellers through our platform. Complete documentation and close the deal seamlessly.",
    },
  ];

  const sellerSteps = [
    {
      icon: <Briefcase className="w-8 h-8 text-emerald-600" />,
      title: "List Property",
      description: "Upload property details, professional photos, and documents. Our team verifies all listings for quality.",
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: "Connect with Buyers",
      description: "Get exposure to thousands of qualified buyers. Manage inquiries directly through our platform.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-600" />,
      title: "Schedule Showings",
      description: "Coordinate property viewings with interested buyers. Our system handles scheduling and reminders.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
      title: "Close with Confidence",
      description: "Complete transactions securely with buyer support and documentation assistance every step of the way.",
    },
  ];

  const agentSteps = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Build Your Profile",
      description: "Create a professional agent profile with credentials, experience, and service areas. Showcase your expertise.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "List Properties",
      description: "Manage and promote your listings. Use our marketing tools to reach more potential buyers.",
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: "Build Reputation",
      description: "Earn client reviews and testimonials. Let satisfied customers showcase your expertise and professionalism.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Grow Your Business",
      description: "Access analytics, leads, and insights. Scale your business with our comprehensive agent tools.",
    },
  ];

  return (
    <>
      <PageHero
        title="How It Works"
        subtitle="Simple, transparent steps to achieve your real estate goals"
      />

      <section className="max-w-[90vw] lg:max-w-7xl xl:max-w-screen-2xl mx-auto px-6 lg:px-12 xl:px-20 py-[clamp(6rem,12vw,10rem)]">
        {/* For Buyers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: customEasing }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: customEasing }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
            >
              For Buyers
            </motion.h2>
            <p className="text-xl text-gray-700 max-w-3xl">
              Find your perfect home with our intuitive search and seamless buying experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buyerSteps.map((step, index) => (
              <StepCard
                key={index}
                number={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* For Sellers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: customEasing }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: customEasing }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
            >
              For Sellers
            </motion.h2>
            <p className="text-xl text-gray-700 max-w-3xl">
              Sell your property confidently with our comprehensive seller support and buyer management tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sellerSteps.map((step, index) => (
              <StepCard
                key={index}
                number={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* For Agents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: customEasing }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: customEasing }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
            >
              For Agents
            </motion.h2>
            <p className="text-xl text-gray-700 max-w-3xl">
              Grow your real estate business with powerful tools, leads, and a trusted platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agentSteps.map((step, index) => (
              <StepCard
                key={index}
                number={index + 1}
                icon={step.icon}
                title={step.title}
                description={step.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </section>


    </>
  );
}
