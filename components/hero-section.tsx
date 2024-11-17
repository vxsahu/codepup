import React from 'react';
import { Code, Terminal, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative container max-w-6xl mx-auto pt-20 lg:pt-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column - Enhanced Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20"
              >
                <Zap className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm text-blue-400">Now in Beta</span>
              </motion.div>

              <h1 className="text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight font-bold text-white">
                Code Simply.
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Build Beautifully.
                </span>
              </h1>
            </div>

            <p className="text-lg text-gray-400 max-w-xl">
              A lightning-fast code editor for the modern web. Write, preview,
              and share your HTML, CSS, and JavaScript instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.98 }}
                href="/editor"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500 text-white font-medium transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <Terminal className="w-5 h-5 mr-2" />
                Start Coding
              </motion.a>

              <motion.a
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.98 }}
                href="#learn-more"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-700 text-gray-300 font-medium hover:bg-gray-800 transition-colors"
              >
                Learn more
              </motion.a>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" />
                No setup required
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" />
                Free forever
              </div>
            </div>
          </motion.div>

          {/* Right Column - Enhanced Preview Window */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              type: "tween",
              ease: "easeOut",
            }}
            className="flex-1 w-full"
          >
            <div className="rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-gray-700/50">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Code className="w-4 h-4" />
                  <span>index.html</span>
                </div>
              </div>

              <div className="p-6">
                <pre className="text-sm leading-relaxed">
                  <code className="text-gray-300">
                    {`<!DOCTYPE html>
<html>
  <head>
    <title>My Project</title>
  </head>
  <body>
    <h1>Hello, World! ✨</h1>
  </body>
</html>`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;