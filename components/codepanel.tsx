import { useState } from "react";
import { TextEditor } from "./texteditor";
import { motion } from "framer-motion";

interface CodePanelProps {
    html: string;
    css: string;
    js: string;
    setHtml: (html: string) => void;
    setCss: (css: string) => void;
    setJs: (js: string) => void;
}

export const CodePanel = ({ html, css, js, setHtml, setCss, setJs }: CodePanelProps) => {
    const [code, setCode] = useState<string>("html");

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-7xl space-y-4"
        >
            <div className="flex flex-col items-end justify-end w-full rounded-lg">
                <TextEditor 
                    code={code === "html" ? html : code === "css" ? css : js} 
                    setCode={code === "html" ? setHtml : code === "css" ? setCss : setJs} 
                    lang={code}
                    onLanguageChange={setCode}
                />
            </div>
        </motion.div>
    );
};