import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact - HTML CSS JS Code",
    description: "Contact the creator of the project.",
};

export default function Contact() {
    return (
        <div>
        <Navbar />
        <div className="flex flex-col items-center mt-20">
            <header className="flex flex-col justify-center items-center">
                <div className="flex justify-center items-center text-center">
                    <h1 data-animate="title" className="hidden md:block text-6xl font-bold"> Contact <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">HTML CSS JS</span></h1>
                    <h1 data-animate="title" className="md:hidden text-5xl font-bold"> Contact <br /><span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">HTML CSS JS</span></h1>
                </div>
                <div className="mt-12 max-w-[600px] px-5">
                    <p className="text-lg text-gray-700 mb-4">
                        You can get in touch with the creator of HTML CSS JS Code, Habeeb Moosa, by reaching out through the following channels:
                    </p>
                    <ul className="list-disc list-inside">
                        <li className="text-lg text-gray-700 mb-2">
                            Portfolio: <a href="https://habeebmoosa.vercel.app/" target={"_blank"} className="text-blue-500 hover:underline">Habeeb Moosa</a>
                        </li>
                        <li className="text-lg text-gray-700 mb-2">
                            Email: <a href="mailto:habeebmoodadev@gmail.com" className="text-blue-500 hover:underline">habeebmoodadev@gmail</a>
                        </li>
                        <li className="text-lg text-gray-700 mb-2">
                            Twitter: <a href="https://twitter.com/habeebmoosadev" target={"_blank"} className="text-blue-500 hover:underline">@habeebmoosadev</a>
                        </li>
                        <li className="text-lg text-gray-700 mb-2">
                            LinkedIn: <a href="https://www.linkedin.com/in/habeebmoosa" target={"_blank"} className="text-blue-500 hover:underline">Habeeb Moosa</a>
                        </li>
                        <li className="text-lg text-gray-700 mb-2">
                            GitHub: <a href="https://github.com/habeebmoosa" target={"_blank"} className="text-blue-500 hover:underline">habeebmoosa</a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
        <Footer />
    </div>
    )
}