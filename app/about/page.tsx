import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About - HTML CSS JS Code",
    description: "Learn about the project and the creator.",
};

export default function About() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center mt-20">
                <header className="flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center text-center">
                        <h1 data-animate="title" className="hidden md:block text-6xl font-bold"> About <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">HTML CSS JS</span></h1>
                        <h1 data-animate="title" className="md:hidden text-5xl font-bold"> About <br /><span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">HTML CSS JS</span></h1>
                    </div>
                    <div className="mt-12 max-w-[600px] px-5">
                        <p className="text-lg text-gray-700 mb-4">
                            HTML CSS JS Code is a project developed by{' '}
                            <span className="font-bold underline hover:text-gray-500">
                                <Link href={"https://habeebmoosa.vercel.app"} target={"_blank"}>Habeeb Moosa</Link>
                            </span>, a Full Stack
                            Developer, to showcase skills and abilities in building static sites
                            in real-time.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            The project is built using <span className="font-bold">Next.js</span>
                            , <span className="font-bold">TypeScript</span>, and{' '}
                            <span className="font-bold">Tailwind CSS</span>. It is deployed on{' '}
                            <span className="font-bold">Vercel</span>.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            With HTML CSS JS Code, users can code HTML, CSS, and JavaScript
                            snippets and see the output in real-time. They can create static
                            sites, and the recently coded data is stored locally in the browser.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            This is the fully responsive version of the project that works on all devices.
                            Additionally, users have the option to download the created static
                            sites as a zip file.
                        </p>
                        <p className="text-lg text-gray-700">
                            Explore the project at{' '}
                            <Link href="https://htmlcssjscode.vercel.app/"
                            className="underline hover:text-gray-500"
                            >
                                    htmlcssjscode.vercel.app
                            </Link>
                            .
                        </p>
                    </div>
                </header>
            </div>
            <Footer />
        </div>
    )
}
