"use client";
import { useState, useEffect, useRef } from "react";
import {
  Code2,
  FileCode,
  Database,
  Palette,
  GitBranch,
  Server,
  Globe,
  Layers,
} from "lucide-react";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [particles, setParticles] = useState([]);
  const [tooltipPosition, setTooltipPosition] = useState({});
  const skillsRef = useRef(null);

  const skillsData = [
    {
      name: "Next.js",
      proficiency: "Expert",
      experience: "1.5+ years",
      projects: 8,
      description:
        "React framework for production-grade applications with SSR and SSG capabilities",
      icon: Globe,
      color: "hover:bg-gray-900 hover:text-white",
    },
    {
      name: "React.js",
      proficiency: "Expert",
      experience: "1.5+ years",
      projects: 12,
      description:
        "JavaScript library for building dynamic and interactive user interfaces",
      icon: Code2,
      color: "hover:bg-indigo-600 hover:text-white",
    },
    {
      name: "TypeScript",
      proficiency: "Advanced",
      experience: "1+ years",
      projects: 6,
      description:
        "Typed superset of JavaScript for better development experience",
      icon: FileCode,
      color: "hover:bg-blue-600 hover:text-white",
    },
    {
      name: "Node.js",
      proficiency: "Expert",
      experience: "1.5+ years",
      projects: 10,
      description: "JavaScript runtime for server-side development and APIs",
      icon: Server,
      color: "hover:bg-green-600 hover:text-white",
    },
    {
      name: "Express.js",
      proficiency: "Advanced",
      experience: "1+ years",
      projects: 8,
      description: "Fast, minimalist web framework for Node.js applications",
      icon: Layers,
      color: "hover:bg-gray-800 hover:text-white",
    },
    {
      name: "MongoDB",
      proficiency: "Advanced",
      experience: "1+ years",
      projects: 7,
      description: "NoSQL database for modern, scalable applications",
      icon: Database,
      color: "hover:bg-green-500 hover:text-white",
    },
    {
      name: "Tailwind CSS",
      proficiency: "Expert",
      experience: "1.5+ years",
      projects: 15,
      description: "Utility-first CSS framework for rapid UI development",
      icon: Palette,
      color: "hover:bg-cyan-500 hover:text-white",
    },
    {
      name: "Git",
      proficiency: "Expert",
      experience: "1.5+ years",
      projects: 20,
      description:
        "Version control system for tracking code changes and collaboration",
      icon: GitBranch,
      color: "hover:bg-orange-500 hover:text-white",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const createParticles = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: centerX,
      y: centerY,
      angle: (i / 8) * Math.PI * 2,
      velocity: 2 + Math.random() * 2,
    }));

    setParticles((prev) => [...prev, ...newParticles]);

    // Remove particles after animation
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.includes(p)));
    }, 1000);
  };

  const calculateTooltipPosition = (event, skillName) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const tooltipWidth = 320; // min-w-80 = 320px
    const tooltipHeight = 200; // approximate height
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const position = {
      placement: "top",
      left: "50%",
      transform: "-translate-x-1/2",
      arrowClass: "top-full border-t-white",
    };

    // Check if tooltip would overflow on the right
    if (rect.left + rect.width / 2 + tooltipWidth / 2 > viewportWidth - 20) {
      position.left = "auto";
      position.right = "0";
      position.transform = "none";
    }
    // Check if tooltip would overflow on the left
    else if (rect.left + rect.width / 2 - tooltipWidth / 2 < 20) {
      position.left = "0";
      position.transform = "none";
    }

    // Check if tooltip would overflow at the top
    if (rect.top - tooltipHeight < 20) {
      position.placement = "bottom";
      position.arrowClass = "bottom-full border-b-white";
    }

    setTooltipPosition({ [skillName]: position });
  };

  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case "Expert":
        return "bg-green-100 text-green-800 border-green-200";
      case "Advanced":
        return "bg-indigo-100 text-indigo-800 border-indigo-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div
      ref={skillsRef}
      className="w-full max-w-6xl mx-auto px-4 py-16 relative overflow-visible"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-indigo-50 animate-gradient-shift opacity-60"></div>

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-indigo-400 rounded-full animate-particle-burst pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
            "--angle": `${particle.angle}rad`,
            "--velocity": particle.velocity,
          }}
        />
      ))}

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl font-black text-gray-700 mb-4 font-montserrat">
          Skills & Technologies
        </h2>
        <p className="text-lg text-gray-600 font-open-sans">
          Hover over each skill to explore my expertise and experience
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 relative z-10">
        {skillsData.map((skill, index) => {
          const IconComponent = skill.icon;
          const currentTooltipPos = tooltipPosition[skill.name] || {};

          return (
            <div
              key={skill.name}
              className="relative group"
              onMouseEnter={(e) => {
                setHoveredSkill(skill.name);
                createParticles(e);
                calculateTooltipPosition(e, skill.name); // Calculate position on hover
              }}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Skill Container with Morphing Effect */}
              <div
                className={`
                  relative w-24 h-24 mx-auto bg-white flex items-center justify-center 
                  cursor-pointer transition-all duration-500 transform 
                  border-2 border-gray-200 shadow-lg group-hover:shadow-2xl
                  ${skill.color}
                  ${
                    hoveredSkill === skill.name
                      ? "rounded-full scale-110 animate-morph-to-circle"
                      : "rounded-2xl hover:scale-105 animate-morph-to-square"
                  }
                  ${isVisible ? "animate-bounce-in" : "opacity-0"}
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <IconComponent
                  size={32}
                  className={`transition-all duration-300 ${
                    hoveredSkill === skill.name ? "scale-125" : ""
                  }`}
                />

                {/* Glow Effect */}
                <div
                  className={`
                  absolute inset-0 rounded-full bg-indigo-400 opacity-0 
                  group-hover:opacity-20 transition-opacity duration-300 blur-xl
                  ${hoveredSkill === skill.name ? "animate-pulse" : ""}
                `}
                ></div>
              </div>

              {/* Skill Name */}
              <p
                className="text-center text-sm font-bold text-gray-700 mt-3 font-montserrat
                         group-hover:text-gray-900 transition-colors duration-300"
              >
                {skill.name}
              </p>

              {/* Enhanced Tooltip with Dynamic Positioning */}
              {hoveredSkill === skill.name && (
                <div
                  className={`absolute z-50 ${
                    currentTooltipPos.placement === "bottom"
                      ? "top-full mt-4"
                      : "bottom-full mb-4"
                  }`}
                  style={{
                    left: currentTooltipPos.left,
                    right: currentTooltipPos.right,
                    transform: currentTooltipPos.transform,
                  }}
                >
                  <div
                    className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 min-w-80 
                                animate-tooltip-appear backdrop-blur-sm bg-white/95"
                  >
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3">
                        <IconComponent
                          size={24}
                          className="text-indigo-600 mr-2"
                        />
                        <h3 className="font-black text-gray-800 text-lg font-montserrat">
                          {skill.name}
                        </h3>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed font-open-sans">
                        {skill.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div className="text-center">
                          <div className="text-gray-500 font-open-sans">
                            Experience
                          </div>
                          <div className="font-bold text-gray-800 font-montserrat">
                            {skill.experience}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-gray-500 font-open-sans">
                            Projects
                          </div>
                          <div className="font-bold text-gray-800 font-montserrat">
                            {skill.projects}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <span
                          className={`px-4 py-2 rounded-full text-sm font-bold border-2 ${getProficiencyColor(
                            skill.proficiency
                          )} font-montserrat`}
                        >
                          {skill.proficiency}
                        </span>
                      </div>
                    </div>

                    {/* Dynamic Tooltip Arrow */}
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 
                                  border-l-8 border-r-8 border-transparent drop-shadow-sm
                                  ${
                                    currentTooltipPos.placement === "bottom"
                                      ? "bottom-full border-b-8 border-b-white"
                                      : "top-full border-t-8 border-t-white"
                                  }`}
                      style={{
                        left:
                          currentTooltipPos.left === "0"
                            ? "20px"
                            : currentTooltipPos.right === "0"
                            ? "calc(100% - 20px)"
                            : "50%",
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
