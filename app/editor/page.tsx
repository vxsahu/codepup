"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { CodePanel } from "@/components/codepanel";
import { Output } from "@/components/output";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { OptionsMenu } from "@/components/options";

// Default sample code templates
const DEFAULT_HTML = `<div class="container">
  <h1 class="heading">Welcome to <span class="brand">CodePup</span>! 🐕</h1>
  <p class="subtitle">Start editing HTML, CSS, and JavaScript to see magic happen!</p>
</div>`;

const DEFAULT_CSS = `
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Inter', sans-serif;
  text-align: center;
}

.heading {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #000000;
}

.brand {
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: bold;
}

.subtitle {
  font-size: 1.2rem;
  color: #333333;
  max-width: 600px;
  line-height: 1.6;
}`;

const DEFAULT_JS = `// Your JavaScript code here
console.log("Welcome to CodePup! 🐕");`;

export default function CodeEditor() {
  // State management
  const [html, setHtml] = useState<string>("");
  const [css, setCss] = useState<string>("");
  const [js, setJs] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const drawerTriggerRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Load saved code or defaults
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHtml(localStorage.getItem("html") || DEFAULT_HTML);
      setCss(localStorage.getItem("css") || DEFAULT_CSS);
      setJs(localStorage.getItem("javascript") || DEFAULT_JS);
      setTags(localStorage.getItem("metatagsandcdns") || "");
    }
  }, []);

  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsOpen(prev => !prev);
      }
    };

    if (typeof window !== "undefined") {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, []);

  // Auto-save code changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saveToLocalStorage = () => {
        localStorage.setItem("html", html);
        localStorage.setItem("css", css);
        localStorage.setItem("javascript", js);
        localStorage.setItem("metatagsandcdns", tags);
      };

      const debounceTimer = setTimeout(saveToLocalStorage, 1000);
      return () => clearTimeout(debounceTimer);
    }
  }, [html, css, js, tags]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      {/* Header Navigation */}
      <nav className={`fixed top-0 w-full z-50 px-4 py-3 bg-surface backdrop-blur-sm transition-all duration-300 ${
        isOpen ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100 translate-y-0'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700/50 hover:bg-gray-600/50 transition-all duration-200"
          >
            <IoArrowBack className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <div className="flex items-center gap-4">
            <OptionsMenu
              html={html}
              css={css}
              js={js}
              tags={tags}
              setTags={setTags}
            />
          </div>
        </div>
      </nav>

      {/* Preview Section */}
      <div className="pt-16 h-[calc(100vh-4rem)]">
        <Output html={html} css={css} js={js} tags={tags} />
      </div>

      {/* Editor Panel */}
      <div className="fixed bottom-0 w-full">
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center justify-center px-4 py-3 bg-gray-800/95 backdrop-blur-sm border-t border-gray-700">
            <DrawerTrigger>
              <div className="flex items-center justify-center gap-2 py-2 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                <span className="text-sm font-medium">Open Editor</span>
                <kbd className="hidden md:inline-flex px-2 py-1 text-xs font-mono rounded bg-blue-700/80">
                  ⌘ + K
                </kbd>
              </div>
            </DrawerTrigger>
          </div>

          <DrawerContent className="bg-gray-900 border-t border-gray-700">
            <div className="flex justify-center w-full">
              <CodePanel
                html={html}
                css={css}
                js={js}
                setHtml={setHtml}
                setCss={setCss}
                setJs={setJs}
              />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </main>
  );
}
