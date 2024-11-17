import MonacoEditor from '@monaco-editor/react'
import { useEffect, useState } from 'react'
import { SiHtml5, SiCss3, SiJavascript } from "react-icons/si"
import { motion } from "framer-motion"

interface TextEditorProps {
  lang: string
  code: string
  setCode: (code: string) => void
  onLanguageChange?: (lang: string) => void
}

export const TextEditor = ({ lang, code, setCode, onLanguageChange }: TextEditorProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const handleEditorDidMount = (editor: any, monaco: any) => {
    setIsLoading(false)
    editor.getModel()?.updateOptions({ tabSize: 2 })
    editor.focus()
  }

  const localStorageValue = isMounted ? localStorage.getItem(lang) : null
  const defaultValue = localStorageValue ?? code

  const languages = [
    { id: "html", icon: SiHtml5, label: "HTML", color: "text-[#E34F26]" },
    { id: "css", icon: SiCss3, label: "CSS", color: "text-[#1572B6]" },
    { id: "javascript", icon: SiJavascript, label: "JS", color: "text-[#F7DF1E]" }
  ]

  return (
    <div className="relative w-full transition-all duration-300 ease-out">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/90 rounded-xl backdrop-blur-sm z-50">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
            <span className="text-sm text-gray-400 font-medium">
              Loading editor...
            </span>
          </div>
        </div>
      )}

      <div className="group relative w-full overflow-hidden rounded-xl border border-gray-800/50 bg-[#1e1e1e] shadow-2xl transition-all duration-300 hover:border-gray-700/70 hover:shadow-primary/5">
        <header className="absolute top-0 left-0 right-0 flex h-12 items-center justify-between px-4 bg-gray-900/80 backdrop-blur-md transition-colors duration-200 group-hover:bg-gray-900/90">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
              <button
                className="h-3 w-3 rounded-full bg-red-500/90 hover:bg-red-400 transition-colors"
                aria-label="Close editor"
              />
              <button
                className="h-3 w-3 rounded-full bg-yellow-500/90 hover:bg-yellow-400 transition-colors"
                aria-label="Minimize editor"
              />
              <button
                className="h-3 w-3 rounded-full bg-green-500/90 hover:bg-green-400 transition-colors"
                aria-label="Maximize editor"
              />
            </div>
            <div className="flex items-center justify-between gap-2 w-full">
              {/* Active language */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-800/50 border border-gray-700/30">
                <div className={`w-2 h-2 rounded-full ${lang === 'html' ? 'bg-orange-500' : lang === 'javascript' ? 'bg-yellow-500' : 'bg-blue-500'}`} />
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                  {lang}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="flex gap-2">
              {languages.map(({ id, icon: Icon, label, color }) => (
                <motion.button
                  key={id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onLanguageChange?.(id)}
                  className={`
                    flex items-center gap-2 px-3 py-1.5 rounded-md transition-all
                    ${
                      lang === id
                        ? "bg-gray-700 text-white"
                        : "hover:bg-gray-800 text-gray-400"
                    }
                  `}
                >
                  <Icon className={`text-sm ${color}`} />
                  <span className="hidden sm:block text-xs">{label}</span>
                </motion.button>
              ))}
            </div>
            <button
              className="p-1.5 text-gray-400 hover:text-gray-200 transition-colors"
              aria-label="Settings"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </header>

        <div className="mt-12">
          <MonacoEditor
            className="w-full transition-all duration-200"
            height="65vh"
            language={lang}
            defaultValue={defaultValue}
            theme="vs-dark"
            options={{
              fontSize: 15,
              lineHeight: 1.7,
              minimap: { enabled: false },
              scrollbar: {
                vertical: "visible",
                horizontalSliderSize: 4,
                verticalSliderSize: 4,
                horizontal: "visible",
              },
              overviewRulerLanes: 0,
              hideCursorInOverviewRuler: true,
              padding: { top: 20, bottom: 20 },
              smoothScrolling: true,
              cursorBlinking: "smooth",
              formatOnPaste: true,
              formatOnType: true,
              wordWrap: "on",
              renderLineHighlight: "all",
              fontFamily: "JetBrains Mono, monospace",
              fontLigatures: true,
            }}
            onMount={handleEditorDidMount}
            onChange={(value) => {
              if (value !== undefined && isMounted) {
                setCode(value);
                localStorage.setItem(lang, value);
              }
            }}
            value={code}
          />
        </div>
      </div>
    </div>
  );
}