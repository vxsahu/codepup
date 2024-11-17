import React from "react";
import { Github, Twitter, Heart, Coffee } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="group flex items-center space-x-3 rounded-full">
              <Image
                src="/codepup.webp"
                alt="CodePup Logo"
                width={48}
                height={48}
                className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 will-change-transform"
              />
              <span className="text-xl font-extrabold bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent [background-size:200%] animate-gradient">
                CodePup
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              The world&apos;s simplest code editor for HTML, CSS, and
              JavaScript. Built with{" "}
              <span className="inline-block animate-pulse">❤️</span> for
              developers.
            </p>
            <div className="flex space-x-5">
              <a
                href="https://github.com/vxsahu/codepup"
                className="text-gray-400 hover:text-white transform hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/vxsahu"
                className="text-gray-400 hover:text-white transform hover:scale-110 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Resources Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Resources</h3>
              <ul className="space-y-3">
                {["Editor", "Templates", "Features", "Keyboard Shortcuts"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`/${item.toLowerCase().replace(" ", "-")}`}
                        className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-flex items-center group"
                      >
                        <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all">
                          →
                        </span>
                        <span className="ml-2">{item}</span>
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-3">
                {["About", "Contact", "Privacy Policy", "Terms of Service"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`/${item.toLowerCase().replace(" ", "-")}`}
                        className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-flex items-center group"
                      >
                        <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all">
                          →
                        </span>
                        <span className="ml-2">{item}</span>
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} CodePup. All rights reserved.
            </div>

            {/* Support Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/sponsors/codepup"
                className="text-sm flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors group"
              >
                <Heart className="h-4 w-4 group-hover:animate-pulse" />
                <span>Sponsor</span>
              </a>
              <a
                href="https://buymeacoffee.com/codepup"
                className="text-sm flex items-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors group"
              >
                <Coffee className="h-4 w-4 group-hover:animate-bounce" />
                <span>Buy me a coffee</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
