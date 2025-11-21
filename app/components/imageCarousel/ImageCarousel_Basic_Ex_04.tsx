"use client";

import ImageCarousel_Basic, {CarouselImages} from "@/app/components/imageCarousel/ImageCarousel_Basic";
import {useState} from "react";

const images: CarouselImages = [
    {
        title: "Speaker 1",
        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-02.jpg",
    },
    {
        title: "Speaker 2",
        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-03.jpg",
    },
    {
        title: "Speaker 3",
        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-04.jpg",
    },
];

export default function ImageCarousel_Basic_Ex_04() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="space-y-8">
            <div>
                <div className="mb-4 flex w-full flex-wrap items-center justify-between gap-2">
                    <button
                        className="cursor-pointer rounded border px-3 py-1"
                        onClick={() => setSelectedIndex(Math.max(0, selectedIndex - 1))}
                    >
                        上一个
                    </button>
                    <span className="font-mono">当前页面: {selectedIndex + 1}</span>
                    <button
                        className="cursor-pointer rounded border px-3 py-1"
                        onClick={() =>
                            setSelectedIndex(Math.min(images.length - 1, selectedIndex + 1))
                        }
                    >
                        下一个
                    </button>
                </div>
                <ImageCarousel_Basic
                    images={images}
                    imageFit="contain"
                    selectedIndex={selectedIndex}
                    onSlideChange={setSelectedIndex}
                />
            </div>
        </div>
    );
}
