import React from "react";
import { Code, Play, Download } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/40 to-white py-32 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600/90">
            Create, preview, and export your code in three simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-16">
            {/* Step 1: Write Code */}
            <div
              className="group relative min-h-64"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative h-full rounded-2xl bg-white p-8 shadow-lg shadow-slate-200/50 ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute -top-8 left-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg shadow-indigo-500/25">
                    <Code className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-8 space-y-5">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Write Code
                  </h3>
                  <p className="text-slate-600">
                    User-friendly editor with instant syntax correction
                  </p>
                  <div className="overflow-hidden rounded-xl bg-slate-900 p-4 font-mono text-sm shadow-inner">
                    <pre className="text-slate-300">
                      <code>{`<div class="hello">
  Hello World!
</div>`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: See Output */}
            <div
              className="group relative min-h-64"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative h-full rounded-2xl bg-white p-8 shadow-lg shadow-slate-200/50 ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute -top-8 left-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/25">
                    <Play className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-8 space-y-5">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Live Preview
                  </h3>
                  <p className="text-slate-600">
                    View changes immediately as you type
                  </p>
                  <div className="overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-inner">
                    <div className="hello animate-fade-in rounded-lg bg-indigo-100 p-3 text-center text-slate-700 shadow-sm">
                      Hello World!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Download */}
            <div
              className="group relative min-h-64"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="relative h-full rounded-2xl bg-white p-8 shadow-lg shadow-slate-200/50 ring-1 ring-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="absolute -top-8 left-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 shadow-lg shadow-violet-500/25">
                    <Download
                      className="h-7 w-7 text-white"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="mt-8 space-y-5">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Export
                  </h3>
                  <p className="text-slate-600">
                    Get project files that are production-ready
                  </p>
                  <button className="group/btn relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-violet-500 to-violet-600 px-6 py-3.5 text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2">
                    <div className="relative flex items-center justify-center space-x-2">
                      <Download className="h-5 w-5 transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                      <span className="font-medium">Download Project</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;