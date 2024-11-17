import { downloadCode } from "@/lib/downloadCode";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";

interface DownloadZipProps {
    html: string;
    css: string;
    js: string;
    tags: string;
}

export const DownloadZip = ({ html, css, js, tags }: DownloadZipProps) => {
    const [name, setName] = useState<string>("code");

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Download Code</DialogTitle>
                <DialogDescription>
                    Download your code in a zip file.
                </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col">
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2 mb-5"
                    placeholder="Enter file name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <button
                            className="w-full bg-primary text-white rounded-md p-2"
                            onClick={() => downloadCode(html, css, js, tags, name)}
                        >
                            Download Code
                        </button>
                    </DialogClose>
                </DialogFooter>
            </div>
        </DialogContent>
    )
}