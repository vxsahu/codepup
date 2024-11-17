import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { CodeIcon } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-16 sm:px-8">
        <Link 
          href="/" 
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-lg"
          aria-label="CodePup Home"
        >
          <div className="relative overflow-hidden rounded-xl p-1.5 bg-gradient-to-br from-blue-500/10 to-green-500/10 dark:from-blue-500/20 dark:to-green-500/20">
            <Image
              src="/codepup.webp"
              alt=""
              width={36}
              height={36}
              className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 will-change-transform"
            />
          </div>
          <h1 className="hidden sm:block font-bold text-lg text-slate-900 dark:text-white font-inter">
            <span className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-transparent [background-size:200%] animate-gradient">
              CodePup
            </span>
          </h1>
        </Link>

        <Link href="/editor">
          <Button className="relative overflow-hidden bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300 
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-500 before:to-yellow-500 before:opacity-0 before:transition-opacity hover:before:opacity-90
            active:scale-98 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 shadow-lg shadow-blue-500/20
            hover:shadow-xl hover:shadow-blue-500/30">
            <span className="relative flex items-center gap-2">
              <CodeIcon className="w-4 h-4" />
              Start Coding
            </span>
          </Button>
        </Link>
      </div>
    </nav>
  )
}