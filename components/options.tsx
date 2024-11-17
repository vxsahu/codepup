import { FaGear } from "react-icons/fa6";
import React from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { MetaTags } from "./metatags";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { DownloadZip } from "./downloadzip";

interface OptionsMenuProps {
    html: string;
    css: string;
    js: string;
    tags: string;
    setTags: (tags: string) => void;
}

export const OptionsMenu = ({ html, css, js, tags, setTags }: OptionsMenuProps) => {

    const handleFullScreen = () => {
        if (document !== undefined) {
            const element = document.documentElement;
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if ((element as any).webkitRequestFullscreen) {
                    (element as any).webkitRequestFullscreen();
                } else if ((element as any).msRequestFullscreen) {
                    (element as any).msRequestFullscreen();
                }
            }
        }
    }

    return (
        <div className="flex items-center hover:cursor-pointer">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="">
                        <FaGear size={20} />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <Dialog>
                        <DialogTrigger asChild>
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onSelect={(e) => e.preventDefault()}
                            >
                                <span>Download Code</span>
                            </DropdownMenuItem>
                        </DialogTrigger>
                        <DownloadZip html={html} css={css} js={js} tags={tags} />
                    </Dialog>
                    <Dialog>
                        <DialogTrigger asChild>
                            <DropdownMenuItem className="cursor-pointer"
                                onSelect={(e) => e.preventDefault()}
                            >
                                <span>Add Meta Tags</span>
                            </DropdownMenuItem>
                        </DialogTrigger>
                        <MetaTags tags={tags} setTags={setTags} />
                    </Dialog>
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => {
                            localStorage.setItem('html', '');
                            localStorage.setItem('css', '');
                            localStorage.setItem('javascript', '');
                            window.location.reload();
                        }}
                    >
                        <span>Reset Code</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={handleFullScreen}
                    >
                        <span>Fullscreen</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}