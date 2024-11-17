import React from "react";
import { Code, Play, Download, Smartphone, Keyboard } from "lucide-react";
import Link from "next/link";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  isReversed = false,
}: {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  isReversed?: boolean;
}) => (
  <div
    className={`group flex flex-col md:flex-row items-center gap-8 p-6 rounded-2xl hover:bg-gray-50/50 transition-all duration-300 ${
      isReversed ? "md:flex-row-reverse" : ""
    }`}
  >
    <div
      className={`relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-2xl bg-gradient-to-br ${
        isReversed
          ? "from-violet-500/90 to-blue-500/90"
          : "from-blue-500/90 to-violet-500/90"
      } shadow-lg shadow-blue-500/10 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl`}
    >
      <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <Icon className="w-12 h-12 md:w-16 md:h-16 text-white relative z-10" />
    </div>
    
    <div className="flex-1 text-center md:text-left">
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed max-w-lg">
        {description}
      </p>
    </div>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: Code,
      title: "Rich Code Editor",
      description:
        "Powerful editor with syntax highlighting, auto-completion, and multiple themes. Write HTML, CSS, and JavaScript with confidence and style.",
    },
    {
      icon: Play,
      title: "Realtime Preview",
      description:
        "See your changes instantly as you type. The live preview updates in real-time, making development faster and more intuitive.",
    },
    {
      icon: Download,
      title: "Downloadable Code",
      description:
        "Export your project anytime with a single click. Download all your files neatly packaged in a ZIP format, ready for deployment.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Test your designs across different screen sizes. Built-in responsive preview modes help ensure your code works everywhere.",
    },
    {
      icon: Keyboard,
      title: "Keyboard Shortcuts",
      description:
        "Boost your productivity with powerful keyboard shortcuts. Navigate, edit, and manage your code faster than ever.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50/50 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600/90 max-w-2xl mx-auto">
            Everything you need to code efficiently in one place
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center space-y-6">
          <Link 
            href="/editor"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Code className="w-5 h-5" />
            <span>Start Coding Now</span>
            <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <button className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 rounded-lg">
            <Keyboard className="w-4 h-4" />
            <span className="text-sm">View Keyboard Shortcuts</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
